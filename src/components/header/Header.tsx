import {
  ChevronDown,
  Heart,
  RefreshCcw,
  Search,
  ShoppingCart,
  User,
} from "lucide-react";
import { CiMenuFries } from "react-icons/ci";
import { NavLink } from "react-router-dom";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "../ui/sheet";
import { Separator } from "../ui/separator";

const links = [
  {
    label: "Inicio",
    to: "/",
  },
  {
    label: "Tienda",
    to: "/store",
  },
  {
    label: "Blog",
    to: "/blog",
  },
  {
    label: "Contacto",
    to: "/contact",
  },
];

export const Header = () => {
  // backdrop-blur-sm propiedad para que el header tenga un efecto de desenfoque
  return (
    <header className="w-full flex flex-col  bg-slate-950 sticky top-0 z-50 ">
      {/* Top */}
      <div className="flex flex-col lg:flex-row lg:justify-between  lg:items-center w-full py-2 border-b border-opacity-20 border-gray-200 text-white">
        <div className="container mx-auto flex flex-col sm:flex-row  lg:items-center sm:justify-between ">
          <div className="px-2 sm:px-0 bg-white text-black sm:text-white sm:bg-inherit py-3">
            <span className="text-xs lg:text-sm sm:text-white">
              Envío gratis a partir de S/100 y devoluciones gratis
            </span>
          </div>

          <div className="flex items-center px-2 sm-px-0 py-3  sm:justify-start space-x-4 sm:space-x-6">
            <p className="text-xs lg:text-sm text-white">
              Linea Directa: +51 999 999 999
            </p>
            <div className="text-xs lg:text-sm text-white flex items-center gap-2">
              <span>Ingles</span>
              <ChevronDown size={15} />
            </div>
            <div className="text-xs lg:text-sm text-white flex items-center gap-2">
              <span>PEN</span>
              <ChevronDown size={15} />
            </div>
          </div>
        </div>
      </div>

      {/* Middle */}
      <div className="flex px-2 justify-between container mx-auto items-center w-full py-4 gap-10  xl:gap-40 text-white">
        {/* Logo */}
        <div className="flex items-center w-full justify-between lg:justify-start lg:w-auto">
          <h1 className="text-xl sm:text-2xl tracking-wider uppercase font-bold">
            Digitic
          </h1>
          <Sheet>
            <SheetTrigger asChild className="lg:hidden">
              <CiMenuFries size={30} className="text-white " />
            </SheetTrigger>
            <SheetContent className="flex lg:hidden border-none flex-col gap-8 bg-slate-800 w-[300px] sm:w-auto">
              <SheetTitle className="hidden"></SheetTitle>
              {/* Search Mobile */}
              <div className=" relative h-10 px-2 items-center rounded-lg border  bg-white  flex justify-between items-centers">
                <input
                  type="search"
                  placeholder="Buscar producto aqui..."
                  className="bg-transparent px-2 outline-none w-full text-sm placeholder:text-black text-black"
                />
                <div className="absolute rounded-r-lg right-0 top-1/2 -translate-y-1/2 bg-orange-300 text-black p-2 h-full">
                  <Search />
                </div>
              </div>

              {/* Actions Mobile */}
              <div className="grid grid-cols-2 items-center gap-8">
                <div className="flex items-center gap-2">
                  <div>
                    <RefreshCcw
                      size={25}
                      className="text-white sm:h-8 sm:w-8"
                    />
                  </div>
                  <div className="text-white space-y-2">
                    <span className="block text-xs">Comparar</span>
                    <span className="block text-xs">Productos</span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div>
                    <Heart size={25} className="text-white sm:h-8 sm:w-8" />
                  </div>
                  <div className="text-white space-y-2">
                    <span className="block text-xs sm:text-sm">Favoritos</span>
                    <span className="block text-xs sm:text-sm">
                      Lista de deseos
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div>
                    <User size={25} className="text-white sm:h-8 sm:w-8" />
                  </div>
                  <div className="text-white space-y-2">
                    <span className="block text-xs sm:text-sm">Accceso</span>
                    <span className="block text-xs sm:text-sm">Mi cuenta</span>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <div>
                    <ShoppingCart
                      className="text-orange-300 sm:h-8 sm:w-8"
                      size={25}
                    />
                  </div>
                  <div className="text-white space-y-2">
                    <div className="h-6 w-6 p-2 rounded-full bg-gray-300 mb-1 flex items-center justify-center">
                      <span className="text-sm text-black">0</span>
                    </div>
                    <span className="block text-xs sm:text-sm">S/0.00</span>
                  </div>
                </div>
              </div>

              {/* Links Mobile */}
              <div className="bg-slate-800 flex w-full">
                <div className="container flex-col mx-auto w-full flex gap-10 py-2 ">
                  <Select>
                    <SelectTrigger className="w-full text-xs mb-10">
                      <SelectValue placeholder="CATEGORÍAS DE TIENDA" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1">Categoria 1</SelectItem>
                      <SelectItem value="2">Categoria 2</SelectItem>
                    </SelectContent>
                  </Select>

                  <Separator className="border-none border-white" />

                  <ul className="flex justify-start mt-10  items-start flex-col  gap-10 text-white">
                    {links.map((link) => (
                      <NavLink
                        className={({ isActive }) =>
                          `${
                            isActive ? "text-orange-300" : ""
                          } uppercase hover:text-orange-300 transition-colors duration-300  text-sm sm:text-base`
                        }
                        key={link.to}
                        to={link.to}
                      >
                        {link.label}
                      </NavLink>
                    ))}
                  </ul>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>

        {/* Search */}

        <div className="hidden relative h-11 px-2 w-full items-center rounded-lg border min-w-[380px]  bg-white  lg:flex justify-between items-centers">
          <input
            type="search"
            placeholder="Buscar producto aqui..."
            className="bg-transparent px-2 outline-none w-full placeholder:text-black text-black"
          />
          <div className="absolute rounded-r-lg right-0 top-1/2 -translate-y-1/2 bg-orange-300 text-black p-2 h-full">
            <Search />
          </div>
        </div>

        {/* Actions */}
        <div className="hidden lg:flex items-center gap-4 xl:gap-8">
          <div className="flex items-center gap-2">
            <div>
              <RefreshCcw size={35} className="text-white" />
            </div>
            <div>
              <span className="block text-sm">Comparar</span>
              <span className="block text-sm">Productos</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div>
              <Heart size={35} className="text-white" />
            </div>
            <div>
              <span className="block text-sm">Favoritos</span>
              <span className="block text-sm">Lista de deseos</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div>
              <User size={35} className="text-white" />
            </div>
            <div>
              <span className="block text-sm">Accceso</span>
              <span className="block text-sm">Mi cuenta</span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <div>
              <ShoppingCart className="text-orange-300" size={40} />
            </div>
            <div>
              <div className="h-6 w-6 p-2 rounded-full bg-gray-300 mb-1 flex items-center justify-center">
                <span className="text-sm text-black">0</span>
              </div>
              <span className="block text-sm">S/0.00</span>
            </div>
          </div>
        </div>
      </div>

      {/* Links */}
      <div className="bg-slate-800 hidden lg:flex w-full">
        <div className="container mx-auto w-full flex gap-10 py-2">
          <Select>
            <SelectTrigger className="w-[280px]">
              <SelectValue placeholder="CATEGORÍAS DE TIENDA" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1">Categoria 1</SelectItem>
              <SelectItem value="2">Categoria 2</SelectItem>
            </SelectContent>
          </Select>
          <span className="text-white border-l px-4"></span>
          <ul className="flex items-center gap-10 text-white">
            {links.map((link) => (
              <NavLink
                className={({ isActive }) =>
                  `${
                    isActive ? "text-orange-300" : ""
                  } uppercase hover:text-orange-300 transition-colors duration-300`
                }
                key={link.to}
                to={link.to}
              >
                {link.label}
              </NavLink>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
};
