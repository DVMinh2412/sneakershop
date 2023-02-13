

export const add_to_cart_from_home = (data) => {
    return {
        type: 'add_to_cart_from_home',
        payload: data
    }
}

export const add_to_wishlist = (data) => {
    return {
        type: 'add_to_wishlist',
        payload: data
    }
}

export const remove_from_cart = (data) => {
    return {
        type: 'remove_from_cart',
        payload: data
    }
}

export const increase_quantity = (data) => {
    return {
        type: 'increase_quantity',
        payload: data
    }
}

export const decrease_quantity = (data) => {
    return {
        type: 'decrease_quantity',
        payload: data
    }
}

export const change_categories = (data) => {
    return {
        type: 'change_categories',
        payload: data
    }
}

export const change_sortby = (data) => {
    return {
        type: 'change_sortby',
        payload: data
    }
}

export const change_price = (data) => {
    return {
        type: 'change_price',
        payload: data
    }
}

export const search_product = (data) => {
    return {
        type: 'search_product',
        payload: data
    }
}
