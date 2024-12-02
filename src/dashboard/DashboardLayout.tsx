import { HeaderAdmin } from "@/components/headerAdmin/HeaderAdmin";
import { AppSidebar } from "@/components/sidebar/AppSidebar";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { Outlet } from "react-router-dom";

export default function DashboardLayout() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <HeaderAdmin />
        <div className="p-7">
          <Outlet />
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
