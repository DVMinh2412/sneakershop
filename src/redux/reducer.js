import axios, { all } from "axios";

export const getData = async (item_name) => {
    if(item_name !== "All") {
        try {
            const res = await axios.get(`http://localhost:8080/${item_name}`);
            return (res.data)
        } catch (error) {
            console.log("error")
        }
    }
};


var allItems = []

const sortArray = (data, option = "increase") => {
    if(option === "increase") {
        for(let i = 0; i < data.length; i++){
            for(let j = i + 1; j < data.length; j++){
                if(parseInt(data[i].price) > parseInt(data[j].price)) {
                    let temp = data[i]
                    data[i] = data[j]
                    data[j] = temp
                }
            }
        }
        return data
    }else {
        for(let i = 0; i < data.length; i++){
            for(let j = i + 1; j < data.length; j++){
                if(parseInt(data[i].price) < parseInt(data[j].price)) {
                    let temp = data[i]
                    data[i] = data[j]
                    data[j] = temp
                }
            }
        }
        return data
    }
}

const list_categories = ['converse', 'vans', 'champion', 'converseAccessory', 'vanAccessory', 'fungus']
for(let i = 0; i < 6; i++){
    getData(list_categories[i]).then((res) => {
        allItems = allItems.concat(res)
    }).then(() => initState.show = allItems)
    
}

const initState = {
    search: [

    ],
    filter: {
        categories: "All",
        sortBy: "Default",
        priceRange: "All"
    },
    show: [
        ...allItems
    ],
    cart: [

    ],
    wishList: [

    ],
    totalPrice: 0
}

const rootReducer = (state = initState, action) => {
    switch(action.type) {
        case 'add_to_cart_from_home':
            let checkDuplicate = false
            state.cart.map(value => {
                if(value.code === action.payload.code) checkDuplicate = true
            })
            if(checkDuplicate) {
                const addCart = state.cart.map((value) => {
                    if(value.code === action.payload.code) {
                        value = {
                            ...value,
                            quantity: value.quantity + 1
                        }
                    }
                    return value
                })
                return {
                    ...state,
                    cart: [
                        ...addCart
                    ]
                };
            } else {
                return {
                    ...state,
                    cart: [
                        ...state.cart,
                        action.payload
                    ]
                };
            }
        
        case 'increase_quantity':
            const increaseCart = state.cart.map(value => {
                if(value.code === action.payload.code){
                    value = {
                        ...value,
                        quantity: value.quantity + 1
                    }
                }
                return value
            })
            return {
                ...state,
                cart: [
                    ...increaseCart
                ]
            }

            case 'decrease_quantity':
                const decreaseCart = state.cart.map(value => {
                    if(value.code === action.payload.code){
                        value = {
                            ...value,
                            quantity: value.quantity - 1
                        }
                    }
                    return value
                })
                return {
                    ...state,
                    cart: [
                        ...decreaseCart
                    ]
                }

        case 'remove_from_cart':
            const removeCart = state.cart.filter ((value) => {
                return value.code !== action.payload.code
            })
            return {
                ...state,
                cart: [
                    ...removeCart,
                ]
            };

        case 'add_to_wishlist':
            return {
                ...state,
                wishList: [
                    ...state.wishList,
                    action.payload
                ]
            };
        
        case 'change_categories':
            if(action.payload.key === "All" && state.filter.sortBy !== "Sale"){
                return {
                    ...state,
                    filter: {
                        ...state.filter,
                        categories: "All"
                    },
                    show: [
                        ...allItems
                    ]
                }
            }else if (action.payload.key === "All" && state.filter.sortBy === "Sale") {
                return {
                    ...state,
                    filter: {
                        ...state.filter,
                        categories: action.payload.key
                    },
                    show: [
                        ...allItems.filter((value) => value.sale === "true")
                    ]
                }
            }
            if(state.filter.sortBy === "Sale") {
                return {
                    ...state,
                    filter: {
                        ...state.filter,
                        categories: action.payload.key
                    },
                    show: [
                        ...action.payload.data.filter((value) => value.sale === "true")
                    ]
                }
            }
            if(state.filter.priceRange === "Low to High" || state.filter.priceRange === "High to Low")
            {
                const filterArray = state.filter.priceRange === "Low to High"? (sortArray(action.payload.data, "increase")): (sortArray(action.payload.data, "decrease"))
                return {
                    ...state,
                    show: [
                        ...filterArray
                    ],
                    filter: {
                        ...state.filter,
                        categories: action.payload.key
                    }
                }
            }
            if(state.filter.priceRange !== "All" && state.filter.priceRange !== "800000+"){
                return {
                    ...state,
                    filter: {
                        ...state.filter,
                        categories: action.payload.key
                    },
                    show: [
                        ...action.payload.data.filter((value) => parseInt(value.price) <= parseInt(state.filter.priceRange))
                    ]
                }
            } else if(state.filter.priceRange === "800000+") {
                return {
                    ...state,
                    show: [
                        ...action.payload.data.filter((value) => parseInt(value.price) <= 800000)
                    ],
                    filter: {
                        ...state.filter,
                        categories: action.payload.key
                    }
                }
            }
            return {
                ...state,
                filter: {
                    ...state.filter,
                    categories: action.payload.key
                },
                show: [
                    ...action.payload.data
                ]
            }
        case "change_sortby":
            if(action.payload.key === "Sale" && state.filter.categories !== "All"){
                const result = (action.payload.data.filter((value) => value.sale === "true"))
                return {
                    ...state,
                    show: [
                        ...result
                    ],
                    filter: {
                        ...state.filter,
                        sortBy: action.payload.key
                    }
                }
            }else if(action.payload.key === "Sale" && state.filter.categories === "All") {
                const result = (allItems.filter((value) => value.sale === "true"))
                return {
                    ...state,
                    show: [
                        ...result
                    ],
                    filter: {
                        ...state.filter,
                        sortBy: action.payload.key
                    }
                }
            }
            if(action.payload.key === "Default" && state.filter.categories === "All") {
                return {
                    ...state,
                    show: [
                        ...allItems
                    ],
                    filter: {
                        ...state.filter,
                        sortBy: action.payload.key
                    }
                }
            }
            if(action.payload.key === "Default"){
                return {
                    ...state,
                    show: [
                        ...action.payload.data
                    ],
                    filter: {
                        ...state.filter,
                        sortBy: action.payload.key
                    }
                }
            }
            if(action.payload.key === "Low to High") {
                (sortArray(action.payload.data, "increase"))
            }else if(action.payload.key === "High to Low") {
                (sortArray(action.payload.data, "decrease"))
            }
            return {
                ...state,
                show: [
                    ...action.payload.data
                ],
                filter: {
                    ...state.filter,
                    priceRange: action.payload.key
                }
            }
        case "change_price":
            if(action.payload.key !== "All" && action.payload.key !== "800000+"){
                return {
                    ...state,
                    show: [
                        ...action.payload.data.filter((value) => parseInt(value.price) <= parseInt(action.payload.key))
                    ],
                    filter: {
                        ...state.filter,
                        priceRange: action.payload.key
                    }
                }
            } else if(action.payload.key === "800000+") {
                return {
                    ...state,
                    show: [
                        ...action.payload.data.filter((value) => parseInt(value.price) <= 800000)
                    ],
                    filter: {
                        ...state.filter,
                        priceRange: action.payload.key
                    }
                }
            }
            return {
                ...state,
                show: [
                    ...action.payload.data
                ],
                filter: {
                    ...state.filter,
                    priceRange: action.payload.key
                }
            }
        case "search_product": 
            return {
                ...state,
                search: [
                    ...action.payload.data.filter((value) => value.name.includes(action.payload.valueInput))
                ]
            }
        default:
            return state
    }
}

export default rootReducer