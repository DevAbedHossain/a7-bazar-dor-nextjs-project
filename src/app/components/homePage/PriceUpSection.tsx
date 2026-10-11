import { allProducts } from "@/lib/allAPI";
import { IAllProducts } from "@/types/allTypes";
import ProductCard from "../shared/ProductCard";


const PriceUpSection = async () => {

    const products = await allProducts();
    const priceUpProducts = products.filter((product: IAllProducts) => product.change.dir === "up")
    console.log(priceUpProducts, "products price up")

    return (
        <div className="py-10 px-5 sm:px-0">
            <h2 className="text-xl text-[#1D271F] font-bold"><span className="text-red-500 pr-2">▲</span>আজ দাম বেড়েছে</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 py-5 ">
                {
                    priceUpProducts.slice(0, 6).map((product: IAllProducts) => <ProductCard key={product.id} product={product} />)
                }
            </div>
        </div>
    );
};

export default PriceUpSection;