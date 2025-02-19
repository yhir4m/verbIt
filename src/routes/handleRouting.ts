import Home from "../views/Home/Home";
import GeneralWords from "../views/GeneralWords/GeneralWords";
import WordsA1 from "../views/words-a1/words-a1";
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
        },{
            path:"/WordsA1",
            element:WordsA1
        },

    ]
};

export default utilsRoutes