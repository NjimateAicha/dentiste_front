import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup, SidebarGroupContent,
    SidebarGroupLabel,
    SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem,
} from "@/components/ui/sidebar.tsx"
import {
    Home,
    Gauge, Link
} from "lucide-react"
import {ThemeToggle} from "@/components/SideBar/theme-toggle.tsx"

const items = [
    {
        title: "patients",
        url: "/patients",
        icon: Home,
    },
    {
        title: "colors",
        url: "/colors",
        icon: Gauge,
    }
    ]

export function AppSidebar() {
    return (
        <Sidebar className="bg-sidebar-background text-secondary-foreground">
            <SidebarHeader>
                <div className="flex justify-center items-center mb-4 ">
                    <img className="w-6 h-6 mt-3 m-2" alt="Logo" src="src/assets/tooth-svgrepo-com.svg"/>

                    <h1 className="text-2xl font-bold text-blue-600 group-data-[collapsible=icon]:hidden">
                        Dentolog
                    </h1>
                </div>

            </SidebarHeader>
            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupLabel>Pages</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {items.map((item) => (
                                <SidebarMenuItem key={item.title} >
                                    <SidebarMenuButton asChild className="bg-muted hover:bg-accent text-black ">
                                        <Link
                                            to={item.url}
                                        >
                                            <item.icon className="h-5 w-5 mr-2" /> {item.title}
                                        </Link>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>

                <SidebarGroup/>
            </SidebarContent>
            <SidebarFooter className="flex justify-center items-center">
                <ThemeToggle/>
            </SidebarFooter>
        </Sidebar>
    )
}