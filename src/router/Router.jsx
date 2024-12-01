import { createBrowserRouter } from "react-router-dom";
import Page404 from '../pages/Page404';
import Nav from "../components/Nav";
import Product from "../pages/Product"
import LoginContextProvider from "../context/LoginContext";
import Cart from "../pages/Cart";
import Orders from "../pages/Orders";

const router = createBrowserRouter([

    {
        path: '/', element:
            <LoginContextProvider><Nav />  </LoginContextProvider>
        , children: [
            { index: true, element: <Product /> },
            { path: "*", element: <Page404 /> },
            { path: "cart", element: <Cart /> },
            { path: "orders", element: <Orders /> }
        ]
    }
])

export default router