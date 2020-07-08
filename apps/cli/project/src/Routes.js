import UserPage from "./components/Pages/User"
import HomePage from "./components/Pages/Home"
export const routes = [
    {path: "/user/:id", component: UserPage},
    {path: "/", component: HomePage},
]