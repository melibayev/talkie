import { Fragment } from "react"
import { BiShow, BiHide } from "react-icons/bi";
import styles from './Register.module.scss'

import GIF from '../../assets/login/bg.gif'
import LOGO from '../../assets/login/logo.png'
import { useState } from "react";
import { NavLink } from "react-router-dom";

const Register = () => {
const [ passwordShow, setPasswordShow ] = useState(false)

  return (
    <section id={styles.register}>
            <div className="container">
                <div className={styles.form}>
                <div className={styles['form-gif']}>
                        <img src={GIF} alt="" />
                    </div>
                    <div className={styles['form-info']}>
                        <img src={LOGO} alt="logo" />                        
                        <h1>Welcome to Talkie!</h1>
                        <form>
                            <input type="text" placeholder="Enter your name" required />
                            <input type="text" placeholder="Enter your username" required />
                            <div className={styles['password']}>
                                <input type={passwordShow ? 'text' : 'password'} placeholder="Set your password" required />
                                <div onClick={() => setPasswordShow(!passwordShow)}>
                                    { passwordShow ? <BiHide /> : <BiShow /> } 
                                </div>
                            </div>                            
                            <button>Sign up</button>
                        </form>
                        <div className={styles['form-info-credits']}>
                            © Talkie 2024
                        </div>
                    </div>
                </div>
            </div>
        </section>
  )
}

export default Register