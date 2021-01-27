import React, {useState} from 'react'

import Login from './Login';

import Register from './Register';

const Account = (props) => {
const [form, setForm] = useState(false);
const toggleForm = ()=>{
  setForm(!form)
}
    return (
        <>
            {form ?(
                <Register functionName = {toggleForm} closeModal = {props.closeModal}/>
            ):(<Login functionName = {toggleForm}/>)}
        </>
    )
}

export default Account
