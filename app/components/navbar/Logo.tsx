"use client";

import { useRouter } from "next/navigation";

const Logo = () => {
  const router = useRouter();
  return (
    <div onClick={() => router.push("/")} className="text-2xl cursor-pointer">
      Next Exercise
    </div>
  );
};

export default Logo;
