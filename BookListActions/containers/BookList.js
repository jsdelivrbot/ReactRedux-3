import React ,{Component} from 'react';
import { createStore } from 'redux'
import {selectBook} from '../actions/index'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

class BookList extends Component{ 
    renderList(){        
        return this.props.books.map((book)=>{           
            return <li onClick={()=>this.props.selectBook(book)}
            key={book.title} 
            className='list-group-item'>{book.title}</li>
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
/*these below functions are helper functions*/
function mapStateToProps(state){
    return{
        books:state.books
    }
}

function matchDispatchToProps(dispatch){
    //whenver selectbook funciton calls the result should be passed to all our reducrs
    return bindActionCreators({selectBook:selectBook},dispatch)
}
export default connect(mapStateToProps,matchDispatchToProps)(BookList);
