"use client";


import { IAllProducts } from '@/types/allTypes';
import { useState } from 'react';
import ProductCard from '../shared/ProductCard';

const productItems = ({ products }: { products: IAllProducts[] }) => {

    const toBanglaNumber = (price: number | string) => {
        return Number(price).toLocaleString("bn-BD");
    }

    const [sortBy, setSortBy] = useState<"default" | "price.asc" | "price-dsc">("default");


    const handleSoryItems = (products: IAllProducts[]) => {
        const updateProducts = products;

        if (sortBy === "default") {
            updateProducts
        }

        if (sortBy === "price.asc") {
            updateProducts.sort((a, b) => Number(a.today) - Number(b.today));
        }

        if (sortBy === "price-dsc") {
            updateProducts.sort((a, b) => Number(b.today) - Number(a.today));
        }

        return updateProducts;

    };

    const newProducts = handleSoryItems(products);

    return (
        <div className="px-5 sm:px-0">
            <div className="bg-white  p-7 mt-7 rounded-2xl border border-gray-200 flex gap-2 justify-end focus:outline-0 focus:border-0 items-center">
                <h4>সাজান</h4>
                <select onChange={(e) => setSortBy(e.target.value as "default" | "price.asc" | "price-dsc")} className="select focus:outline-0">
                    <option value={"default"}>ডিফল্ট</option>
                    <option value={"price.asc"}>দাম: কম থেকে বেশি</option>
                    <option value={"price-dsc"}>দাম: বেশি থেকে কম</option>
                </select>
            </div>

            <h2 className="text-[16px] pt-8 text-[#1d271fa1]">মোট {toBanglaNumber(`${products.length}`)}টি পণ্য দেখানো হচ্ছে</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 py-5">
                {
                    newProducts.map((product: IAllProducts) => <ProductCard key={product.id} product={product} />)
                }
            </div>
        </div>
    );
};

export default productItems;