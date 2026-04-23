export type dateProps = {
  unformatedDate: string | Date
  format:
    | "DD-MM-YYYY"
    | "DD/MM/YYYY"
    | "DD MMM YYYY"
    | "YYYY-MM-DD"
    | "DD-MM-YYYY - HH:MM AM"
    | "DD MMM YYYY - HH:MM AM"
    | "HH:MM AM"

  timezone?: string | null
}

const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
]

function getDateInTimezone(
  unformatedDate: string | Date,
  timezone?: string | null
): Date {
  const date = new Date(unformatedDate)
  if (!timezone) return date

  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: timezone,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  })
    .formatToParts(date)
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    .reduce((acc: any, part) => {
      if (part.type !== "literal") acc[part.type] = part.value
      return acc
    }, {})

  return new Date(
    `${parts.year}-${parts.month}-${parts.day}T${parts.hour}:${parts.minute}:${parts.second}`
  )
}

export const formatDate = ({
  unformatedDate,
  format = "DD-MM-YYYY",
  timezone,
}: dateProps) => {
  if (!unformatedDate) return "-"

  const date = getDateInTimezone(unformatedDate, timezone)

  const day = date.getDate().toString().padStart(2, "0")
  const month = (date.getMonth() + 1).toString().padStart(2, "0")

  const year = date.getFullYear()

  if (format === "DD-MM-YYYY") {
    return `${day}-${month}-${year}`
  } else if (format === "DD/MM/YYYY") {
    return `${day}/${month}/${year}`
  } else if (format === "DD MMM YYYY") {
    return `${day} ${months[date.getMonth()]} ${year}`
  } else if (format === "YYYY-MM-DD") {
    return `${year}-${month}-${day}`
  } else if (format === "DD-MM-YYYY - HH:MM AM") {
    let hours = date.getHours()
    const minutes = date.getMinutes().toString().padStart(2, "0")
    const ampm = hours >= 12 ? "PM" : "AM"
    hours = hours % 12 || 12
    const hoursStr = hours.toString().padStart(2, "0")

    return `${day}-${month}-${year} - ${hoursStr}:${minutes} ${ampm}`
  } else if (format === "DD MMM YYYY - HH:MM AM") {
    let hours = date.getHours()
    const minutes = date.getMinutes().toString().padStart(2, "0")
    const ampm = hours >= 12 ? "PM" : "AM"
    hours = hours % 12 || 12
    const hoursStr = hours.toString().padStart(2, "0")

    return `${day} ${months[date.getMonth()]} ${year} - ${hoursStr}:${minutes} ${ampm}`
  } else if (format === "HH:MM AM") {
    let hours = date.getHours()
    const minutes = date.getMinutes().toString().padStart(2, "0")
    const ampm = hours >= 12 ? "PM" : "AM"

    hours = hours % 12 || 12

    const hoursStr = hours.toString().padStart(2, "0")

    return `${hoursStr}:${minutes} ${ampm}`
  } else {
    return `${day}-${month}-${year}`
  }
}
