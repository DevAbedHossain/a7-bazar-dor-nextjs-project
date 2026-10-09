import { allProducts } from '@/lib/allAPI';
import { translateUnit } from '@/lib/TranslateUnit';
import { IAllProducts } from '@/types/allTypes';
import Link from 'next/link';
import Marquee from 'react-fast-marquee';


const MarqueeProducts = async () => {

    const products = await allProducts();

    const toBanglaNumber = (price: number | string) => {
        return Number(price).toLocaleString("bn-BD");
    }


    return (
        <div className="py-2.5 border-y border-gray-200">
            <Marquee className="flex gap-5" speed={150} pauseOnHover={true}>
                {
                    products.map((product: IAllProducts) =>
                        <Link key={product.id} href={`/product/${product.slug}`}>
                            <div className="flex gap-1.5 hover:underline text-sm px-2">
                                <span>{product.image}</span>
                                <span className="font-medium">{product.nameBn}</span>
                                <span>{toBanglaNumber(`${product.today}`)}  টাকা/{translateUnit(`${product.unit}`)}</span>
                                <span className={`${product.change.dir === "up" ? "text-red-500" : "text-green-500"}`}>{`${product.change.dir === "up" ? "⮝" : "⮟"}`}</span>
                                <span className={`${product.change.dir === "up" ? "text-red-500" : "text-green-500"}`}>{toBanglaNumber(`${product.change.pct}`)}%</span>
                            </div>
                        </Link>
                    )
                }
            </Marquee>
        </div>
    );
};

export default MarqueeProducts;