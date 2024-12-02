import { BiSolidOffer, BiSupport } from "react-icons/bi";
import {
  FaRegCreditCard,
  FaRegHeart,
  FaShippingFast,
  FaStar,
} from "react-icons/fa";
import { GrGift } from "react-icons/gr";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

import Slider from "./components/Slider";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Meta } from "@/components/Meta";
import { products } from "@/data/products";
import { CartItem } from "@/components/CartItem";
import { blogData } from "@/data/blogs";
import { BlogCart } from "@/components/BlogCart";

const bannerCategories = [
  {
    id: 1,
    image: "images/catbanner-01.jpg",
    announcement: "Mejor venta",
    title: "Laptops Max",
    description: "Desde S/1699.00 o S/64.62/mes",
    className: "col-span-2 row-span-1 lg:col-span-1 lg:row-span-1",
  },
  {
    id: 2,
    image: "images/catbanner-02.jpg",
    announcement: "Recién llegados",
    title: "Ipad Air",
    description: "Desde S/49.91/mes por 12 meses",
    className: "col-span-2 row-span-1 lg:col-span-1 lg:row-span-1",
  },
  {
    id: 3,
    image: "images/catbanner-03.jpg",
    announcement: "15% off",
    title: "Smartwatch 7",
    description: "Compre los últimos estilos y colores de bandas",
    className: "col-span-2 row-span-1 lg:col-span-1 lg:row-span-1",
  },
  {
    id: 4,
    image: "images/catbanner-04.jpg",
    announcement: "Grabado gratis",
    title: "Airpods Max",
    description: "Reproducción de alta fidelidad y distorsión ultrabaja",
    className: "col-span-2 row-span-1 lg:col-span-1 lg:row-span-1",
  },
];

const servicesFeatures = [
  {
    id: 1,
    icon: <FaShippingFast size={30} />,
    title: "Envío gratis",
    description: "Envío gratis para compras superiores a S/100.00",
    className: "lg:justify-start",
  },
  {
    id: 2,
    icon: <GrGift size={28} />,
    title: "Ofertas sorpresa diarias",
    description: "Ahorra hasta un 25% de descuento",
    className: "lg:justify-center",
  },
  {
    id: 3,
    icon: <BiSupport size={30} />,
    title: "Soporte 24/7",
    description: "Compra con un experto",
    className: "lg:justify-center",
  },
  {
    id: 4,
    icon: <FaRegCreditCard size={28} />,
    title: "Pagos seguros",
    description: "Pagos 100% protegidos",
    className: " lg:justify-center",
  },
  {
    id: 5,
    icon: <BiSolidOffer size={30} />,
    title: "Precios asequibles",
    description: "Obtenga precio directo de fábrica",
    className: "lg:justify-end",
  },
];

const productsCategories = [
  {
    id: 1,
    title: "Computadores y laptops",
    image: "/images/laptop.jpg",
    items: 8,
  },
  {
    id: 2,
    title: "Cámaras y videos",
    image: "/images/camera.jpg",
    items: 10,
  },
  {
    id: 3,
    title: "Televisores y audio",
    image: "/images/tv.jpg",
    items: 12,
  },
  {
    id: 4,
    title: "Relójes inteligentes",
    image: "/images/smartwatch.png",
    items: 13,
  },
  {
    id: 5,
    title: "Música y juegos",
    image: "/images/command.png",
    items: 4,
  },
  {
    id: 6,
    title: "Celulares y tablets",
    image: "/images/phone.webp",
    items: 6,
  },
  {
    id: 7,
    title: "Audífonos",
    image: "/images/headphone.jpg",
    items: 6,
  },
  {
    id: 8,
    title: "Accesorios",
    image: "/images/acc.jpg",
    items: 10,
  },
  {
    id: 9,
    title: "Parlantes portátiles",
    image: "/images/speaker.jpg",
    items: 8,
  },
  {
    id: 10,
    title: "Electrodomésticos",
    image: "/images/homeapp.jpg",
    items: 6,
  },
];

const productShowcase = [
  {
    id: 1,
    image: "/images/smartwatchdouble.png",
    feature: "Big Screen",
    title: "Smart Watch Series 7",
    description: "Desde S/299 o S/16.62/mes. durante 24 meses.*",
    background: "bg-black text-white",
  },
  {
    id: 2,
    image:
      "https://http2.mlstatic.com/D_NQ_NP_801112-MLA46516512347_062021-O.webp",
    feature: "Studio Display",
    title: "600 nits de brillo",
    description: "Pantalla Retina 5k de 27 pulgadas",
    background: "bg-white",
  },
  {
    id: 3,
    image:
      "https://http2.mlstatic.com/D_NQ_NP_796800-MPE78599946241_082024-O.webp",
    feature: "Smartphones",
    title: "Smartphone 13 Pro",
    description: "Desde S/999.00 o $41.62/mes, por 24 meses.",
    background: "bg-white",
  },
  {
    id: 4,
    image:
      "https://http2.mlstatic.com/D_NQ_NP_875506-MLA52316805225_112022-O.webp",
    feature: "Home speakears",
    title: "Room-filling sound",
    description: "Desde S/699 o S/116.58/mes, por 12 meses.*",
    background: "bg-white",
  },
];

const productBrands = [
  {
    id: 1,
    image: "/images/brand-01.png",
    title: "Apple",
  },
  {
    id: 2,
    image: "/images/brand-02.png",
    title: "Bose",
  },
  {
    id: 3,
    image: "/images/brand-03.png",
    title: "Canon",
  },
  {
    id: 4,
    image: "/images/brand-04.png",
    title: "Dell",
  },
  {
    id: 5,
    image: "/images/brand-05.png",
    title: "Intel",
  },
  {
    id: 6,
    image: "/images/brand-06.png",
    title: "Lg",
  },
  {
    id: 7,
    image: "/images/brand-07.png",
    title: "Samsung",
  },
  {
    id: 8,
    image: "/images/brand-08.png",
    title: "SanDisk",
  },
];

const specialOffers = [
  {
    id: 1,
    image: [
      "https://http2.mlstatic.com/D_NQ_NP_792119-MLA49084816366_022022-O.webp",
      "https://http2.mlstatic.com/D_NQ_NP_995573-MLA49084807517_022022-O.webp",
      "https://http2.mlstatic.com/D_NQ_NP_862661-MLU75330730071_032024-O.webp",
    ],
    brand: "Samsung",
    title: "Samsung Galaxy Note 10+ Mobile Phone",
    price: 60.0,
    oldPrice: 75.9,
    discount: 20,
    days: 742,
    products: 5,
    stars: 5,
  },
  {
    id: 2,
    image: [
      "https://http2.mlstatic.com/D_NQ_NP_671091-MLA70401570305_072023-O.webp",
      "https://http2.mlstatic.com/D_NQ_NP_922523-MLA74780680701_022024-O.webp",
      "https://http2.mlstatic.com/D_NQ_NP_936812-MLA70376959886_072023-O.webp",
    ],
    brand: "Sony",
    title: "Sony Alpha Cámara Compacta Digital Mirrorless",
    price: 3499,
    oldPrice: 4000,
    discount: 15,
    days: 365,
    products: 10,
    stars: 5,
  },
  {
    id: 3,
    image: [
      "https://http2.mlstatic.com/D_NQ_NP_700455-MLU74085972413_012024-O.webp",
      "https://http2.mlstatic.com/D_NQ_NP_692857-MLU73983277006_012024-O.webp",
      "https://http2.mlstatic.com/D_NQ_NP_703471-MLU73094432168_112023-O.webp",
    ],
    brand: "Sony",
    title: "Sony Parlante Inalámbrico Portátil Srs-xb100",
    price: 129,
    oldPrice: 199,
    discount: 35,
    days: 365,
    products: 10,
    stars: 5,
  },
  {
    id: 4,
    image: [
      "https://http2.mlstatic.com/D_NQ_NP_722803-MLU76147384799_052024-O.webp",
      "https://http2.mlstatic.com/D_NQ_NP_935628-MLU76147059307_052024-O.webp",
      "https://http2.mlstatic.com/D_NQ_NP_728647-MLU79026267240_092024-O.webp",
    ],
    brand: "Samsung",
    title: "Galaxy Tab S6 Lite (2024) Color Graphite",
    price: 999,
    oldPrice: 1499,
    discount: 35,
    days: 30,
    products: 12,
    stars: 5,
  },
  {
    id: 5,
    image: [
      "https://http2.mlstatic.com/D_NQ_NP_951269-MLU79086683803_092024-O.webp",
      "https://http2.mlstatic.com/D_NQ_NP_729937-MLU77360707390_072024-O.webp",
      "https://http2.mlstatic.com/D_NQ_NP_763160-MLU78056171789_072024-O.webp",
    ],
    brand: "Huawei",
    title: "Tablet Huawei Matepad 11.5 S 8+256gb",
    price: 1629,
    oldPrice: 2499,
    discount: 35,
    days: 365,
    products: 20,
    stars: 5,
  },

  {
    id: 6,
    image: [
      "https://http2.mlstatic.com/D_NQ_NP_692884-MLU76223208770_052024-O.webp",
      "https://http2.mlstatic.com/D_NQ_NP_782590-MLU76223139428_052024-O.webp",
      "https://http2.mlstatic.com/D_NQ_NP_986836-MLU76412455875_052024-O.webp",
    ],
    brand: "Hp",
    title: "Laptop Hp 15-fd0026la Intel Core I3",
    price: 1299,
    oldPrice: 1999,
    discount: 35,
    days: 365,
    products: 40,
    stars: 5,
  },
];

function Home() {
  return (
    <>
      <Meta title="Inicio" />
      {/* Category banners */}
      <section className="pb-10 sm:py-10">
        <div className="container mx-auto grid grid-cols-4 grid-row-2 sm:gap-4">
          {/* Slider */}
          <Slider />

          {bannerCategories.map((item) => (
            <div
              key={item.id}
              className={`${item.className} relative aspect-w-4 aspect-h-4 sm:aspect-h-9 sm:aspect-w-16 md:aspect-h-12 md:aspect-w-16 overflow-hidden sm:rounded-lg w-full h-full`}
            >
              <img src={item.image} alt={item.title} />
              <div className="absolute top-0 left-0 w-full h-full bg-black/50 flex p-3 sm:p-5">
                <div className="text-white space-y-3 sm:space-y-6">
                  <span className="text-xs font-normal sm:font-semibold uppercase bg-red-300/60 text-white px-2 py-1 rounded-md">
                    {item.announcement}
                  </span>
                  <h2 className="text-base sm:text-xl font-semibold">
                    {item.title}
                  </h2>
                  <p className="text-xs sm:text-sm">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section className=" bg-gray-100">
        <div className="container mx-auto grid grid-cols-2 lg:grid-cols-5 pb-10 gap-2 sm:gap-10 w-full">
          {servicesFeatures.map((item) => (
            <div
              key={item.id}
              className={`${item.className} flex items-center gap-4 lg:justify-start`}
            >
              <div>{item.icon}</div>
              <div>
                <h3 className="text-base sm:text-xl font-semibold text-gray-600">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Categories */}

        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-4 xl:grid-cols-5 w-full bg-white px-4 py-10 gap-4 rounded-lg shadow-lg">
          {productsCategories.map((item) => (
            <Card
              key={item.id}
              className="border-opacity-30 border-gray-200 hover:bg-gray-100 transition-all duration-300"
            >
              <CardHeader className="hidden"></CardHeader>
              <CardContent>
                <div className="flex items-center justify-between  gap-4 ">
                  <div className="w-[250px]">
                    <h2 className="text-lg font-semibold">{item.title}</h2>
                    <span className="text-sm text-gray-500">
                      {item.items} items
                    </span>
                  </div>
                  <div className="relative overflow-hidden h-[100px] w-[100px]">
                    <img
                      className="w-full h-full object-contain"
                      src={item.image}
                      alt={item.title}
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Featured products */}
        <div className="container mx-auto w-full py-10 gap-4">
          <div className="flex items-center justify-between mb-5">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-600">
              Productos Destacados
            </h2>
            <div className="flex items-center gap-1 text-gray-600">
              <IoIosArrowBack size={25} />

              <IoIosArrowForward size={25} />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {products.map((item) => (
              <CartItem key={item.id} item={item} />
            ))}
          </div>

          {/* Product showcase */}
          <div className="mx-auto container grid grid-cols-1 sm:grid-cols-2 gap-4 lg:grid-cols-4 py-10">
            {productShowcase.map((item) => (
              <Card className={`group ${item.background}`}>
                <CardHeader className="space-y-3">
                  <span className="text-sm uppercase">{item.feature}</span>
                  <CardTitle>{item.title}</CardTitle>
                  <CardDescription>{item.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="relative aspect-h-5 aspect-w-5 overflow-hidden h-full group-hover:scale-105 transition-all duration-500">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-contain"
                    />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Special offers */}
          <div className="container mx-auto w-full py-4 gap-4">
            <div className="flex items-center justify-between mb-5">
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-600">
                Ofertas Especiales
              </h2>
              <div className="flex items-center gap-1 text-gray-600">
                <IoIosArrowBack size={25} />

                <IoIosArrowForward size={25} />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4">
              {specialOffers.map((item) => (
                <Card key={item.id}>
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <span className="text-xs bg-orange-300 px-2 py-1 rounded-xl font-semibold">
                        -{item.discount}%
                      </span>
                      <FaRegHeart size={20} />
                    </div>
                  </CardHeader>
                  <CardContent className="grid grid-cols-2  gap-3 sm:gap-6">
                    <div className="grid grid-cols-2 grid-row-3 gap-4">
                      <div className="aspect-w-4 aspect-h-3 overflow-hidden col-span-2 row-span-2">
                        <img
                          src={item.image[0]}
                          alt={`${item.title} 1`}
                          className="object-contain w-full h-full"
                        />
                      </div>
                      <div className="aspect-w-4 aspect-h-3 overflow-hidden col-span-1 row-span-1">
                        <img
                          src={item.image[1]}
                          alt={`${item.title} 2`}
                          className="object-contain w-full h-full"
                        />
                      </div>
                      <div className="aspect-w-4 aspect-h-3 overflow-hidden col-span-1 row-span-1">
                        <img
                          src={item.image[2]}
                          alt={`${item.title} 3`}
                          className="object-contain w-full h-full"
                        />
                      </div>
                    </div>

                    <div className="space-y-3">
                      <div className="">
                        <span className="text-sm text-orange-300 font-semibold">
                          {item.brand}
                        </span>
                      </div>
                      <h3 className="text-lg font-semibold text-gray-600">
                        {item.title}
                      </h3>
                      {/* Stars */}
                      <div className="flex items-center gap-1">
                        <FaStar size={15} />
                        <FaStar size={15} />
                        <FaStar size={15} />
                        <FaStar size={15} />
                        <FaStar size={15} />
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-lg text-rose-500 font-semibold">
                          S/. {item.price}
                        </span>
                        <del>S/. {item.oldPrice}</del>
                      </div>
                      <div className="flex flex-col sm:flex-row items-center gap-4 py-1">
                        <span className="text-sm text-gray-500">
                          {item.days} días
                        </span>
                        <div className="flex items-center gap-1">
                          <span className="bg-rose-500 h-8 w-8 rounded-full text-sm text-white flex items-center justify-center">
                            13
                          </span>
                          <span className="font-semibold text-gray-500 text-base">
                            :
                          </span>
                          <span className="bg-rose-500 h-8 w-8 rounded-full text-sm text-white flex items-center justify-center">
                            00
                          </span>
                          <span className="font-semibold text-gray-500 text-base">
                            :
                          </span>
                          <span className="bg-rose-500 h-8 w-8 rounded-full text-sm text-white flex items-center justify-center">
                            38
                          </span>
                        </div>
                      </div>

                      <div className="flex-col items-center gap-3 py-1">
                        <span className="text-sm text-gray-500">
                          Productos: {item.products}
                        </span>
                        <Progress value={item.products} className="h-2" />
                      </div>
                      <Button className="rounded-md text-sm sm:text-base">
                        Agregar al carrito
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Brands */}
          <div className="container mx-auto w-full py-10 gap-4 bg-white rounded-lg shadow-lg grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8">
            {productBrands.map((item) => (
              <div key={item.id} className="overflow-hidden relative h-[100px]">
                <img
                  className="object-contain w-full h-full"
                  src={item.image}
                  alt={item.title}
                />
              </div>
            ))}
          </div>

          {/* Latest news */}
          <div className="container mx-auto w-full py-10 gap-4">
            <h2 className="text-2xl font-semibold text-gray-600 mb-5">
              Noticias Recientes
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {blogData.map((item) => (
                <BlogCart key={item.id} item={item} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
