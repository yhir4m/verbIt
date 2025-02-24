import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useUserContext } from "../../contexts/userContext";
import "./wordsTest.css";
import { useNavigate } from "react-router-dom";
import testUtils from "../../utils/testUtils";

function WordsTest(){
    type UrlParams = {
        level?:string;
    };
    const {level} = useParams<UrlParams>();
    const [testWords,setTestWords] = useState({})
    const ALL_LEVELS = import.meta.env.VITE_ALL_LEVELS
    const navigate = useNavigate();
    const {userCourse} = useUserContext();
    
    useEffect(()=>{
        console.log(level)
        if(!ALL_LEVELS.split(",").includes(level)){
            navigate('/');
        }else{
            setTestWords(testUtils.getTestWords(testUtils.createWordsUrl(level,userCourse)))
            console.log(testWords)
        }
    },[userCourse])
    
    return (
        <main className="words-test--container">
            <section className="words-test--card">
                <div className="words-test--card--image">
                    <img src="/1.png" alt="" />
                </div>
                <div className="words-test--card-text">
                    <span>ola</span>
                    <input type="text" />
                </div>
            </section>

        </main>
    );
}


 

export default WordsTest;
