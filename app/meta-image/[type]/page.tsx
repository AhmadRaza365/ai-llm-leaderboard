/* eslint-disable @next/next/no-img-element */
import { getMetaDataForPageBySlug } from "@/lib/getMetaDataForSubPages"
import React from "react"

async function MetaImagePage({
  params,
}: {
  params: Promise<{ type: string }>
}) {
  const { type } = await params
  const { meta } = getMetaDataForPageBySlug(type)
  const { heading, subHeading } = meta.metaImage

  return (
    <section className="relative flex h-screen w-screen items-center justify-center bg-card">
      <img
        src={"/images/social-image-bg.jpg"}
        alt="Background"
        className="absolute inset-0 h-full w-full object-cover object-center"
      />

      <section className="z-20 -mt-8 flex flex-col items-center gap-4.5">
        <h1 className="text-[64px] font-bold text-white">{heading}</h1>
        <p className="text-2xl font-normal text-white">{subHeading}</p>
      </section>
    </section>
  )
}

export default MetaImagePage
