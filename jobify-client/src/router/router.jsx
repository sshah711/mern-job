import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Hom from "../Pages/Hom";
//import About from "../Pages/About";
import PostJob from "../Pages/PostJob";


const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {path: "/", element: <Hom /> },
            {path: "/post-job", element: <PostJob /> },
        ]
    },
]);

export default router;