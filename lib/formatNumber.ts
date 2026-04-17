export function formatNumberToShortScaleNotation(
  value: number,
  decimals = 2
): string {
  if (value === null || value === undefined || isNaN(value)) return "-"

  const abs = Math.abs(value)

  if (abs < 1000) return value.toString()

  const units = [
    { limit: 1e12, suffix: "T" },
    { limit: 1e9, suffix: "B" },
    { limit: 1e6, suffix: "M" },
    { limit: 1e3, suffix: "K" },
  ]

  for (const u of units) {
    if (abs >= u.limit) {
      const formatted = (value / u.limit).toFixed(decimals)
      return formatted.replace(/\.0+$/, "") + u.suffix
    }
  }

  return value.toString()
}
