import { Link } from 'react-router-dom';
import style from './pages_css/signup.module.css';

function LoginSignup(){
    return(
        <div className={style.wrap}>
            <div className={style.loginwrap}>
                <h2 className={style.title}>Sign Up</h2>
                <div className={style.inputwrap}>
                    <input type="text" name='fname' className={style.input} placeholder='Enter your first name'/>
                    <input type="text" name='lname' className={style.input} placeholder='Enter your last name'/>
                    <input type="password" name='passwords' className={style.input} placeholder='Enter your passwords'/>
                    <input type="email" name='email' className={style.input} placeholder='Enter your email'/>
                    <input type="submit" className={style.submit} value="Continue to Sign Up"/>
                </div>
                <p className={style.tologin}>
                    Already have an account?<Link to="/login">Login here</Link>
                </p>
                <div className={style.checkbox}>
                    <input type="checkbox" className={style.check}/>
                    <p>By continuing, I agree to the terms of use & privacy policy.</p>
                </div>
            </div>
        </div>
    )
}

export default LoginSignup