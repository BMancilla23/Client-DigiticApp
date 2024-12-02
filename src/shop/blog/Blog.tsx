import { BreadcrumbCustom } from "@/components/BreadcrumbCustom";
import { Meta } from "@/components/Meta";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { MdOutlineArticle } from "react-icons/md";
import { FiFilter } from "react-icons/fi";
import { blogData } from "@/data/blogs";
import { BlogCart } from "@/components/BlogCart";
import { PaginationCustom } from "@/components/PaginationCustom";

const topCategories = [
  {
    name: "Tecnología",
    image:
      "https://images.pexels.com/photos/28168248/pexels-photo-28168248/free-photo-of-canon-austin-ciberpunk-modelo-asiatico.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    articles: 25,
  },
  {
    name: "Música",
    image:
      "https://images.pexels.com/photos/16756716/pexels-photo-16756716/free-photo-of-blanco-y-negro-gafas-de-sol-musica-joven.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    articles: 15,
  },
  {
    name: "Videojuegos",
    image:
      "https://images.pexels.com/photos/1365795/pexels-photo-1365795.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    articles: 10,
  },
  {
    name: "Realidad virtual",
    image:
      "https://images.pexels.com/photos/4009620/pexels-photo-4009620.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    articles: 5,
  },
];

function Blog() {
  return (
    <>
      <Meta title="Blog" />
      <div className="flex flex-col gap-8">
        <section className="bg-white h-16">
          <div className="container mx-auto w-full  flex items-center p-4">
            <BreadcrumbCustom
              items={[
                {
                  label: "Inicio",
                  href: "/",
                },
                { label: "Blog", href: "/blog" },
              ]}
            />
          </div>
        </section>
        {/* Top categories */}
        <section className="container mx-auto">
          <h2 className="text-2xl font-bold mb-4">Categorías populares</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 items-center gap-2">
            {topCategories.map((category) => (
              <Card key={category.name}>
                <CardHeader className="hidden" />

                <CardContent className="flex flex-col justify-center gap-2 mt-8">
                  <div className="flex gap-4 items-center">
                    <div className="overflow-hidden relative rounded-full w-16 h-16">
                      <img
                        className="object-cover h-full w-full"
                        src={category.image}
                        alt={category.name}
                      />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold">{category.name}</h4>

                      <div className="flex items-center gap-2">
                        <MdOutlineArticle />
                        <span className="text-sm text-gray-500">
                          {category.articles} artículos
                        </span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Articles */}
        <section className="container mx-auto">
          <div className="flex flex-col sm:flex-row gap-3 justify-between sm:items-center mb-4">
            <div className="flex items-center gap-2">
              <h2 className="text-2xl font-bold">Artículos recientes</h2>
              <span className="text-sm bg-white rounded-full px-2 py-1">
                854
              </span>
            </div>
            <div className="flex items-center justify-between sm:justify-start gap-2">
              <div className="w-full sm:w-auto">
                <Select>
                  <SelectTrigger className="w-full sm:w-40">
                    <SelectValue placeholder="Ordenar por" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="recent">Más recientes</SelectItem>
                    <SelectItem value="oldest">Más antiguos</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="h-10 w-10 bg-white rounded-full flex items-center justify-center">
                <FiFilter />
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {blogData.map((item) => (
              <BlogCart key={item.id} item={item} />
            ))}
          </div>
        </section>

        <div className="bg-white w-full flex justify-center px-0 p-4 rounded-lg gap-2 mb-8">
          <PaginationCustom
            className="justify-center w-[290px] sm:w-auto"
            currentPage={1}
            totalPages={10}
            onPageChange={() => {}}
          />
        </div>
      </div>
    </>
  );
}

export default Blog;
