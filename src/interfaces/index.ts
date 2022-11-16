import { ActionConstent } from "constants/store"

export interface ActionType {
    type: ActionConstent
    payload?: any
}

export type removeUndefine<T> = Exclude<T, undefined>;

export interface Default {
    id: number
    createdAt: string
    updatedAt: string
}

export interface Category extends Default {
    name: string
}

export interface Product extends Default {
    name: string
    description: string
    price: number
    image: string
    categoryId: number
}

export interface InitialStateType {
    categories: Category[]
    products: Product[]
    product: Product | null
}