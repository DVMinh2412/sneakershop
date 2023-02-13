import Home from "../Page/Home/Home"
import Products from "../Page/Products/Products"
import Cart from "../Page/Cart/Cart"

const publicRoutes = [
    {
        path: '/',
        element: Home
    },
    {
        path: '/products/:id',
        element: Products
    },
    {
        path: '/cart',
        element: Cart
    }
]

const privateRoutes = []

export { publicRoutes, privateRoutes }