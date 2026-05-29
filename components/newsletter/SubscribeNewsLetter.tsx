"use client"
import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { EmailRegex } from "@/lib/utils"
import { getBrowserType, getOsName } from "@/lib/userAgent"
import { subscribeNewsletter } from "@/app/(website)/newsletter/action"

function SubscribeNewsLetter({
  actionText = "Subscribe",
  fieldPlaceholder = "Enter your email",
}: {
  actionText?: string
  fieldPlaceholder?: string
}) {
  const [email, setEmail] = useState("")
  const [subscriptionState, setSubscriptionState] = useState<
    "not-subscribed" | "subscribed" | "subscribing"
  >("not-subscribed")
  const Keys = {
    MetaData: "ipMetaData",
    SubscriptionStatus: "subscriptionStatus",
  }

  const [message, setMessage] = useState<{
    type: "success" | "error"
    text: string
  } | null>(null)

  const [userMetaData, setUserMetaData] = useState({
    country: "",
    city: "",
    region: "",
    ipAddress: "",
    referrer: "",
    userAgent: "",
    browserName: "",
    osName: "",
    isProxy: false,
  })

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!email) {
      setMessage({
        type: "error",
        text: "Email is required",
      })
      return
    }

    if (!EmailRegex.test(email)) {
      setMessage({
        type: "error",
        text: "Invalid email address",
      })
      return
    }

    const subscriptionStatus = localStorage.getItem(Keys.SubscriptionStatus)

    if (subscriptionStatus) {
      setSubscriptionState("subscribed")
      setMessage({
        type: "success",
        text: "You are already subscribed to the newsletter",
      })
      return
    }

    setSubscriptionState("subscribing")
    const response = await subscribeNewsletter({
      email,
      userMetaData,
    })

    if (response.result === "success") {
      setSubscriptionState("subscribed")
      localStorage.setItem(Keys.SubscriptionStatus, "subscribed")
      setMessage({
        type: "success",
        text: response.message,
      })
    }

    if (response.result === "error") {
      setSubscriptionState("not-subscribed")

      setMessage({
        type: "error",
        text: response.message,
      })
    }
  }

  const getUserLocationFromIP = async () => {
    fetch("https://free.freeipapi.com/api/json/")
      .then((response) => response.json())
      .then((data) => {
        const metaData = data
        sessionStorage.setItem(Keys.MetaData, JSON.stringify(metaData))
        setUserMetaData({
          country: metaData.countryName ?? "",
          city: metaData.cityName ?? "",
          region: metaData.regionName ?? "",
          ipAddress: metaData.ipAddress ?? "",
          referrer: document.referrer ?? "direct",
          userAgent: navigator.userAgent ?? "",
          browserName: getBrowserType(),
          osName: getOsName(),
          isProxy: metaData.isProxy ?? false,
        })
      })
  }

  useEffect(() => {
    const ipMetaData = sessionStorage.getItem(Keys.MetaData)

    if (ipMetaData) {
      const metaData = JSON.parse(ipMetaData)
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setUserMetaData({
        country: metaData.countryName ?? "",
        city: metaData.cityName ?? "",
        region: metaData.regionName ?? "",
        ipAddress: metaData.ipAddress ?? "",
        referrer: document.referrer ?? "direct",
        userAgent: navigator.userAgent ?? "",
        browserName: getBrowserType(),
        osName: getOsName(),
        isProxy: metaData.isProxy ?? false,
      })
    } else {
      getUserLocationFromIP()
    }
  }, [])

  if (subscriptionState === "subscribed") {
    return (
      <section className="mt-2 flex items-center gap-2">
        <p className="text-green-500">{message?.text}</p>
      </section>
    )
  }

  return (
    <section className="mt-2">
      <form className="flex items-center gap-2" onSubmit={handleSubmit}>
        <Input
          className={`max-w-64 grow ${
            message?.type === "error"
              ? "border-destructive text-destructive"
              : ""
          }`}
          placeholder={fieldPlaceholder}
          type="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value)
            setMessage(null)
          }}
        />
        <Button disabled={subscriptionState === "subscribing"}>
          {actionText}
        </Button>
      </form>
      {message && message.text && (
        <p
          className={`mt-2 ${message.type === "success" ? "text-green-500" : "text-destructive"}`}
        >
          {message.text}
        </p>
      )}
    </section>
  )
}

export default SubscribeNewsLetter
