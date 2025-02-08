"use client"
import * as React from "react"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar"
import { BoxIcon, FileArchive, LayoutDashboard, PersonStanding } from "lucide-react"
import { usePathname } from "next/navigation";

// This is sample data.
const Navlinks= [
  { name:"Dashboard", icon: LayoutDashboard, link: "/" },
  { name:"Cliente", icon: PersonStanding, link: "/cliente" },
  { name:"Categoria", icon: FileArchive, link: "/categoria" },
  { name:"Productos", icon: BoxIcon , link: "/ productos" },
  ]
export function AppSidebar() {
  const pathname = usePathname();
  return (
    <Sidebar>
      <SidebarHeader>
      </SidebarHeader>
      <SidebarContent>
      {Navlinks.map((item, index) => {
        const isActive = pathname === item.link; // Verifica se a rota está ativa

        return (
          <SidebarGroup key={index}>
            <SidebarGroupContent>
              <SidebarMenu
                className={`flex h-16 items-center justify-start rounded-xl px-4 text-black ${
                  isActive ? "text-white bg-primary" : "hover:text-white hover:bg-primary"
                }`}
              >
                <SidebarMenuItem key={item.name} className="flex flex-row items-center text-center justify-center p-2 gap-2 w-full">
                  {/* Ícone */}
                  <SidebarMenuButton
                    asChild
                    className={`w-10 h-10 flex items-center justify-center rounded-lg transition-all duration-300 bg-black text-white ${
                      isActive ? "   bg-white text-primary" : "hover:bg-white hover:text-primary"
                    }`}
                  >
                    <a href={item.link}>
                      <item.icon />
                    </a>
                  </SidebarMenuButton>

                  {/* Nome */}
                  <SidebarMenuButton asChild className="flex-1">
                    <a
                      href={item.link}
                      className={`text-sm font-medium transition-all duration-300 ${
                        isActive ? "text-white bg-primary px-2 py-1 rounded-lg" : "hover:text-gray-200"
                      }`}
                    >
                      {item.name}
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        );
      })}
    </SidebarContent>
      <SidebarRail />
    </Sidebar>
  )
}
