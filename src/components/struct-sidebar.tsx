import { AppSidebar } from "@/components/app-sidebar"
import { SiteHeader } from "@/components/site-header"
import {
    SidebarInset,
    SidebarProvider,
} from "@/components/ui/sidebar"

type FullSidebar = {
    children: React.ReactNode;
};

export default function FullSidebar({ children }: FullSidebar) {
    return (
        <div className="[--header-height:calc(--spacing(14))]">
            <SidebarProvider defaultOpen={false} className="flex flex-col">
                <SiteHeader />
                <div className="flex flex-1">
                    <AppSidebar />
                    <SidebarInset>
                        {children}
                    </SidebarInset>
                </div>
            </SidebarProvider>
        </div>
    )
}