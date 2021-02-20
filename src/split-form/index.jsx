import React from 'react'

import Form from './Form'


//debugger
// making textinput component
// const TextInput = props=>(
//     <div className='form-group'>
//         <label htmlFor={props.name}>{props.label}</label>
//         <input  
//         className='form-control'
//         type={props.type} 
//         name={props.name} 
//         id={props.name}
//         placeholder={props.placeholder}
//         value={props.value}
//         onChange={props.onChange} 

//         />
//     </div>
// )
// TextInput.propTypes={
//     name:  PropTypes.string.isRequired,
//     label: PropTypes.string.isRequired,
//     type:  PropTypes.string.isRequired,
//     placeholder:PropTypes.string.isRequired,
//     value:   PropTypes.string.isRequired,
//     onChange: PropTypes.func.isRequired
// };

// TextInput.defaultProps={
//     type:'text',
//     label:'',
//     placeholder:''
// }

// const Form = props=>(
//     <form onSubmit={props.submitHandler}>
//     <TextInput 
//        name="name"
//        label="enter name"
//        placeholder="a name "
//        value={props.values.name}
//        onChange={props.handleChanger}

//     />
//     <br/>
//        <TextInput
//        name="email"
//        type="email"
//        label="enter email"
//        placeholder="a email"
//        value={props.values.email}
//        onChange={props.handleChanger}
       
       
//        />
//         <br/>
//         <TextInput
//        name="password"
//        type="password"
//        label="enter pass"
//        placeholder="a password"
//        value={props.values.password}
//        onChange={props.handleChanger}
       
       
//        />
//         <br/>
//         <button>submit</button>
// </form>
// )
// Form.propTypes ={
//     values:PropTypes.object.isRequired,
//     handleChanger:PropTypes.func.isRequired,
//     submitHandler:PropTypes.func.isRequired
// }
class SplitForm extends React.Component{
     
    state ={
        name:'',
        email:'',
        password:''
    };

    handleChanger = event =>{
        this.setState({
            [event.target.name] : event.target.value
        });
  
    }
    submitHandler = event =>{
        event.preventDefault();
       /*  console.dir(event.target.name); */
            console.log(this.state)
               event.target.reset()
               this.setState({name:"", email:"" , password:""})
      
    };
    debugger

    render(){
        const {name, email, password} =this.state
        return(
            <div className='container'>
                <h2 style={{textAlign:'center'}}>Form Split </h2>
               
                <Form
                values={this.state}
                handleChanger={this.handleChanger}
                submitHandler={this.submitHandler}
                />
                   
            
            </div>
            
        )
    }
}

export default SplitForm