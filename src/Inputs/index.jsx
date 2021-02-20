import React from 'react'


class Inputs extends React.Component{

    state ={
        name:'',
        country:'',
        bio:'',
        birthDate: '',
        gender:'',
        agree:false

    };


    eventHandler =(event)=>{
       /*  console.log(event.target.name) */
       this.setState({
           [event.target.name] : event.target.value
       })
    }

    eventCheckboxHandler =event=>{
        this.setState({
            agree: event.target.checked
        });
    }
    render(){
         const {name, country, bio, birthDate, agree} = this.state
        return(
            <div className='container'>
                <h1>working with input element => data show in console.log() </h1>

                <input onChange={this.eventHandler} className='form-control' type="text" name="name" value={name} placeholder="name"/>
                <select value={country} onChange={this.eventHandler} className='form-control' name="country">
                    <option value="bangladesh">Bangladesh</option>
                    <option value="india">india</option>
                    <option value="pakistan">Pakistan</option>
                </select>
                <textarea onChange={this.eventHandler}  className='form-control' name="bio" value={bio} cols="30" rows="10"></textarea>
                <input onChange={this.eventHandler}  className='form-control' type="date" value={birthDate} name="birthDate" />
                Gender
                <br/>
                <input  onChange={this.eventHandler}  type="radio" name="gender" value="male"/><span>male </span>
                <input  onChange={this.eventHandler}  type="radio" name="gender" value="female"/><span>female </span>
                <input  onChange={this.eventHandler}  type="radio" name="gender" value="other"/><span>other </span>
                <br/>
                <div>
                    <input onChange={this.eventCheckboxHandler} type="checkbox" name="agree" checked={agree} /><span> </span>
                    I Agree 
                </div>
                <br/>
                <button onClick={()=> console.log(this.state)}> Submit </button>

            </div>
        )
    };
} 

export default Inputs