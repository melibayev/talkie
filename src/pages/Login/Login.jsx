import { Fragment, useState } from "react"
import { NavLink } from "react-router-dom";
import { BiShow, BiHide } from "react-icons/bi";
import styles from './Login.module.scss'
import loginValidation from "../../validation/loginValidation";
import { request } from '../../server/request'

import GIF from '../../assets/login/bg.gif'
import LOGO from '../../assets/login/logo.png'
import { useForm } from "react-hook-form";
import { Button } from "antd";
import { toast } from "react-toastify";


const Login = () => {
const {
    register, 
    handleSubmit,
} = useForm()
const [ passwordShow, setPasswordShow ] = useState(false)
const [loading, setLoading] = useState([]);
const [ haveError, setHaveError ] = useState(false)
const [ error, setError ] = useState('')
const submit = async (data) => {
    try {
      await loginValidation.validate(data);
      setHaveError(false);
      enterLoading(0)
      try {
        enterLoading(0)
        let res = await request.post('Auth/login', data);
        console.log(res);
      } catch (error) {
        stopLoading(0)
        setHaveError(true);
        setError('Your account is not found. Check your username and password');
      }
    } catch (validationError) {
      stopLoading(0)
      setHaveError(true);
      setError(validationError.message);
    }
  };
const enterLoading = (index) => {
    setLoading((prevLoadings) => {
      const newLoadings = [...prevLoadings];
      newLoadings[index] = true;
      return newLoadings;
    });
}
const stopLoading = (index) => {
    setLoading((prevLoadings) => {
      const newLoadings = [...prevLoadings];
      newLoadings[index] = false;
      return newLoadings;
    });
}
  return (
    <Fragment>
        <section id={styles.login}>
            <div className="container">
                <div className={styles.form}>
                    <div className={styles['form-info']}>
                        <img src={LOGO} alt="logo" />                        
                        <h1>Nice to see you again</h1>
                        <form onSubmit={handleSubmit(submit)}>
                            <input type="text" placeholder="Username" {...register('username', { required: true })} />
                            <div className={styles['password']}>
                                <input type={passwordShow ? 'text' : 'password'} placeholder="Password" {...register('password', { required: true })}/>
                                <div onClick={() => setPasswordShow(!passwordShow)}>
                                    { passwordShow ? <BiHide /> : <BiShow /> } 
                                </div>
                            </div>                            
                            <div className={styles['form-info-extra']}>
                                <div className={styles['form-info-extra-remember-me']}>
                                    <div>Remember Me</div>
                                    <div className={styles['checkbox-wrapper']}>
                                        <input className={styles['substituted']} type="checkbox" aria-hidden="true" />
                                    </div>
                                </div>
                                <div>Forgot Password</div>
                            </div>
                            <Button htmlType="submit" loading={loading[0]} className={styles['form-info-button']}>
                                Sign in
                            </Button>
                        </form>
                        <div className={styles['form-info-sign-up-message']}>
                            <p>Don't have an account?</p>
                            <NavLink to={'/register'}>Sign up now</NavLink>
                        </div>
                        <div className={styles['form-info-error-message']}>{haveError ? error : ''}</div>
                        <div className={styles['form-info-credits']}>
                            © Talkie 2024
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
