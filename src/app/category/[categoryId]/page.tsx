import ProductCard from "@/app/components/shared/ProductCard";
import { allProducts, singleCategory } from "@/lib/allAPI";
import { IAllProducts, ICategoriesNav } from "@/types/allTypes";




const SingleCategoryPage = async ({ params }: { params: Promise<{ categoryId: string }> }) => {
    const { categoryId } = await params;

    const category: ICategoriesNav = await singleCategory({ slug: categoryId });

    const productByCategory = await allProducts();

    const products = productByCategory.filter((product: IAllProducts) => product.category === categoryId)

    return (
        <div className="py-7">
            <div className="bg-white p-7 rounded-2xl border border-gray-200 flex gap-2 items-center">
                <span className="text-4xl">{category.icon}</span>
                <div className="space-y-1">
                    <h2 className="text-[#1D271F] font-bold text-2xl">{category.nameBn}</h2>
                    <p className="text-sm text-[#1d271fa2]">{products.length}টি পণ্যের আজকের দাম ও পরিবর্তন</p>
                </div>
            </div>

            <div className="bg-white p-7 mt-7 rounded-2xl border border-gray-200 flex gap-2 justify-end focus:outline-0 focus:border-0 items-center">
                <select defaultValue="Pick a color" className="select">
                    <option disabled={true}>Pick a color</option>
                    <option>Crimson</option>
                    <option>Amber</option>
                    <option>Velvet</option>
                </select>
            </div>

            <h2 className="text-[16px] pt-8 text-[#1d271fa1]">মোট {products.length}টি পণ্য দেখানো হচ্ছে</h2>

            <div className="grid grid-cols-4 gap-4 py-5">
                {
                    products.map((product: IAllProducts) => <ProductCard key={product.id} product={product} />)
                }
            </div>
        </div>
    );
};

export default SingleCategoryPage;