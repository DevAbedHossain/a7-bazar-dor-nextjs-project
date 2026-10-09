
import { allCategories } from "@/lib/allAPI";
import { ICategoriesNav } from "@/types/allTypes";
import Link from "next/link";

const Navitems = async () => {
    const categories = await allCategories();

    return (
        <nav className="border-t border-gray-100 bg-white">
            <div
                className="
          container mx-auto
          flex items-center justify-start
          gap-1 overflow-x-auto
          px-3 py-2
          sm:justify-center sm:gap-2
          lg:gap-3
          [scrollbar-width:none]
          [&::-webkit-scrollbar]:hidden
        "
            >
                {categories.map((cat: ICategoriesNav) => (
                    <Link
                        key={cat.id}
                        href={`/category/${cat.id}`}
                        className="
              flex shrink-0 items-center justify-center gap-2
              rounded-lg px-3 py-2
              text-sm text-[#1D271F]
              transition-colors duration-200
              hover:bg-gray-100 hover:text-[#05893e]
              sm:px-4
              lg:px-5
            "
                    >
                        <span>{cat.icon}</span>
                        <span className="whitespace-nowrap">{cat.nameBn}</span>
                    </Link>
                ))}
            </div>
        </nav>
    );
};

export default Navitems;