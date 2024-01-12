import { Fragment } from "react"
import { BiShow, BiHide } from "react-icons/bi";
import styles from './Login.module.scss'

import GIF from '../../assets/login/bg.gif'
import LOGO from '../../assets/login/logo.png'
import { useState } from "react";


const Login = () => {
const [ passwordShow, setPasswordShow ] = useState(false)
  return (
    <Fragment>
        <section id={styles.login}>
            <div className="container">
                <div className={styles.form}>
                    <div className={styles['form-info']}>
                        <img src={LOGO} alt="logo" />                        
                        <h1>Nice to see you again</h1>
                        <form>
                            <input type="text" placeholder="Username" required />
                            <div className={styles['password']}>
                                <input type={passwordShow ? 'text' : 'password'} placeholder="Password" required />
                                <div onClick={() => setPasswordShow(!passwordShow)}>
                                    { passwordShow ? <BiHide /> : <BiShow /> } 
                                </div>
                            </div>                            
                            <div className={styles['form-info-extra']}>
                                <div className={styles['form-info-extra-remember-me']}>
                                    <div>Remember Me</div>
                                    <div class={styles['checkbox-wrapper']}>
                                        <input class={styles['substituted']} type="checkbox" aria-hidden="true" />
                                    </div>
                                </div>
                                <div>Forgot Password</div>
                            </div>
                            <button>Sign in</button>
                        </form>
                        <div className={styles['form-info-sign-up-message']}>
                            <p>Don't have an account?</p>
                            <span>Sign up now</span>
                        </div>
                    </div>
                    <div className={styles['form-gif']}>
                        <img src={GIF} alt="" />
                    </div>
                </div>
            </div>
        </section>
    </Fragment>
  )
}

export default Login
