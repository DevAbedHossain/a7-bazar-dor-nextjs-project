import { allProducts } from "@/lib/allAPI";
import { IAllProducts } from "@/types/allTypes";
import ProductCard from "../shared/ProductCard";


const AllProducts = async () => {

    const products = await allProducts();

    return (
        <div id="allproduct" className="px-5 sm:px-0">
            <h2 className="text-xl text-[#1D271F] font-bold">সব পণ্য</h2>
            <p className="text-sm text-[#1D271F] py-3">মোট ৩৩টি পণ্য দেখানো হচ্ছে</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 py-5">
                {
                    products.map((product: IAllProducts) => <ProductCard key={product.id} product={product} />)
                }
            </div>
        </div>
    );
};

export default AllProducts;