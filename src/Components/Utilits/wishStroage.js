const  getStoreWish = () =>{
    const storedWish = localStorage.getItem('Wish-list');
    if(storedWish){
        return JSON.parse(storedWish);
    }
    return []
}

const saveWishBook = bookId =>{
    const saveWish = getStoreWish();
    const exists = saveWish.find(id => id === bookId );
    if(!exists){
        saveWish.push(bookId)
        localStorage.setItem ('Wish-list' , JSON.stringify(saveWish))
    }
}

export {getStoreWish , saveWishBook}