import Home from "../views/Home/Home";
import AuthUser from "../views/authUser/authUser";
import GeneralWords from "../views/GeneralWords/GeneralWords";
import WordsA1 from "../views/words/words";
import WordsTest from "../views/wordsTest/wordsTest";

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
            element:AuthUser
        },{
            path:"/Words/:level",
            element:WordsA1
        },{
            path:"/test/:level",
            element: WordsTest
        },

    ]
};

export default utilsRoutes