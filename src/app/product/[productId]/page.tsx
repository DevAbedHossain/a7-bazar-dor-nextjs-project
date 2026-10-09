import { allProducts } from "@/lib/allAPI";
import { translateUnit } from "@/lib/TranslateUnit";
import { IAllProducts } from "@/types/allTypes";
import Link from "next/link";


const SingleProductPage = async ({ params }: { params: Promise<{ productId: string }> }) => {

    const { productId } = await params;

    const products = await allProducts();

    const toBanglaNumber = (price: number | string) => {
        return Number(price).toLocaleString("bn-BD");
    };

    const product = products.find((product: IAllProducts) => product.slug === productId);

    const totalMinPrice = product?.markets.reduce((acc: number, current: number) => acc + current.min, 0) / product?.markets.length;
    const totalMaxPrice = product?.markets.reduce((acc: number, current: number) => acc + current.max, 0) / product?.markets.length;
    const ave = ((totalMaxPrice + totalMinPrice) / 2).toFixed(2);
    const bngAve = toBanglaNumber(ave);



    return (
        <div className="py-7">

            <p className="pt-2 pb-5 text-sm flex gap-3"><Link className="hover:underline" href="/">হোম</Link> ❯ <Link className="hover:underline" href={`/category/${product?.category}`}>{product?.categoryNameBn}</Link> ❯ <span>{product?.nameBn}</span></p>

            <div className="flex justify-between items-center bg-white p-7 border rounded-2xl border-gray-200">
                <div className="flex gap-3 items-center">
                    <span className="text-6xl p-5 rounded-2xl bg-[#f0f5f0]">{product?.image}</span>
                    <div className="space-y-1 ">
                        <h2 className="text-3xl text-[#1D271F] font-bold">{product?.nameBn}</h2>
                        <p className="text-[#1d271fa1] text-sm">প্রতি {translateUnit(`${product?.unit}`)} · {product?.categoryNameBn}</p>
                        <p className="text-[#1d271fa1] text-sm">গতকালের তুলনায় আজ দাম
                            {product?.change.dir === "up" && <span><span className="font-semibold"> বেড়েছে</span> · {toBanglaNumber(`${(Number(product?.today ?? 0)) - (Number(product?.yesterday ?? 0))}`)} টাকা</span>}
                            {product?.change.dir === "down" && <span> <span className="font-semibold"> কমেছে</span> · {toBanglaNumber(`${(Number(product?.yesterday ?? 0)) - (Number(product?.today ?? 0))}`)} টাকা</span>}
                            {product?.change.dir === "flat" && ` অপরিবর্তিত`}
                        </p>
                    </div>
                </div>

                <div className="p-5 rounded-2xl bg-[#f0f5f0] flex flex-col items-center justify-center">
                    <p>আজকের দাম</p>
                    <h2 className="text-[#1D271F] text-3xl font-bold">{toBanglaNumber(`${product?.today}`)}</h2>
                    <p>টাকা / {product?.unit}</p>
                    <div className="flex gap-2 items-center">
                        <span className={`${product?.change.dir === "up" && "text-red-500" || product?.change.dir === "down" && "text-green-500"}`}>{product?.change.dir === "up" && "▲" || product?.change.dir === "down" && "▼" || product?.change.dir === "flat" && "━"}</span>
                        <span>{toBanglaNumber(`${product?.change.pct}`)}%</span>
                    </div>
                </div>
            </div>

            <div className="bg-white p-7 border rounded-2xl border-gray-200 my-7">
                <h2 className="text[#1D271F] text-xl font-semibold">দামের সারসংক্ষেপ</h2>

                <div className="grid grid-cols-3 gap-5 items-center my-7">
                    <div className="border border-gray-200 p-5 rounded-2xl space-y-1.5">
                        <p className="text-sm">সর্বনিম্ন দাম</p>
                        <p className="text-[#1A9951]"><span className="text-2xl font-bold">{toBanglaNumber(`${product?.markets.length ? Math.min(...product.markets.map((market: IAllProducts["markets"]) => market.min)) : 0}`)}</span> টাকা</p>
                        <p className="text-sm">সবচেয়ে কম দামের বাজার</p>
                    </div>
                    <div className="border border-gray-200 p-5 rounded-2xl space-y-1.5">
                        <p className="text-sm">সর্বাধিক দাম</p>
                        <p className="text-red-500"><span className="text-2xl font-bold">{toBanglaNumber(`${product?.markets.length ? Math.max(...product.markets.map((market: IAllProducts["markets"]) => market.max)) : 0}`)}</span> টাকা</p>
                        <p className="text-sm">সবচেয়ে বেশি দামের বাজার</p>
                    </div>
                    <div className="border border-gray-200 p-5 rounded-2xl space-y-1.5">
                        <p className="text-sm">গড় দাম</p>
                        <p className="text-[#1A9951]"><span className="text-2xl font-bold">{bngAve}</span> টাকা</p>
                        <p className="text-sm">প্রতি {translateUnit(`${product?.unit}`)}-এর হিসাবে</p>
                    </div>
                </div>

                <h2 className="text[#1D271F] text-xl font-semibold">বাজারভিত্তিক আজকের দাম</h2>

                <div>
                    <div className="overflow-x-auto py-5">
                        <table className="table table-zebra border border-gray-200 rounded-2xl text-[16px]">
                            {/* head */}
                            <thead>
                                <tr >
                                    <th>বাজার</th>
                                    <th>বিভাগ</th>
                                    <th className="text-right">সর্বনিম্ন</th>
                                    <th className="text-right">সর্বাধিক</th>
                                    <th className="text-right">গড়</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* row 1 */}
                                {
                                    product?.markets.map((item: IAllProducts["markets"], ind: number) => <tr key={ind}>
                                        <td>{item.market}</td>
                                        <td>{item.division}</td>
                                        <td className="text-right">{toBanglaNumber(`${item.min}`)} টাকা</td>
                                        <td className="text-right">{toBanglaNumber(`${item.max}`)} টাকা</td>
                                        <td className="font-semibold text-right">{toBanglaNumber(`${(item.min + item.max) / 2}`)} টাকা</td>
                                    </tr>)
                                }

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleProductPage;