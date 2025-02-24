import { Link } from "react-router-dom";
import "./login.css";
import { useTranslation } from 'react-i18next';
import { useState } from "react";
import authUtils from "../../utils/authUtils";

function AuthUser(){
    const [logState, setLogState] = useState<boolean>(true);

    const {t} = useTranslation();

    return (
        <main className="login--main">
            <section className="login--header">
                <Link to="/" className="login--header--link">VerbIt</Link>
            </section>
            <section className="login--container">
            <form className="login--form" onSubmit={(e) => logState ? authUtils.handleSubmit(e) : authUtils.handleLogin(e)}>
                <span className="form--title">{logState ? t('traduction-register') : 'login'}</span>
                {logState && <span className="form--subtitle">{t('traduction-login-register-text')}</span>}
                
                <div className="inputs--container">
                    {logState && (
                        <div>
                            <input type="text" name="firstName" className="login--form--input" placeholder={t('traduction-login-first_name')} />
                            <input type="text" name="lastName" className="login--form--input" placeholder={t('traduction-login-last_name')} />
                        </div>
                    )}
                    <input type="email" name="email" className="login--form--input" placeholder="Email" />
                    <input type="password" name="password" className="login--form--input" placeholder={t('traduction-password')} />
                </div>

                <button>{logState ? t('traduction-register') : 'login'}</button>
            </form>

                <div className="form--footer">
                    <p>{t('traduction-change-login-text')} <b onClick={()=> setLogState(prev=>!prev)} >Log in</b> </p>
                </div>
            </section>
        </main>
    );
}


 

export default AuthUser;
