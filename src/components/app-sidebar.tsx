import * as React from "react"
import {
  Compass,
  Github, Linkedin,
  SquareTerminal,
} from "lucide-react"

import { NavProjects } from "@/components/nav-projects"
import { NavFooter } from "@/components/nav-footer.tsx"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import {NavSocials} from "@/components/nav-social.tsx";
import {Profile} from "@/data/profile.ts";

const data = {
  // no user data
  // user: {
  //   name: "shadcn",
  //   email: "m@example.com",
  //   avatar: "/avatars/shadcn.jpg",
  // },
  navMain: [
    // no other pages
    // {
    //   title: "Playground",
    //   url: "#",
    //   icon: SquareTerminal,
    //   isActive: true,
    //   items: [
    //     {
    //       title: "History",
    //       url: "#",
    //     },
    //   ],
    // },
  ],
  navFooter: [
    // no feedback
    // {
    //   title: "Feedback",
    //   url: "#",
    //   icon: Send,
    // },
  ],
  socials: [
    {
      name: "tyhal",
      url: Profile.social.github,
      icon: Github,
    },
    {
      name: "tyhal",
      url: Profile.social.linkedin,
      icon: Linkedin,
    }
  ],
  projects: [
    {
      name: "crie.",
      url: "https://github.com/tyhal/crie",
      icon: SquareTerminal,
    }
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar
      className="top-(--header-height) h-[calc(100svh-var(--header-height))]!"
      {...props}
    >
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <a href="#">
                <div className="bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg">
                  <Compass className="size-4" />
                </div>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-medium">Links</span>
                  <span className="truncate text-xs">and other things</span>
                </div>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        {/* no additional pages for now */}
        {/*<NavMain items={data.navMain} />*/}
        <NavSocials socials={data.socials} />
        <NavProjects projects={data.projects} />
        <NavFooter items={data.navFooter} className="mt-auto" />
      </SidebarContent>
      <SidebarFooter>
        {/*disable no users*/}
        {/*<NavUser user={data.user} />*/}
      </SidebarFooter>
    </Sidebar>
  )
}
