
import { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  Archive,
  BarChart2,
  Database,
  FileSpreadsheet,
  Files,
  Home,
  Settings,
  Users
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger
} from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";

const navigationItems = [
  {
    title: "Dashboard",
    path: "/dashboard",
    icon: Home,
  },
  {
    title: "Test Cases",
    path: "/test-cases",
    icon: Files,
  },
  {
    title: "Optimize Tests",
    path: "/",
    icon: FileSpreadsheet,
  },
  {
    title: "Analysis",
    path: "/analysis",
    icon: BarChart2,
  },
  {
    title: "Version Control",
    path: "/versions",
    icon: Archive,
  },
  {
    title: "User Management",
    path: "/users",
    icon: Users,
  },
  {
    title: "Data Management",
    path: "/data",
    icon: Database,
  },
  {
    title: "Settings",
    path: "/settings",
    icon: Settings,
  },
];

const AppSidebar = () => {
  return (
    <Sidebar className="border-r">
      <SidebarHeader className="py-6">
        <div className="flex items-center px-4">
          <div className="flex items-center gap-2">
            <div className="rounded-lg bg-primary p-1">
              <BarChart2 className="h-6 w-6 text-primary-foreground" />
            </div>
            <h1 className="text-lg font-bold text-sidebar-foreground">Test Suite Optimizer</h1>
          </div>
          <div className="ml-auto">
            <SidebarTrigger />
          </div>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Main Navigation</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {navigationItems.map((item) => (
                <SidebarMenuItem key={item.path}>
                  <SidebarMenuButton asChild>
                    <NavLink
                      to={item.path}
                      className={({ isActive }) =>
                        cn(
                          "flex items-center gap-3 rounded-md px-3 py-2 transition-colors",
                          isActive 
                            ? "bg-sidebar-accent text-sidebar-accent-foreground" 
                            : "transparent hover:bg-sidebar-accent/50 hover:text-sidebar-accent-foreground"
                        )
                      }
                    >
                      <item.icon className="h-5 w-5" />
                      <span>{item.title}</span>
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
};

export default AppSidebar;
