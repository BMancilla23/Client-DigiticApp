import { IconType } from "react-icons/lib";

export interface SidebarItem {
  title: string;
  href?: string;
  icon: IconType;
  isActive: boolean;
  children?: SidebarItemChildren[];
}

export interface SidebarItemChildren {
  title: string;
  href: string;
}

export interface SidebarPage {
  title: string;
  href: string;
}
