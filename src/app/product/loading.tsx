
function MarketRowSkeleton() {
    return (
        <tr>
            {Array.from({ length: 5 }).map((_, index) => (
                <td key={index} className="p-4">
                    <div
                        className={`skeleton h-4 rounded bg-gray-200 ${index === 0 ? "w-32" : index === 1 ? "w-20" : "ml-auto w-16"
                            }`}
                    />
                </td>
            ))}
        </tr>
    );
}

function PriceSummarySkeleton() {
    return (
        <div className="rounded-xl border border-gray-200 bg-white p-4">
            <div className="skeleton mb-3 h-3 w-20 bg-gray-200" />
            <div className="skeleton mb-2 h-6 w-24 bg-gray-200" />
            <div className="skeleton h-3 w-36 max-w-full bg-gray-100" />
        </div>
    );
}

export default function ProductLoading() {
    return (
        <main className="min-h-screen animate-pulse bg-[#f0f5f0]">

            <div className="mx-auto max-w-[1400px] px-4 py-6">
                {/* Breadcrumb */}
                <div className="mb-5 flex items-center gap-3">
                    <div className="skeleton h-3 w-10 bg-gray-200" />
                    <div className="skeleton h-3 w-3 bg-gray-100" />
                    <div className="skeleton h-3 w-12 bg-gray-200" />
                    <div className="skeleton h-3 w-3 bg-gray-100" />
                    <div className="skeleton h-3 w-28 bg-gray-200" />
                </div>

                {/* Product header */}
                <section className="mb-5 flex min-h-36 items-center justify-between gap-5 rounded-2xl border border-gray-200 bg-white p-5 sm:p-6">
                    <div className="flex min-w-0 items-center gap-4">
                        <div className="skeleton h-16 w-16 shrink-0 rounded-xl bg-gray-200 sm:h-[72px] sm:w-[72px]" />

                        <div className="min-w-0 space-y-3">
                            <div className="skeleton h-7 w-48 max-w-full bg-gray-200" />
                            <div className="skeleton h-4 w-28 bg-gray-100" />
                            <div className="skeleton h-3 w-56 max-w-full bg-gray-100" />
                        </div>
                    </div>

                    <div className="hidden w-28 shrink-0 rounded-xl bg-[#f0f5f0] p-4 sm:block">
                        <div className="skeleton mx-auto mb-3 h-3 w-20 bg-gray-200" />
                        <div className="skeleton mx-auto mb-2 h-7 w-14 bg-gray-200" />
                        <div className="skeleton mx-auto h-3 w-16 bg-gray-100" />
                    </div>
                </section>

                {/* Price summary */}
                <section className="rounded-2xl border border-gray-200 bg-white p-5 sm:p-6">
                    <div className="skeleton mb-5 h-6 w-40 bg-gray-200" />

                    <div className="mb-6 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
                        {Array.from({ length: 3 }).map((_, index) => (
                            <PriceSummarySkeleton key={index} />
                        ))}
                    </div>

                    {/* Market table heading */}
                    <div className="skeleton mb-5 h-6 w-56 bg-gray-200" />

                    {/* Responsive table */}
                    <div className="overflow-x-auto rounded-xl border border-gray-200">
                        <table className="table w-full">
                            <thead>
                                <tr>
                                    {["বাজার", "বিভাগ", "সর্বনিম্ন", "সর্বাধিক", "গড়"].map(
                                        (heading) => (
                                            <th key={heading}>
                                                <div className="skeleton h-3 w-16 bg-gray-200" />
                                            </th>
                                        )
                                    )}
                                </tr>
                            </thead>

                            <tbody>
                                {Array.from({ length: 12 }).map((_, index) => (
                                    <MarketRowSkeleton key={index} />
                                ))}
                            </tbody>
                        </table>
                    </div>
                </section>
            </div>

            {/* Footer */}
            <footer className="mt-4 border-t border-gray-200 bg-white">
                <div className="mx-auto flex max-w-[1400px] flex-col justify-between gap-3 px-4 py-6 sm:flex-row">
                    <div className="skeleton h-3 w-64 bg-gray-200" />
                    <div className="skeleton h-3 w-80 max-w-full bg-gray-100" />
                </div>
            </footer>
        </main>
    );
}