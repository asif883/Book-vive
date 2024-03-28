const  getStoreBook = () =>{
    const storedBook = localStorage.getItem('read book');
    if(storedBook){
        return JSON.parse(storedBook);
    }
    return []
}

const saveReadBook = bookId =>{
    const saveBooks = getStoreBook();
    const exists = saveBooks.find(id => id === bookId );
    if(!exists){
        saveBooks.push(bookId)
        localStorage.setItem ('read book' , JSON.stringify(saveBooks))
    }
}

export {getStoreBook, saveReadBook};