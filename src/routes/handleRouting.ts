import Home from "../views/Home/Home";
import GeneralWords from "../views/GeneralWords/GeneralWords";
const utilsRoutes = {
    urls: [
        {
            path:"/",
            element:Home
        },{
            path:"/general",
            element:GeneralWords
        },{
            path:"/login",
            element:GeneralWords
        },

    ]
};

export default utilsRoutes