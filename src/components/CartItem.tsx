import { Product } from "@/types/data/product";
import { FaRegHeart, FaStar } from "react-icons/fa";
import { Card, CardContent, CardHeader } from "./ui/card";
import { LiaRandomSolid } from "react-icons/lia";
import { IoEyeOutline } from "react-icons/io5";
import { AiOutlineShopping } from "react-icons/ai";
import { ViewMode } from "@/enums/ViewMode";

export const CartItem = ({
  item,
  viewMode,
}: {
  item: Product;
  viewMode?: ViewMode;
}) => {
  return (
    <Card className=" group border-opacity-30 border-gray-200 hover:bg-gray-50 transition-all duration-300 relative ">
      <CardHeader>
        <div
          className={`flex  items-start ${
            item.offer !== 0 && item.oldPrice
              ? "gap-2 justify-between"
              : "justify-end"
          }`}
        >
          {item.offer !== 0 && item.oldPrice && (
            <span className="text-sm bg-orange-300 text-white px-2 py-1 rounded-md">
              {item.offer}% OFF
            </span>
          )}

          <div className="flex flex-col items-center z-30 gap-3 absolute right-5 top-6">
            <FaRegHeart size={20} />
            <div className="group-hover:opacity-100 opacity-0 transition-all duration-300  space-y-4 ">
              <LiaRandomSolid size={24} />
              <IoEyeOutline size={24} />
              <AiOutlineShopping size={24} />
            </div>
          </div>
        </div>
      </CardHeader>
      <CardContent
        className={`${
          viewMode === ViewMode.LIST ? "flex  gap-5 sm:gap-10" : "flex-col"
        } pt-4`}
      >
        <div
          className={`${
            viewMode === ViewMode.LIST ? "w-[150px] sm:w-[200px]" : ""
          } relative overflow-hidden h-[200px]`}
        >
          <img
            className="w-full h-full object-contain"
            src={item.image}
            alt={item.title}
          />
        </div>
        <div className="space-y-3">
          <span className="text-sm text-orange-300">{item.brand}</span>
          <h2 className="text-base sm:text-lg font-semibold">{item.title}</h2>

          {/* Stars */}
          <div className="flex items-center gap-1">
            <FaStar size={15} />
            <FaStar size={15} />
            <FaStar size={15} />
            <FaStar size={15} />
            <FaStar size={15} />
          </div>
          {viewMode === ViewMode.LIST && (
            <div>
              <p className="text-sm sm:text-base text-gray-500">
                {item.description}
              </p>
            </div>
          )}
          <div className="flex gap-2 items-center">
            <span className={`${item.oldPrice ? "text-lg text-rose-500" : ""}`}>
              S/. {item.price}
            </span>
            {item.oldPrice && (
              <span className="text-sm text-gray-500 line-through">
                S/. {item.oldPrice}
              </span>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
