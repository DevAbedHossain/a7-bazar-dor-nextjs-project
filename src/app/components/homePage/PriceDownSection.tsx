import { allProducts } from "@/lib/allAPI";
import { IAllProducts } from "@/types/allTypes";
import ProductCard from "../shared/ProductCard";


const PriceDownSection = async () => {

    const products = await allProducts();
    const priceDownProducts = products.filter((product: IAllProducts) => product.change.dir === "down")

    return (
        <div className="pb-10 px-5 sm:px-0">
            <h2 className="text-xl text-[#1D271F] font-bold"><span className="text-[#05893e]] pr-2">▼</span>আজ দাম কমেছে</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 py-5">
                {
                    priceDownProducts.slice(0, 8).map((product: IAllProducts) => <ProductCard key={product.id} product={product} />)
                }
            </div>
        </div>
    );
};

export default PriceDownSection;