import { Blog } from "@/types/data/blog";
import { Button } from "./ui/button";

export const BlogCart = ({ item }: { item: Blog }) => {
  return (
    <div className="rounded-lg shadow-lg bg-white group">
      <div className="aspect-w-16 aspect-h-9 relative overflow-hidden h-[250px]">
        <img
          src={item.image}
          alt={item.title}
          className="object-cover rounded-t-lg group-hover:scale-105 transition-all duration-500"
        />
      </div>
      <div className="space-y-3 p-4">
        <span className="text-sm text-gray-500">{item.date}</span>
        <h3 className="text-lg font-semibold text-gray-600">{item.title}</h3>
        <p className="text-sm text-gray-500">{item.description}</p>
        <Button className="rounded-md text-base">Leer más</Button>
      </div>
    </div>
  );
};
