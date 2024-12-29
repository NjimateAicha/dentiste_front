import  { useEffect, useState } from "react"
import { Toggle } from "@/components/ui/toggle"
import { SunMoon } from "lucide-react"

export function ThemeToggle() {
    const [isDark, setIsDark] = useState(() => {
        // On initial load, read user's preference from localStorage or system setting
        if (typeof window !== "undefined") {
            return document.documentElement.classList.contains("dark")
        }
        return false
    })

    useEffect(() => {
        if (isDark) {
            document.documentElement.classList.add("dark")
        } else {
            document.documentElement.classList.remove("dark")
        }
        // Optionally store the user's preference
        localStorage.setItem("theme", isDark ? "dark" : "light")
    }, [isDark])

    return (
        <Toggle
            pressed={isDark}
            onPressedChange={(pressed) => setIsDark(pressed)}
            className="w-fit text-muted-foreground rounded"
        >
            <SunMoon/>
        </Toggle>
    )
}