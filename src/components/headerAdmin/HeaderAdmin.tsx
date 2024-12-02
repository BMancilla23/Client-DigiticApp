import { Search } from "lucide-react";
import { Input } from "../ui/input";
import { Separator } from "../ui/separator";
import { SidebarTrigger } from "../ui/sidebar";
import { IoIosNotifications } from "react-icons/io";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

export const HeaderAdmin = () => {
  return (
    <header className="flex w-full h-16 shrink-0 items-center gap-2 transition-[width, height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12 border-b border-gray-200 sticky top-0 ">
      <div className="flex items-center gap-2 px-6 justify-between w-full">
        <div className="flex items-center gap-2">
          <SidebarTrigger />
          <Separator orientation="vertical" className="mr-2 h-4" />
          <div className="flex items-center gap-2 bg-gray-100 rounded-md px-2 w-[320px] min-w-[200px]">
            <button>
              <Search size={20} />
            </button>
            <Input
              type="text"
              placeholder="Buscar"
              className="bg-transparent border-none outline-none w-full focus:ring-0 focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:ring-offset-transparent"
            />
          </div>
        </div>

        <div className="flex items-center gap-5">
          <div className="w-8 h-full aspect-w-16 aspect-h-9 overflow-hidden rounded-md">
            <img
              src="https://www.banderasphonline.com/wp-content/uploads/2020/05/comprar-bandera-peru-sin-escudo-para-mastil-exterior-interior-1200x900.png"
              alt="logo"
              className="w-full h-full object-contain rounded-md"
            />
          </div>
          <div className="relative">
            <IoIosNotifications size={30} />
            <span className="absolute -top-1 -right-1 w-4 h-4 bg-orange-300 rounded-full text-white text-xs flex items-center justify-center">
              3
            </span>
          </div>

          <div className="flex items-center gap-2">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>
                <span className="text-xs">CN</span>
              </AvatarFallback>
            </Avatar>
            <div className="flex flex-col">
              <span className="text-sm font-medium">Juan Perez</span>
              <span className="text-xs text-gray-500">
                Juan.perez@gmail.com
              </span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
