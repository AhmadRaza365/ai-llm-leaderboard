"use client"
import { Button } from "../ui/button"
import { SunIcon, MoonIcon } from "lucide-react"
import { useTheme } from "next-themes"

function ThemeSwitch() {
  const { resolvedTheme, setTheme } = useTheme()

  return (
    <Button
      size="icon"
      variant="outline"
      onClick={() => {
        setTheme(resolvedTheme === "dark" ? "light" : "dark")
      }}
    >
      {resolvedTheme === "light" ? <MoonIcon /> : <SunIcon />}
    </Button>
  )
}

export default ThemeSwitch
