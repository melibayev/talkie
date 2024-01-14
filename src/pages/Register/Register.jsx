import { BiShow, BiHide } from "react-icons/bi";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styles from './Register.module.scss'

import GIF from '../../assets/login/bg.gif'
import LOGO from '../../assets/login/logo.png'
import { useState } from "react";
import { useForm } from "react-hook-form";
import registerValidation from "../../validation/registerValidation";
import { request } from "../../server/request";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";

const Register = () => {
const {
    register, 
    handleSubmit,
} = useForm()
const [ passwordShow, setPasswordShow ] = useState(false)
const [loading, setLoading] = useState([]);
const [ haveError, setHaveError ] = useState(false)
const [ error, setError ] = useState('')
const navigate = useNavigate()
const submit = async (data) => {
    try {
      await registerValidation.validate(data);
      setHaveError(false);
      enterLoading(0)
  
      try {
        enterLoading(0)
        let res = await request.post('Auth/register', data);
        toast.success('Successfully authorized', {
            position: toast.POSITION.BOTTOM_RIGHT,
            autoClose: 3000, 
        });
        res.status === 200 && setTimeout(() => {
            navigate('/login');
        }, 3400);
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
    <section id={styles.register}>
            <div className="container">
                <div className={styles.form}>
                <div className={styles['form-gif']}>
                        <img src={GIF} alt="" />
                    </div>
                    <div className={styles['form-info']}>
                        <img src={LOGO} alt="logo" />                        
                        <h1>Welcome to Talkie!</h1>
                        <form onSubmit={handleSubmit(submit)}>
                            <input type="email" placeholder="Enter your email" {...register('email', { required: true })} />
                            <input type="text" placeholder="Enter your username" {...register('username', { required: true })} />
                            <div className={styles['password']}>
                                <input type={passwordShow ? 'text' : 'password'} placeholder="Set your password" {...register('password', { required: true })} />
                                <div onClick={() => setPasswordShow(!passwordShow)}>
                                    { passwordShow ? <BiHide /> : <BiShow /> } 
                                </div>
                            </div>                            
                            <Button htmlType="submit" loading={loading[0]} className={styles['form-info-button']}>
                                Sign up
                            </Button>
                        </form>
                        <div className={styles['form-info-error-message']}>{haveError ? error : ''}</div>
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
