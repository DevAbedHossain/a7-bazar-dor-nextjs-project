import { allCategories } from '@/lib/allAPI';
import { ICategoriesNav } from '@/types/allTypes';
import Link from 'next/link';


const Navitems = async () => {

    const categories = await allCategories();

    return (
        <div className="border-t border-gray-100 ">
            <div className="container mx-auto flex justify-center py-2">
                {
                    categories.map((cat: ICategoriesNav) => <Link className="flex gap-2 justify-center items-center rounded text-[#1D271F] hover:bg-gray-200 py-1.5 px-5" key={cat.id} href={`/category/${cat.id}`}>{cat.icon} {cat.nameBn}</Link>)
                }
            </div>
        </div>
    );
};

export default Navitems;