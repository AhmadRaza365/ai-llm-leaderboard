import {
  CATEGORIES,
  NATURAL_LANGUAGES,
  PROGRAMMING_LANGUAGES,
} from "@/data/Categories"

export const getLeaderboardType = (slug: string) => {
  const formattedSlug = (slug || "").trim().toLowerCase()

  if (formattedSlug === "use-cases") {
    return {
      boardType: "use-case",
      keyword: "academia",
      optionName: "Academia",
    }
  }

  if (formattedSlug === "natural-languages") {
    return {
      boardType: "natural-languages",
      keyword: "english",
      optionName: "English",
    }
  }

  if (formattedSlug === "programming-languages") {
    return {
      boardType: "programming-languages",
      keyword: "javascript",
      optionName: "Javascript",
    }
  }

  if (formattedSlug === "top-usage" || formattedSlug === "general") {
    return {
      boardType: "top-usage",
      keyword: "top-usage",
      optionName: "",
    }
  }

  const categoryOption = CATEGORIES.find(
    (cat) => cat.slug.toLowerCase() === formattedSlug
  )

  if (categoryOption) {
    return {
      boardType: "use-case",
      keyword: formattedSlug,
      optionName: categoryOption.name,
    }
  }
  const naturalLanguage = NATURAL_LANGUAGES.find(
    (cat) => cat.slug.toLowerCase() === formattedSlug
  )

  if (naturalLanguage) {
    return {
      boardType: "natural-languages",
      keyword: formattedSlug,
      optionName: naturalLanguage.name,
    }
  }
  const programmingLanguage = PROGRAMMING_LANGUAGES.find(
    (cat) => cat.slug.toLowerCase() === formattedSlug
  )

  if (programmingLanguage) {
    return {
      boardType: "programming-languages",
      keyword: formattedSlug,
      optionName: programmingLanguage.name,
    }
  }

  return {
    boardType: "use-case",
    keyword: formattedSlug,
    optionName: formattedSlug,
  }
}
