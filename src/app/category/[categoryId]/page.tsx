import ProductItems from "@/app/components/categoryPage/productItems";
import { allProducts, singleCategory } from "@/lib/allAPI";
import { IAllProducts, ICategoriesNav } from "@/types/allTypes";





const SingleCategoryPage = async ({ params }: { params: Promise<{ categoryId: string }> }) => {
    const { categoryId } = await params;

    const category: ICategoriesNav = await singleCategory({ slug: categoryId });

    const productByCategory = await allProducts();

    const products = productByCategory.filter((product: IAllProducts) => product.category === categoryId)

    const toBanglaNumber = (price: number | string) => {
        return Number(price).toLocaleString("bn-BD");
    }


    return (
        <div className="py-7">
            <div className="bg-white p-7 rounded-2xl border border-gray-200 flex gap-2 items-center">
                <span className="text-4xl">{category.icon}</span>
                <div className="space-y-1">
                    <h2 className="text-[#1D271F] font-bold text-2xl">{category.nameBn}</h2>
                    <p className="text-sm text-[#1d271fa2]">{toBanglaNumber(`${products.length}`)}টি পণ্যের আজকের দাম ও পরিবর্তন</p>
                </div>
            </div>

            <ProductItems products={products} />
        </div>
    );
};

export default SingleCategoryPage;