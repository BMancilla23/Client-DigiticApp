import {
  AiOutlineDashboard,
  AiOutlineFile,
  AiOutlineLogout,
  AiOutlineProduct,
  AiOutlineSetting,
  AiOutlineShoppingCart,
  AiOutlineUser,
} from "react-icons/ai";
import { Link } from "react-router-dom";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSubButton,
} from "../ui/sidebar";
import { NavMain } from "./NavMain";

const data = {
  user: {
    name: "Juan Pérez",
    email: "juan.perez@example.com",
    avatar: "https://via.placeholder.com/150",
  },
  navMain: [
    {
      title: "General",
      href: "/dashboard",
      icon: AiOutlineDashboard,
      isActive: true,
    },
    {
      title: "Catalogo",
      href: "/catalogo",
      icon: AiOutlineProduct,
      isActive: true,
      children: [
        {
          title: "Productos",
          href: "/products",
        },

        {
          title: "Agregar Producto",
          href: "/products/add",
        },
        {
          title: "Categorías",
          href: "/categories",
        },
        {
          title: "Agregar Categoría",
          href: "/categories/add",
        },
      ],
    },
    {
      title: "Clientes",
      href: "/customers",
      icon: AiOutlineUser,
      isActive: true,
    },
    {
      title: "Ordenes",
      href: "/orders",
      icon: AiOutlineShoppingCart,
      isActive: true,
      children: [
        {
          title: "Lista de Ordenes",
          href: "/orders",
        },
        {
          title: "Detalle de Orden",
          href: "/orders/detail",
        },
      ],
    },
  ],
  pages: [],
};

const account = [
  {
    title: "Opciones",
    href: "/settings",
    icon: AiOutlineSetting,
    isActive: true,
  },
  {
    title: "Informes",
    href: "/reports",
    icon: AiOutlineFile,
    isActive: true,
  },
];

export const AppSidebar = () => {
  return (
    <Sidebar collapsible="icon">
      {/* Header Admin */}
      <SidebarHeader className="bg-slate-950 text-white">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              size="lg"
              className="group-data-[state=open]/collapsible:truncate"
            >
              <div className="flex items-center justify-between gap-2">
                <Link to="/dashboard">
                  <h2 className=" truncate text-2xl font-semibold uppercase">
                    DG
                  </h2>
                </Link>
                <span className="text-sm text-white bg-orange-300/90 px-4 py-2 rounded-lg">
                  Admin
                </span>
              </div>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      {/* Nav Main */}
      <SidebarContent className="bg-slate-950 text-white">
        <NavMain items={data.navMain} label="Aplicación" />
        <NavMain items={account} label="Cuenta" />
      </SidebarContent>
      <SidebarFooter className="bg-slate-950 text-white ">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuSubButton
              className="w-full bg-orange-300/90 h-11 transition-all duration-300 text-white [&>svg]:text-white [&>svg]:size-6  [&>svg]:hover:duration-300 [&>svg]:hover:text-gray-900 "
              asChild
            >
              <div className="flex items-center gap-2 w-full justify-center ">
                <AiOutlineLogout />
                <span className="text-lg">Cerrar Sesión</span>
              </div>
            </SidebarMenuSubButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
};
