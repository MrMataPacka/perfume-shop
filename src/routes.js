import { AboutUsPage, 
    HomePage, } from "./containers";

export const routes = [
    {
        path: '/',
        element: <HomePage />
    },
    {
        path: '/about',
        element: <AboutUsPage />
    }
]