import { AboutUsPage, 
    HomePage, ShoppingCartPage} from "./containers";

export const routes = [
    {
        path: '/',
        element: <HomePage />
    },
    {
        path: '/shopping-cart',
        element: <ShoppingCartPage />
    }
]