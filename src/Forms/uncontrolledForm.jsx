import React from 'react'




class Uncontrolled extends React.Component{
    submitHandler = event =>{
        event.preventDefault();
       /*  console.dir(event.target.name); */
       const data={}
       data.name=event.target.name.value;
       data.email=event.target.email.value;
       data.password =event.target.password.value;
       console.log(data)
    };

    render(){
       
        return(
            <div className='container'>
                <h2 style={{textAlign:'center'}}>Basic Form</h2>
               
                
                    <form onSubmit={this.submitHandler}>
                        <input  className='form-control'
                                type="text" 
                                name="name" 
                                placeholder='name'/>
                        <br/>
                            <input   
                                className='form-control'
                                type="email"
                                name="email"
                                placeholder='email'/>
                            <br/>
                            <input    
                                className='form-control'
                                type="password" 
                                name="password" 
                                placeholder='password'/>
                            <br/>
                            <button>submit</button>
                    </form>
            
            </div>
            
        )
    }
}

export default Uncontrolled