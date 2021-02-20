import React from 'react'
import Uncontrolled from '../Forms/uncontrolledForm' 

/* import Inputs from './index' */
import './input.css'

class App extends React.Component{
    render(){
        return(
            <div>
              <h2 style={{textAlign: 'center'}}>React Form practice</h2> 
             
                 <Uncontrolled/> 
              {/*   <Inputs /> */}
            </div>
        )
    }
}

export default App