"use client";

import { useEffect, useState } from "react";
import { ListCategory } from "./components/home/ListCategory";
import { getCategory } from "./components/home/components/getCategory";
import { CategoryProps } from "./components/home/components/type.category";

export default function Home() {
  const [listCategories, setCategories] = useState<CategoryProps[] | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getCategory();
        setCategories(data.data);
      } catch (err) {
        console.error("Lỗi khi gọi API:", err);
      }
    };
    fetchData();
  }, []);
  return (
    <div>
      {!listCategories ? <div className="grid grid-cols-6 gap-2">
        {[...Array(18)].map((_, idx) => (
          <div key={idx} className="h-28 bg-gray-200 animate-pulse rounded-3xl"></div>
        ))}
      </div> :
        <ListCategory listCategories={listCategories} />}
    </div>
  );
}
