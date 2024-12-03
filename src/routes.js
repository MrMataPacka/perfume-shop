import { AboutUsPage, 
    HomePage, ShoppingCartPage, AloneProductPage} from "./containers";

export const routes = [
    {
        path: '/',
        element: <HomePage />
    },
    {
        path: '/shopping-cart',
        element: <ShoppingCartPage />
    },
    {
        path: '/about',
        element: <AboutUsPage />
    },
    {
        path: '/product',
        element: <AloneProductPage />
    }
]