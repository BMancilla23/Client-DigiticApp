import { BreadcrumbCustom } from "@/components/BreadcrumbCustom";
import { CartItem } from "@/components/CartItem";
import { Meta } from "@/components/Meta";
import { PaginationCustom } from "@/components/PaginationCustom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { products } from "@/data/products";
import { ViewMode } from "@/enums/ViewMode";
import { useState } from "react";
import { BsFillGrid3X3GapFill } from "react-icons/bs";
import { FaList, FaStar } from "react-icons/fa";
const colors = [
  "bg-red-500",
  "bg-blue-500",
  "bg-green-500",
  "bg-yellow-500",
  "bg-purple-500",
  "bg-pink-500",
  "bg-orange-500",
  "bg-gray-500",
  "bg-black",
  "bg-white border border-gray-300 border-opacity-50",
  "bg-gray-200",
  "bg-gray-300",
  "bg-gray-400",
  "bg-gray-500",
  "bg-gray-600",
  "bg-gray-700",
  "bg-gray-800",
  "bg-gray-900",
  "bg-gray-100",
];

const sizes = [
  {
    label: "S",
    count: 10,
  },
  {
    label: "M",
    count: 13,
  },
  {
    label: "L",
    count: 10,
  },
  {
    label: "XL",
    count: 5,
  },
  {
    label: "XXL",
    count: 5,
  },
];

const tags = ["Audífonos", "Laptop", "Celular", "Parlante", "Tablet"];

export default function Store() {
  const [viewMode, setViewMode] = useState<ViewMode>(ViewMode.GRID);

  const handleViewMode = (mode: ViewMode) => {
    setViewMode(mode);
  };

  return (
    <>
      <Meta title="Tienda" />

      <section className=" bg-white h-16 w-full">
        <div className="container mx-auto flex items-center w-full h-full">
          <BreadcrumbCustom
            items={[
              { label: "Inicio", href: "/" },
              { label: "Tienda", href: "/store" },
            ]}
          />
        </div>
      </section>
      <section className="container flex flex-col sm:flex-row mx-auto gap-4 py-10">
        <div className="flex flex-col gap-6">
          <Card className="w-full sm:w-[260px] md:w-[300px]">
            <CardHeader>
              <CardTitle className="text-lg font-bold">Categorías</CardTitle>
            </CardHeader>
            <CardContent>
              {/* Categories */}

              <div className="flex flex-col gap-2 space-y-2">
                <div className="flex items-center gap-2">
                  <Checkbox />
                  <Label>Computadoras y laptops</Label>
                </div>
                <div className="flex items-center gap-2">
                  <Checkbox />
                  <Label>Televisores y audio</Label>
                </div>
                <div className="flex items-center gap-2">
                  <Checkbox />
                  <Label>Música y juegos</Label>
                </div>
                <div className="flex items-center gap-2">
                  <Checkbox />
                  <Label>Celulares y tablets</Label>
                </div>
                <div className="flex items-center gap-2">
                  <Checkbox />
                  <Label>Audífonos</Label>
                </div>
                <div className="flex items-center gap-2">
                  <Checkbox />
                  <Label>Accesorios</Label>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Filters */}
          <Card className="w-full sm:w-[260px] md:w-[300px]">
            <CardHeader>
              <CardTitle className="text-lg font-bold">Filtros</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col gap-8">
                {/* Disponibilidad */}
                <div className="flex flex-col gap-2 space-y-2">
                  <h3 className="text-sm font-bold">Disponibilidad</h3>
                  <div className="flex items-center gap-2">
                    <Checkbox />
                    <Label>
                      En stock <span>(21)</span>
                    </Label>
                  </div>
                  <div className="flex items-center gap-2">
                    <Checkbox />
                    <Label>
                      Agotado <span>(1)</span>
                    </Label>
                  </div>
                </div>

                {/* Precio */}
                <div className="flex flex-col gap-2 space-y-2">
                  <h3 className="text-sm font-bold">Precio</h3>
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-semibold">S/</span>
                      <Input
                        type="text"
                        placeholder="Desde"
                        className="bg-gray-50 border-none focus:ring-0 focus:ring-offset-0 focus:outline-none"
                      />
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-semibold">S/</span>
                      <Input
                        type="text"
                        placeholder="Hasta"
                        className="bg-gray-50 border-none focus:ring-0 focus:ring-offset-0 focus:outline-none"
                      />
                    </div>
                  </div>
                </div>

                {/* Color */}
                <div className="flex flex-col gap-2 space-y-2">
                  <h3 className="text-sm font-bold">Color</h3>
                  <div className="items-center gap-2 flex-wrap flex">
                    {colors.map((color, index) => (
                      <span
                        key={index}
                        className={`h-8 w-8 rounded-full ${color}`}
                      ></span>
                    ))}
                  </div>
                </div>
                {/* Tallas */}
                <div className="flex flex-col gap-2 space-y-2">
                  <h3 className="text-sm font-bold">Tallas</h3>
                  {sizes.map((size, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <Checkbox />
                      <Label>
                        {size.label} <span>({size.count})</span>
                      </Label>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Tags */}
          <Card className="w-full sm:w-[260px] md:w-[300px]">
            <CardHeader>
              <CardTitle className="text-lg font-bold">Tags</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {tags.map((tag, index) => (
                  <span
                    key={index}
                    className="bg-gray-100 px-2 py-1 text-sm rounded-md"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Related Products */}
          <Card className="w-full sm:w-[260px] md:w-[300px]">
            <CardHeader>
              <CardTitle className="text-lg font-bold">
                Productos Relacionados
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex gap-6 items-center">
                <div className="relative overflow-hidden h-[80px] w-[100px] aspect-w-2 aspect-h-1">
                  <img
                    src="https://http2.mlstatic.com/D_NQ_NP_938716-MLU77729623159_072024-O.webp"
                    className="object-contain w-full h-full"
                    alt="Product"
                  />
                </div>
                <div className="flex  flex-col gap-2">
                  <h3 className="text-sm font-semibold">
                    Kids Headphones Bulk 10 Pack Multi Colored For
                  </h3>
                  <div className="flex items-center gap-2">
                    <FaStar className="text-yellow-500" />
                    <FaStar className="text-yellow-500" />
                    <FaStar className="text-yellow-500" />
                    <FaStar className="text-yellow-500" />
                    <FaStar className="text-yellow-500" />
                  </div>
                  <span className="text-sm text-gray-500 font-semibold">
                    S/. 100.00
                  </span>
                </div>
              </div>
              <div className="flex gap-6 items-center">
                <div className="relative overflow-hidden h-[80px] w-[100px] aspect-w-4 aspect-h-3">
                  <img
                    src="https://http2.mlstatic.com/D_NQ_NP_632098-MLA79832535181_102024-O.webp"
                    className="object-contain w-full h-full"
                    alt="Product"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="text-sm font-semibold">
                    Apple Watch Series 42 Mm Stainiess Steel
                  </h3>
                  <div className="flex items-center gap-2">
                    <FaStar className="text-yellow-500" />
                    <FaStar className="text-yellow-500" />
                    <FaStar className="text-yellow-500" />
                    <FaStar className="text-yellow-500" />
                    <FaStar className="text-yellow-500" />
                  </div>
                  <span className="text-sm text-gray-500 font-semibold">
                    S/. 100.00
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Products */}
        <div className="flex-1 ">
          <div className="grid space-y-6">
            <div className="flex flex-col sm:flex-row items-center  justify-between bg-white p-4 rounded-lg sm:h-16 gap-4">
              <div className="flex items-center gap-2 w-full">
                {/*  <h2 className="text-2xl font-bold">Ordenar por</h2> */}
                <Select>
                  <SelectTrigger className="w-full sm:w-[150px]">
                    <SelectValue placeholder="Ordenar por" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="asc">Ascendente</SelectItem>
                    <SelectItem value="desc">Descendente</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex justify-between sm:justify-end items-center gap-3 w-full">
                <span className="text-sm text-gray-500">21 productos</span>
                <div className="flex items-center gap-2">
                  <button
                    className={`h-8 w-8 flex items-center justify-center rounded-md ${
                      viewMode === ViewMode.GRID
                        ? "bg-black text-white"
                        : "bg-gray-100"
                    }`}
                    onClick={() => handleViewMode(ViewMode.GRID)}
                  >
                    <BsFillGrid3X3GapFill size={20} />
                  </button>

                  <button
                    onClick={() => handleViewMode(ViewMode.LIST)}
                    className={`h-8 w-8 flex items-center justify-center rounded-md ${
                      viewMode === ViewMode.LIST
                        ? "bg-black text-white"
                        : "bg-gray-100"
                    }`}
                  >
                    <FaList size={20} />
                  </button>
                </div>
              </div>
            </div>
            <div
              className={`${
                viewMode === ViewMode.GRID
                  ? "grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-4"
                  : "flex flex-col gap-4"
              }`}
            >
              {products.map((item) => (
                <CartItem key={item.id} item={item} viewMode={viewMode} />
              ))}
            </div>
            {/* Pagination */}
            <div className="bg-white w-full  flex lg:flex-row  lg:justify-between flex-col justify-center p-4 rounded-lg gap-2">
              <div className=" flex justify-center lg:justify-start gap-2 w-full h-full">
                <span className="text-sm bg-gray-100 px-2 py-1 rounded-md">
                  Mostrando 1-20 de 21 productos
                </span>
              </div>

              <PaginationCustom
                className="justify-center lg:justify-end"
                currentPage={1}
                totalPages={10}
                onPageChange={() => {}}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
