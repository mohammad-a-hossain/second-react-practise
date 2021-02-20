import React from 'react'
import PropTypes from 'prop-types'
import TextInput from './TextInput'


const Form = props=>(
    <form onSubmit={props.submitHandler}>
    <TextInput 
       name="name"
       label="enter name"
       placeholder="a name "
       value={props.values.name}
       onChange={props.handleChanger}

    />
    <br/>
       <TextInput
       name="email"
       type="email"
       label="enter email"
       placeholder="a email"
       value={props.values.email}
       onChange={props.handleChanger}
       
       
       />
        <br/>
        <TextInput
       name="password"
       type="password"
       label="enter pass"
       placeholder="a password"
       value={props.values.password}
       onChange={props.handleChanger}
       
       
       />
        <br/>
        <button>submit</button>
</form>
)
Form.propTypes ={
    values:PropTypes.object.isRequired,
    handleChanger:PropTypes.func.isRequired,
    submitHandler:PropTypes.func.isRequired
}

export default  Form 