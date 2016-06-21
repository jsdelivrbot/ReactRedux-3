import React ,{Component} from 'react';
import { createStore } from 'redux'
import todoApp from '../reducers'
import { connect } from 'react-redux'
let store = createStore(todoApp)

class BookDetails extends Component{
    render(){
                if(!this.props.book){
                 return <div>Select book to get started</div>;
                 }
               return(
                <div>
                <h3>Book Details..</h3>
                <div><span>Book Titile: </span>{this.props.book.title}</div>
                <div><span>No.of pages: </span>{this.props.book.pages}</div>
                </div>
                )
    }
}
function mapStateToProps(state){
    return{
        book:state.activeBook
    }
}
export default connect(mapStateToProps)(BookDetails);

