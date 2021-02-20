import React from 'react'




class Uncontrolled extends React.Component{
     
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

    render(){
        const {name, email, password} =this.state
        return(
            <div className='container'>
                <h2 style={{textAlign:'center'}}>Basic Form</h2>
               
                
                    <form onSubmit={this.submitHandler}>
                        <input  className='form-control'
                                type="text" 
                                name="name" 
                                placeholder='name'
                                value={name}
                                onChange={this.handleChanger} />
                        <br/>
                            <input   
                                className='form-control'
                                type="email"
                                name="email"
                                placeholder='email'
                                value={email}
                                onChange={this.handleChanger} />
                            <br/>
                            <input    
                                className='form-control'
                                type="password" 
                                name="password" 
                                value={password}
                                placeholder='password' 
                                onChange={this.handleChanger} />
                            <br/>
                            <button>submit</button>
                    </form>
            
            </div>
            
        )
    }
}

export default Uncontrolled