import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Hom from "../Pages/Hom";
//import About from "../Pages/About";
import PostJob from "../Pages/PostJob";
import MyJobs from "../Pages/MyJobs";


const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {path: "/", element: <Hom /> },
            {path: "/post-job", element: <PostJob /> },
            {path: "/my-job", element: <MyJobs /> },
            {path: "/my-job", element: <MyJobs /> },
        ]
    },
]);

export default router;