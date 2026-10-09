
function ProductCardSkeleton() {
    return (
        <div className="rounded-2xl border border-gray-200 bg-white p-4">
            <div className="mb-5 flex items-center gap-3">
                <div className="skeleton h-12 w-12 shrink-0 rounded-xl bg-gray-200" />
                <div className="flex-1 space-y-2">
                    <div className="skeleton h-4 w-3/4 bg-gray-200" />
                    <div className="skeleton h-3 w-1/2 bg-gray-100" />
                </div>
            </div>

            <div className="skeleton mb-2 h-3 w-20 bg-gray-100" />

            <div className="flex items-center justify-between gap-3">
                <div className="skeleton h-5 w-24 bg-gray-200" />
                <div className="skeleton h-9 w-20 rounded-full bg-gray-100" />
            </div>
        </div>
    );
}

export default function CategoryLoading() {
    return (
        <main className="min-h-screen animate-pulse bg-[#f0f5f0]">
            {/* Navbar */}
            <header className="border-b border-gray-100 bg-white">
                <div className="mx-auto flex h-16 max-w-[1400px] items-center justify-between px-4">
                    <div className="flex items-center gap-3">
                        <div className="skeleton h-10 w-10 rounded-lg bg-gray-200" />
                        <div className="space-y-2">
                            <div className="skeleton h-5 w-28 bg-gray-200" />
                            <div className="skeleton h-3 w-32 bg-gray-100" />
                        </div>
                    </div>

                    <div className="flex items-center gap-3">
                        <div className="skeleton hidden h-4 w-16 bg-gray-200 sm:block" />
                        <div className="skeleton h-9 w-24 rounded-lg bg-gray-200" />
                    </div>
                </div>
            </header>

            {/* Category navigation */}
            <nav className="border-b border-gray-100 bg-white">
                <div className="mx-auto flex h-12 max-w-[1400px] items-center justify-center gap-8 overflow-hidden px-4">
                    {Array.from({ length: 7 }).map((_, i) => (
                        <div
                            key={i}
                            className="skeleton h-4 w-16 shrink-0 bg-gray-200"
                        />
                    ))}
                </div>
            </nav>

            {/* Price ticker */}
            <div className="overflow-hidden border-b border-gray-200 bg-white">
                <div className="mx-auto flex h-9 max-w-[1400px] items-center gap-5 overflow-hidden px-4">
                    {Array.from({ length: 8 }).map((_, i) => (
                        <div
                            key={i}
                            className="skeleton h-3 w-40 shrink-0 bg-gray-200"
                        />
                    ))}
                </div>
            </div>

            <div className="mx-auto max-w-[1400px] px-4 py-6">
                {/* Category heading */}
                <section className="mb-6 flex min-h-[104px] items-center gap-4 rounded-2xl border border-gray-200 bg-white p-6">
                    <div className="skeleton h-12 w-12 shrink-0 rounded-xl bg-gray-200" />
                    <div className="space-y-3">
                        <div className="skeleton h-6 w-24 bg-gray-200" />
                        <div className="skeleton h-4 w-64 max-w-full bg-gray-100" />
                    </div>
                </section>

                {/* Sorting panel */}
                <section className="mb-7 flex min-h-[88px] items-center justify-end gap-3 rounded-2xl border border-gray-200 bg-white p-6">
                    <div className="skeleton h-4 w-14 bg-gray-200" />
                    <div className="skeleton h-10 w-64 max-w-[65%] rounded-lg bg-gray-100" />
                </section>

                {/* Product count */}
                <div className="skeleton mb-5 h-4 w-52 bg-gray-200" />

                {/* Product cards */}
                <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {Array.from({ length: 8 }).map((_, i) => (
                        <ProductCardSkeleton key={i} />
                    ))}
                </section>
            </div>

            {/* Footer */}
            <footer className="mt-5 border-t border-gray-200 bg-white">
                <div className="mx-auto flex max-w-[1400px] flex-col justify-between gap-3 px-4 py-6 sm:flex-row">
                    <div className="skeleton h-3 w-64 bg-gray-200" />
                    <div className="skeleton h-3 w-80 max-w-full bg-gray-100" />
                </div>
            </footer>
        </main>
    );
}