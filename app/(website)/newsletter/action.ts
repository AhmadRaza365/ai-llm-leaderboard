"use server"

import { EmailRegex } from "@/lib/utils"

export const subscribeNewsletter = async ({
  email,
  userMetaData,
}: {
  email: string
  userMetaData: {
    country: string
    city: string
    region: string
    ipAddress: string
    referrer: string
    userAgent: string
    browserName: string
    osName: string
    isProxy: boolean
  }
}) => {
  if (!email) {
    return {
      result: "error",
      message: "Email is required",
    }
  }

  if (!EmailRegex.test(email)) {
    return {
      result: "error",
      message: "Invalid email address",
    }
  }

  try {
    const slackMessage = {
      blocks: [
        {
          type: "header",
          text: {
            type: "plain_text",
            text: `:tada: New Email Newsletter Subscription`,
            emoji: true,
          },
        },
        {
          type: "divider",
        },
        {
          type: "section",
          text: {
            type: "mrkdwn",
            text: `*Email:  * ${email}`,
          },
        },
        {
          type: "divider",
        },
        {
          type: "section",
          text: {
            type: "mrkdwn",
            text: `>:ninja: *User Meta Data:* \n *Country: * ${userMetaData.country} \n*City:  * ${userMetaData.city} \n*Region:  * ${userMetaData.region} \n*IP Address:  * ${userMetaData.ipAddress} \n*Referrer:  * ${userMetaData.referrer} \n*User Agent:  * ${userMetaData.userAgent} \n*User Browser Name:  * ${userMetaData.browserName} \n*User OS Name:  * ${userMetaData.osName} \n*Is Proxy:  * ${userMetaData.isProxy}`,
          },
        },
      ],
    }

    await fetch(process.env.NEXT_SLACK_WEBHOOK_URL ?? "", {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(slackMessage),
    })

    return {
      result: "success",
      message: "Subscribed to newsletter successfully",
    }
  } catch (error) {
    console.error(`Error sending Slack notification: ${error}`)
    return {
      result: "error",
      message: "Error happened while subscribing to newsletter",
    }
  }
}
