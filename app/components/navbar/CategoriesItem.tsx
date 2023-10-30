"use client";

import { useRouter } from "next/navigation";
import { IconType } from "react-icons";

type CategoriesItemProps = {
  name: string;
  icon: IconType;
  selected: boolean;
};

const CategoriesItem: React.FC<CategoriesItemProps> = ({
  name,
  icon: Icon,
  selected,
}) => {
  const router = useRouter();
  return (
    <div
      onClick={() => router.push(`/category=${name}`)}
      className={`flex items-center gap-1 cursor-pointer`}
    >
      <Icon size={20} />
      <div className="tracking-wider">{name}</div>
    </div>
  );
};

export default CategoriesItem;
