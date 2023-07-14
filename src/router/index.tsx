import { createBrowserRouter } from "react-router-dom";
import HomePage from "./home";
import App from "../App";

export const router = createBrowserRouter([
    ...HomePage,
    {
        path: '/',
        element: <App />
    }
])