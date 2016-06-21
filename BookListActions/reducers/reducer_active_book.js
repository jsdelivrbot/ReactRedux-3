//the state is not a applcation state object 
// only this is responsible for this function
export default function(state=null,action){
    switch(action.type){
        case 'BOOK_SELECTED':
        return action.payload;
    }
    return state;
}

