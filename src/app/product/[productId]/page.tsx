import { allProducts } from "@/lib/allAPI";
import { IAllProducts } from "@/types/allTypes";


const SingleProductPage = async ({ params }: { params: Promise<{ productId: string }> }) => {

    const { productId } = await params;

    console.log(productId)

    const products = await allProducts();

    const product = products.find((product: IAllProducts) => product.slug === productId);

    console.log(product)

    return (
        <div className="py-7">
            <div className="flex justify-between items-center bg-white p-7 border rounded-2xl border-gray-200">
                <div className="flex gap-3 items-center">
                    <span className="text-6xl p-5 rounded-2xl bg-[#f0f5f0]">{product?.image}</span>
                    <div className="space-y-1 ">
                        <h2 className="text-3xl text-[#1D271F] font-bold">{product?.nameBn}</h2>
                        <p className="text-[#1d271fa1] text-sm">প্রতি {product?.unit} · {product?.categoryNameBn}</p>
                        <p className="text-[#1d271fa1] text-sm">গতকালের তুলনায় আজ দাম
                            {product?.change.dir === "up" && <span><span className="font-semibold"> বেড়েছে</span> · {(Number(product?.today ?? 0)) - (Number(product?.yesterday ?? 0))} টাকা</span>}
                            {product?.change.dir === "down" && <span> <span className="font-semibold"> কমেছে</span> · {(Number(product?.yesterday ?? 0)) - (Number(product?.today ?? 0))} টাকা</span>}
                            {product?.change.dir === "flat" && ` অপরিবর্তিত`}
                        </p>
                    </div>
                </div>

                <div className="p-5 rounded-2xl bg-[#f0f5f0] flex flex-col items-center justify-center">
                    <p>আজকের দাম</p>
                    <h2 className="text-[#1D271F] text-3xl font-bold">{product?.today}</h2>
                    <p>টাকা / {product?.unit}</p>
                    <div className="flex gap-2 items-center">
                        <span className={`${product?.change.dir === "up" && "text-red-500" || product?.change.dir === "down" && "text-green-500"}`}>{product?.change.dir === "up" && "▲" || product?.change.dir === "down" && "▼" || product?.change.dir === "flat" && "━"}</span>
                        <span>{product?.change.pct}%</span>
                    </div>
                </div>
            </div>

            <div className="bg-white p-7 border rounded-2xl border-gray-200 my-7">
                <h2 className="text[#1D271F] text-xl font-semibold">দামের সারসংক্ষেপ</h2>
                <h2 className="text[#1D271F] text-xl font-semibold">বাজারভিত্তিক আজকের দাম</h2>
                <div>
                    <div className="overflow-x-auto">
                        <table className="table table-zebra">
                            {/* head */}
                            <thead>
                                <tr>
                                    <th>বাজার</th>
                                    <th>বিভাগ</th>
                                    <th>সর্বনিম্ন</th>
                                    <th>সর্বাধিক</th>
                                    <th>গড়</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* row 1 */}
                                {
                                    product?.markets.map((item: IAllProducts["markets"], ind: number) => <tr key={ind}>
                                        <th>{item.market}</th>
                                        <td>{item.division}</td>
                                        <td>{item.min} টাকা</td>
                                        <td>{item.max} টাকা</td>
                                        <td className="font-semibold">{(item.min + item.max) / 2} টাকা</td>
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