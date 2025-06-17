import {z} from 'zod';

const API_URL: string = import.meta.env.VITE_API_URL
const TENANT_ID: string = import.meta.env.VITE_TENANT_ID

export const productSchema = z.object({
    id : z.coerce.number().int(),
    name : z.string().min(1, "Required"),
    slug : z.string().min(1, "Required")
        .regex(
          /^[a-zA-Z0-9-_]+$/,
          "Slug must use only latin letter , number , 1 or _"
        ),
    description : z.string().optional(),
    image : z.string().url("Must be valid url").optional(),
    price : z.coerce.number().nonnegative("Must be a positive integer"),
    sort : z.coerce.number().int().min(0, "Must be a positive integer"),
    is_active : z.boolean(),
    is_favorite : z.boolean(),
    category_id : z.coerce.number().int().min(1, "Category is required"),
})

export type Product = z.infer<typeof productSchema>;


// export type Product = {
//     name: string,
//     slug: string,
//     description?: string,
//     img?: string,
//     price: number,
//     is_active: boolean,
//     is_favorite: boolean,
//     sort : number,
//     id: number,
//     category_id?: number;
// }

export async function getProducts():Promise<Product[]> {
    const response = await fetch(`${API_URL}tenants/${TENANT_ID}/products/`)
    if (!response.ok) throw new Error("Failed to fetch tenants");
    const data = await response.json();
    console.log(data);
    return data;
}


export async function getProduct(id: number): Promise<Product[]> {
    const res = await fetch(`${API_URL}tenants/${TENANT_ID}/products/${id}`)
    if (!res.ok) throw new Error("Failed to fetch product");
    return await res.json();
}



export async function updateProduct(
    id: number, data:{
     name: string,
     slug: string,
     description?: string,
     img?: string,
     price: number,
     is_active: boolean,
     is_favorite: boolean,
     sort : number,
    }): Promise<Product> {
        const res = await fetch(`${API_URL}tenants/${TENANT_ID}/products/${id}`, {
            method: "PUT",
            body: JSON.stringify(data),
        })
    if (!res.ok) throw new Error("Failed to update tenant");
    return await res.json();
}



export async function deleteProduct(id:number) :Promise<void> {
    const res = await fetch(`${API_URL}tenants/${TENANT_ID}/products/${id}`, {
        method: 'DELETE',
    })
    if (!res.ok) throw new Error("Failed to delete product");
}