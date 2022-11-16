export enum RoutesConstent {
    category = '/category/',
    product = '/product/',
    query = ':id'
}

export default {
    category: RoutesConstent.category + RoutesConstent.query,
    product: RoutesConstent.product + RoutesConstent.query
}
