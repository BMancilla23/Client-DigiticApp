import { SidebarItem } from "@/types/data/sidebar";
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "../ui/sidebar";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "../ui/collapsible";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

interface NavMainProps {
  items: SidebarItem[];
  label: string;
}

export const NavMain = ({ items, label }: NavMainProps) => {
  return (
    <SidebarGroup>
      <SidebarGroupLabel className="text-sm font-medium text-muted-foreground">
        {label}
      </SidebarGroupLabel>
      <SidebarMenu>
        {items.map(({ title, icon: Icon, isActive, children }) => (
          <Collapsible
            key={title}
            defaultOpen={isActive}
            className="group/collapsible"
            asChild
          >
            <SidebarMenuItem>
              <CollapsibleTrigger asChild>
                <SidebarMenuButton className="[&>svg]:size-6" tooltip={title}>
                  {/* Icon &&  */ <Icon />}
                  <span className="text-base">{title}</span>
                  {children && (
                    <ChevronRight className="ml-auto transition-transform duration-300 group-data-[state=open]/collapsible:rotate-90" />
                  )}
                </SidebarMenuButton>
              </CollapsibleTrigger>
              <CollapsibleContent>
                <SidebarMenuSub>
                  {children?.map((subItem) => (
                    <SidebarMenuSubItem key={subItem.title}>
                      <SidebarMenuSubButton asChild>
                        <Link to={subItem.href}>
                          <span className="text-gray-400">{subItem.title}</span>
                        </Link>
                      </SidebarMenuSubButton>
                    </SidebarMenuSubItem>
                  ))}
                </SidebarMenuSub>
              </CollapsibleContent>
            </SidebarMenuItem>
          </Collapsible>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  );
};
