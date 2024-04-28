import { Link } from 'react-router-dom';
import style from './pages_css/signup.module.css';

function Login(){
    return(
        <div className={style.wrap}>
            <div className={style.loginwrap}>
                <h2 className={style.title}>Login</h2>
                <div className={style.inputwrap}>
                    <input type="email" name='email' className={style.input} placeholder='Enter your email'/>
                    <input type="password" name="passwords" className={style.input} placeholder='Enter your passwords'/>
                    <input type="submit" className={style.submit} value="Continue to Sign Up"/>
                </div>
                <p className={style.tologin}>
                    Haven't Account Yet?<Link to="/signup">Sign up</Link>
                </p>
            </div>
        </div>
    )
}

export default Login