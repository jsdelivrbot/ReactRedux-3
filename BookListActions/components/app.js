import React,{ Component} from 'react'
import BookList from '../containers/BookList';
import BookDetails from '../containers/BookDetails';

class books extends Component {
    render(){
        return(
              <div>
             <BookList />
             <BookDetails />
             </div>
                );
    }
  
 }
export default books
