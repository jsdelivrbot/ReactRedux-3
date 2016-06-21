import React ,{Component} from 'react';
import { createStore } from 'redux'
import todoApp from '../reducers'

let store = createStore(todoApp)


class BookList extends Component{
    
    
    renderList(){
        
        return store.getState().books.map((book)=>{
            return <li key={book.title} className='list-group-item'>{book.title}</li>
        })
    }
    
    render(){
        return(
                <ul className='list-group col-sm-4'>
                {this.renderList()}
                </ul>
                )
    }
}
export default BookList

