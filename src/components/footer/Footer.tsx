import {
  FaApple,
  FaFacebookF,
  FaInstagram,
  FaPinterest,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const socialLinks = [
  { icon: <FaTwitter size={20} />, url: "https://twitter.com" },
  { icon: <FaFacebookF size={20} />, url: "https://facebook.com" },
  { icon: <FaPinterest size={20} />, url: "https://pinterest.com" },
  { icon: <FaInstagram size={20} />, url: "https://instagram.com" },
  { icon: <FaYoutube size={20} />, url: "https://youtube.com" },
];

export const Footer = () => {
  return (
    <footer className="bg-slate-900 w-full text-white py-12">
      <hr className="border-t-1 border-gray-200 opacity-20" />

      <div className="container mx-auto gap-10 px-4 grid grid-cols-7 py-14">
        <div className="space-y-6 col-span-7 sm:col-span-4 lg:col-span-2">
          <h1 className="text-2xl font-semibold">Contáctenos</h1>
          <div>
            <p>Tienda demo</p>
            <p>No. SJL, Lima, Perú</p>
          </div>
          <p>+51 999-999-999</p>
          <p>info@tienda.com</p>
          <div className="flex gap-4">
            {socialLinks.map((link) => (
              <Link
                to={link.url}
                key={link.url}
                className="text-white"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="link"
                  size="icon"
                  className="text-inherit bg-slate-800 rounded-full"
                >
                  {link.icon}
                </Button>
              </Link>
            ))}
          </div>
        </div>

        <div className="space-y-6 col-span-7 sm:col-span-3 lg:col-span-1">
          <h1 className="text-2xl font-semibold">Información</h1>
          <ul className="space-y-4">
            <li>
              <Link to="/">Política de privacidad</Link>
            </li>
            <li>
              <Link to="/">Política de devolución</Link>
            </li>
            <li>
              <Link to="/">Términos y condiciones</Link>
            </li>
            <li>
              <Link to="/">Blogs</Link>
            </li>
          </ul>
        </div>

        <div className="space-y-6 col-span-7 sm:col-span-4 lg:col-span-1">
          <h1 className="text-2xl font-semibold">Cuenta</h1>
          <ul className="space-y-4">
            <li>
              <Link to="/">Buscar</Link>
            </li>
            <li>
              <Link to="/">Sobre nosotros</Link>
            </li>
            <li>
              <Link to="/">Faq</Link>
            </li>
            <li>
              <Link to="/">Contacto</Link>
            </li>
            <li>
              <Link to="/">Tabla de tamaños</Link>
            </li>
          </ul>
        </div>

        <div className="space-y-6 col-span-7 sm:col-span-3 lg:col-span-1">
          <h1 className="text-2xl font-semibold">Enlaces rápidos</h1>
          <ul className="space-y-4">
            <li>
              <Link to="/">Accesorios</Link>
            </li>
            <li>
              <Link to="/">Laptops</Link>
            </li>
            <li>
              <Link to="/">Audifonos</Link>
            </li>
            <li>
              <Link to="/">Relojes</Link>
            </li>
            <li>
              <Link to="/">Tablets</Link>
            </li>
          </ul>
        </div>

        <div className="space-y-6 col-span-7 lg:col-span-2">
          <h1 className="text-2xl font-semibold">Nuestra App</h1>
          <p>
            Descarga nuestra aplicación y obtén un 15% de descuento adicional en
            tu primer pedido
          </p>
          <div className="flex gap-4 w-full">
            <div className="flex items-center gap-2 p-2 bg-white rounded-md text-black w-full">
              <IoLogoGooglePlaystore size={30} />
              <div className="space-y-1">
                <p className="text-xs">Consíguelo en la</p>
                <p className="text-sm sm:text-lg">Google Play</p>
              </div>
            </div>
            <div className="flex items-center gap-2 p-2 bg-white rounded-md text-black w-full">
              <FaApple size={30} />
              <div className="space-y-1">
                <p className="text-xs">Descarga en el</p>
                <p className="text-sm sm:text-lg">App Store</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <hr className="border-b-1 border-gray-200 opacity-20 mb-2" />

      <div className="px-3 container mx-auto flex items-center py-2">
        <p className="text-sm sm:text-base">
          &copy; {new Date().getFullYear()} Tienda Digitic. Todos los derechos
          reservados.
        </p>
      </div>
    </footer>
  );
};
