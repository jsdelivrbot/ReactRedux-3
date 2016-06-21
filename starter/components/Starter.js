import React, { Component} from 'react'
import { createStore } from 'redux'
import counter from '.././reducers'

const store = createStore(counter)
class Starter extends Component {
  
  constructor(){
            super();
            this.state={
               txt:'This is the Default text'
            }
        }              
        update(e){          
            this.setState({txt :e.target.value})
        }
        getAdd(e){
           store.dispatch({ type: 'Add' })
        }
        getEdit(e){
           store.dispatch({ type: 'Edit' })
        }
        getClear(e){
           store.dispatch({ type: 'Clear' })
        }
        
         render() {           
         return (
              <div>          
              <input type='text' onChange={this.update.bind(this)} />
              <h1>{this.state.txt}</h1>
              <br />
              <button onClick={this.getAdd}>Add</button>
              <button onClick={this.getEdit}>Edit</button>
              <button onClick={this.getClear}>Clear</button> 
              <br />
              <div ><h4>{store.getState()}</h4></div>
              </div>
               )
        }  
        }
export default Starter
