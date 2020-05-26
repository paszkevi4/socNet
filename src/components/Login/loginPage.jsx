import React from 'react'
import {Field, reduxForm} from 'redux-form'
import {Redirect} from 'react-router-dom'

import s from './loginPage.module.sass'
import {loggedInThunk} from './../../Redux/authReducer'
import { connect } from 'react-redux'
import {required} from '../common/fields/validators'
import { Input } from '../common/fields/fields'

import {getIsAuth,
        getUserId,
        getCaptcha,} from '../../Redux/selectors'

const LoginForm = (props) => {
    return (
        <div className={s.container}>
            <div className={s.loginTip}>
                <span><p>Feel free to use my login data in case you want to check out SocNet.</p><p>Also feel fre to add or change smth</p></span><br />
                <span><p>Login:</p><p>pashka6995@gmail.com</p></span><br />
                <span><p>Password:</p><p>qwe123rty</p></span>
            </div>
            <div className={s.formContainer}>
                <form className={s.loginForm} onSubmit={props.handleSubmit}>
                        <div className={s.grid1}>
                            <h3>Login</h3>
                        </div>
                        <div className={s.grid2}>
                            <div>
                                <Field className={s.input} component={Input} name={'email'}
                                       placeholder={'Enter email'} validate={[required]}/>
                            </div>
                            <div>
                                <Field className={s.input} component={Input} name={'password'}
                                       type='password' placeholder={'Password'} validate={[required]}/>
                            </div>

                            <div className='loginRadio'>
                                <Field className={s.radio} component={Input} name={'rememberMe'} type={'checkbox'}/>
                                <label htmlFor="checkbox">Remember me</label>
                            </div>
                            {props.captchaUrl
                                ? <div className={s.captcha}>
                                    <div><img src={props.captchaUrl} alt="waitForCaptcha"/></div>
                                    <Field className={s.input} component={Input} name={'captcha'}
                                           placeholder={'Enter symbols'} validate={[required]}/>
                                </div>
                                : null}
                            <div className={s.error}>
                                {props.error}
                            </div>
                        </div>
                        <div className={s.grid3}>
                            <button className={s.btn}>Login</button>
                        </div>
                </form>
            </div>
        </div>
    )
}

const Login = (props) => {
   const onSubmit = (formData) => {
       props.loggedInThunk(formData.email, formData.password, formData.rememberMe, formData.captcha)
    }

    if (props.isAuth) {
        return <Redirect to={'/profile/' + props.userId}/>
    }

    return (
        <div>
            <ReduxLoginForm onSubmit={onSubmit} captchaUrl={props.captchaUrl}/>
        </div>

    )
}

const ReduxLoginForm = reduxForm ({form: 'login'}) (LoginForm)

let mapStateToProps = (state) => {
    return {
        captchaUrl: getCaptcha(state),
        isAuth: getIsAuth(state),
        userId: getUserId(state),
    }
}

export default connect(mapStateToProps, {loggedInThunk} )(Login)