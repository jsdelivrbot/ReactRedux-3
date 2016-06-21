export function selectBook(book){
    console.log('selected book is:', book.title)
    return {
        type:'BOOK_SELECTED',
        payload:book,
    }
}

