
export default function Loading() {
    return (
        <main className="min-h-screen animate-pulse bg-[#f0f5f0]">
            {/* Navbar skeleton */}
            <header className="border-b border-gray-100 bg-white">
                <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
                    <div className="flex items-center gap-3">
                        <div className="h-8 w-8 rounded bg-gray-200" />
                        <div className="space-y-2">
                            <div className="h-4 w-24 rounded bg-gray-200" />
                            <div className="h-2 w-32 rounded bg-gray-100" />
                        </div>
                    </div>

                    <div className="flex items-center gap-3">
                        <div className="hidden h-3 w-12 rounded bg-gray-200 sm:block" />
                        <div className="h-8 w-20 rounded-lg bg-gray-200" />
                    </div>
                </div>
            </header>

            {/* Category navigation skeleton */}
            <nav className="border-b border-gray-100 bg-white">
                <div className="mx-auto flex h-10 max-w-6xl items-center justify-center gap-6 overflow-hidden px-4">
                    {Array.from({ length: 8 }).map((_, i) => (
                        <div
                            key={i}
                            className="h-3 w-14 shrink-0 rounded bg-gray-200"
                        />
                    ))}
                </div>
            </nav>

            {/* Price ticker skeleton */}
            <div className="overflow-hidden border-b border-gray-200 bg-white">
                <div className="mx-auto flex h-7 max-w-6xl items-center gap-5 overflow-hidden px-4">
                    {Array.from({ length: 7 }).map((_, i) => (
                        <div
                            key={i}
                            className="h-2.5 w-32 shrink-0 rounded bg-gray-200"
                        />
                    ))}
                </div>
            </div>

            <div className="mx-auto max-w-6xl px-4 py-6">
                {/* Hero section skeleton */}
                <section className="mb-6 flex min-h-40 items-center justify-between gap-6 rounded-xl border border-gray-200 bg-white p-6 sm:p-8">
                    <div className="flex-1 space-y-4">
                        <div className="h-5 w-36 rounded-full bg-gray-200" />
                        <div className="h-7 w-3/4 max-w-md rounded bg-gray-200" />
                        <div className="h-3 w-full max-w-lg rounded bg-gray-100" />
                        <div className="h-3 w-2/3 max-w-sm rounded bg-gray-100" />
                        <div className="h-9 w-28 rounded-lg bg-gray-200" />
                    </div>

                    <div className="hidden h-24 w-28 shrink-0 rounded-2xl bg-gray-100 sm:block md:h-28 md:w-32" />
                </section>

                {/* Price cards sections */}
                {[0, 1].map((section) => (
                    <section key={section} className="mb-8">
                        <div className="mb-4 h-5 w-36 rounded bg-gray-200" />

                        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
                            {Array.from({ length: 8 }).map((_, i) => (
                                <PriceCardSkeleton key={i} />
                            ))}
                        </div>
                    </section>
                ))}

                {/* All products section */}
                <section className="mb-8">
                    <div className="mb-2 h-5 w-20 rounded bg-gray-200" />
                    <div className="mb-5 h-3 w-40 rounded bg-gray-100" />

                    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
                        {Array.from({ length: 28 }).map((_, i) => (
                            <PriceCardSkeleton key={i} />
                        ))}
                    </div>
                </section>
            </div>

            {/* Footer skeleton */}
            <footer className="border-t border-gray-200 bg-white">
                <div className="mx-auto flex max-w-6xl flex-col justify-between gap-3 px-4 py-5 sm:flex-row">
                    <div className="h-3 w-52 rounded bg-gray-200" />
                    <div className="h-3 w-64 rounded bg-gray-100" />
                </div>
            </footer>
        </main>
    );
}

function PriceCardSkeleton() {
    return (
        <div className="rounded-xl border border-gray-200 bg-white p-3">
            <div className="mb-4 flex items-center gap-3">
                <div className="h-10 w-10 shrink-0 rounded-xl bg-gray-200" />

                <div className="flex-1 space-y-2">
                    <div className="h-3.5 w-3/4 rounded bg-gray-200" />
                    <div className="h-2.5 w-1/2 rounded bg-gray-100" />
                </div>
            </div>

            <div className="mb-2 h-2.5 w-20 rounded bg-gray-100" />

            <div className="flex items-center justify-between gap-3">
                <div className="h-4 w-16 rounded bg-gray-200" />
                <div className="h-6 w-14 rounded-full bg-gray-100" />
            </div>
        </div>
    );
}