import { IAllProducts, ICategoriesNav } from "@/types/allTypes";

export const allCategories = async (): Promise<ICategoriesNav[]> => {
    const res = await fetch("https://api.abcz.workers.dev/api/bazardor/categories");
    if (!res.ok) {
        throw new Error("Failed to fetch categories");
    }
    return res.json();
}

export const allProducts = async (): Promise<IAllProducts[]> => {
    const res = await fetch("https://api.abcz.workers.dev/api/bazardor/products");
    if (!res.ok) {
        throw new Error("Failed to fetch All Products")
    }
    return res.json();
}

export const singleCategory = async ({ slug }: { slug: string }) => {
    const res = await fetch(`https://api.abcz.workers.dev/api/bazardor/categories/${slug}`);
    if (!res.ok) {
        throw new Error("Failed to fetch Category")
    };
    return res.json();
}