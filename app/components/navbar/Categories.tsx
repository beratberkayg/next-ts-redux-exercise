"use client";
import { FaUmbrellaBeach, FaHotel } from "react-icons/fa";

import CategoriesItem from "./CategoriesItem";
import { useSearchParams } from "next/navigation";

export const categories = [
  {
    name: "Tatil-Köyü",
    icon: FaUmbrellaBeach,
  },
  {
    name: "Kamp",
    icon: FaUmbrellaBeach,
  },
  {
    name: "Otel",
    icon: FaHotel,
  },
  {
    name: "Villa",
    icon: FaHotel,
  },
];

const Categories = () => {
  const params = useSearchParams();
  const urlitem = params?.get("category");

  return (
    <div className="flex items-center gap-7">
      {categories.map((cat, i) => (
        <CategoriesItem
          key={i}
          name={cat.name}
          icon={cat.icon}
          selected={urlitem == cat.name}
        />
      ))}
    </div>
  );
};

export default Categories;
