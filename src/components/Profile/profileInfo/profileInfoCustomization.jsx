import React, {useState, setState} from 'react'
import sass from './profileInfo.module.sass'
import {Textarea, Input} from '../../common/fields/fields'
import {Field, reduxForm} from 'redux-form'
import s from "../../Login/loginPage.module.sass";
import {required} from "../../common/fields/validators";

const InfoForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div className={sass.infoBlock}>
                <div>
                    <b>Full name: </b>
                    <Field className={s.input} component={Input}
                           name={'fullName'} placeholder={'fullName'}/>
                </div>
                <div>
                    <b>About me: </b>
                    <Field className={s.input} component={Input}
                           name={'aboutMe'} placeholder={'Describe yourself'}/>
                </div>
                <div>
                    <b>In search: </b>
                    <Field className={s.radio} component={Input} name={'lookingForAJob'} type={'checkbox'}/>
                </div>
                <div>
                    <b>My skills: </b>
                    <Field className={s.input} component={Input}
                                             name={'lookingForAJobDescription'} placeholder={'Dedicate your skills'}/>
                </div>
            </div>
            <div>
                <div className={sass.contactsHeader}>
                    <b>Contacts: </b>
                </div>
                <div className={sass.contacts}>
                    {Object.keys(props.profile.contacts).map (key =>{
                        return <Contacts key={key} neededKey={key} value={props.profile.contacts[key]} />
                    })}
                </div>
            </div>
            <div className={sass.infoBTN}>
                <button>save</button>
            </div>
        </form>
    )
}

const Contacts = ({neededKey, value}) => {
    return <div>
        <b>{neededKey}: </b>
        <Field className={s.input} component={Input}
               name={'contacts.' + neededKey} placeholder={neededKey}/>
    </div>
}

const InfoFormRedux = reduxForm ({form: 'profileInfo'}) (InfoForm)

export default InfoFormRedux