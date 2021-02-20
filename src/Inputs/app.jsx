import React from 'react'

//debugger
/* import Uncontrolled from '../Forms/uncontrolledForm'  */
import SplitForm from '../split-form/index'
/* 
 import Inputs from './index'    */
import './input.css'

class App extends React.Component{
    render(){
        return(
            <div>
              <h2 style={{textAlign: 'center'}}>React Form practice</h2> 
              <div>
                  {/*   <Inputs /> */}
                 </div>
                 <hr/>
                 {/* <Uncontrolled/>  */}
                <hr/>
              
              <SplitForm />
            </div>
        )
    }
}

export default App