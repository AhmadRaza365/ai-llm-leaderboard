import { getLlmModelsList } from "@/actions/actions"
import LlmModelCard from "@/components/model/LlmModelCard"
import { Button } from "@/components/ui/button"
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"
import { LlmModelsListResponse } from "@/interfaces/Response"
import { getValidPositiveNumber } from "@/lib/formatNumber"
import {
  buildPageHref,
  getPageNumbers,
  getSearchParamValue,
} from "@/lib/pagination"
import { ArrowUpRight } from "lucide-react"
import Link from "next/link"

type SearchParams = Promise<{
  [key: string]: string | string[] | undefined
}>

async function ModelsPage({ searchParams }: { searchParams: SearchParams }) {
  const resolvedSearchParams = await searchParams
  const pageNumber = getValidPositiveNumber(
    getSearchParamValue(resolvedSearchParams.pageNumber),
    1
  )
  const pageSize = getValidPositiveNumber(
    getSearchParamValue(resolvedSearchParams.pageSize),
    30
  )
  const currentParams = {
    pageSize: String(pageSize),
  }

  const res = await getLlmModelsList({
    limit: pageSize,
    page: pageNumber,
  })

  const response: LlmModelsListResponse = JSON.parse(res || "{}")
  const models = response.data || []
  const pagination = response.pagination || {
    total: 0,
    currentPage: 1,
    totalPages: 1,
    hasNextPage: false,
    hasPrevPage: false,
  }
  const { totalPages, currentPage, hasNextPage, hasPrevPage, total } =
    pagination
  const pages = getPageNumbers(currentPage, Math.max(totalPages, 1))

  return (
    <main className="mt-20 min-h-svh py-16">
      <section className="mx-auto flex max-w-5xl flex-col items-center px-6 py-12 text-center">
        <h1 className="font-satoshi text-4xl leading-[1.4] font-medium tracking-tight text-balance sm:text-5xl md:text-6xl lg:text-7xl">
          List of All{" "}
          <span className="ms-2 inline-block rounded-md bg-primary px-1.5 py-0.5 leading-[1.1] tracking-tight text-primary-foreground sm:rounded-lg sm:px-3.5">
            LLM Models
          </span>
        </h1>
        <p className="mt-6 text-center text-xl tracking-normal text-balance text-muted-foreground sm:text-2xl sm:leading-normal md:text-3xl">
          Discover and compare 500+ large language models with real-time
          rankings, benchmarks, and community votes.
        </p>
        <div className="mx-auto mt-10 flex w-full max-w-xs flex-col items-center justify-center gap-4 sm:flex-row">
          <Link href={"/leaderboards"}>
            <Button className="w-full sm:w-auto" size="lg">
              View Leaderboards <ArrowUpRight />
            </Button>
          </Link>
        </div>
      </section>

      <section className="container mx-auto grid grid-cols-1 gap-6 px-5 md:grid-cols-2 lg:grid-cols-3">
        {models.map((model, index) => {
          return <LlmModelCard key={index} details={model} />
        })}

        <section className="col-span-full mt-4 space-y-4">
          <p className="text-center text-sm text-muted-foreground">
            Showing page {currentPage} of {Math.max(totalPages, 1)} with {total}{" "}
            models total
          </p>

          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious
                  href={buildPageHref({
                    currentParams,
                    pageNumber: hasPrevPage ? currentPage - 1 : currentPage,
                    basePage: "/models",
                  })}
                  className={
                    !hasPrevPage ? "pointer-events-none opacity-50" : undefined
                  }
                  aria-disabled={!hasPrevPage}
                  tabIndex={!hasPrevPage ? -1 : undefined}
                />
              </PaginationItem>

              {pages.map((page, index) => {
                if (page === "ellipsis") {
                  return (
                    <PaginationItem key={`ellipsis-${index}`}>
                      <PaginationEllipsis />
                    </PaginationItem>
                  )
                }

                return (
                  <PaginationItem key={page}>
                    <PaginationLink
                      href={buildPageHref({
                        currentParams,
                        pageNumber: page,
                        basePage: "/models",
                      })}
                      isActive={page === currentPage}
                    >
                      {page}
                    </PaginationLink>
                  </PaginationItem>
                )
              })}

              <PaginationItem>
                <PaginationNext
                  href={buildPageHref({
                    currentParams,
                    pageNumber: hasNextPage ? currentPage + 1 : currentPage,
                    basePage: "/models",
                  })}
                  className={
                    !hasNextPage ? "pointer-events-none opacity-50" : undefined
                  }
                  aria-disabled={!hasNextPage}
                  tabIndex={!hasNextPage ? -1 : undefined}
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </section>
      </section>
    </main>
  )
}

export default ModelsPage
