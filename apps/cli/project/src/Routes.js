import UserPage from "./components/Pages/User/User"
import HomePage from "./components/Pages/Home"
import UserStart from "./components/Pages/User/UserStart"
import UserEdit from "./components/Pages/User/UserEdit"
import UserDetail from "./components/Pages/User/UserDetail"
export const routes = [
    {path: "/", component: HomePage},
    {path: "/user", component: UserPage, children: [
        {path: "", component: UserStart},
        {path: ":id", component: UserDetail},
        {path: ":id/edit", component: UserEdit, name: "userEdit"},
    ]},
        {path: "*", redirect: "/user"}
]