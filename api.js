const searchField = () => {
    const searchField = document.getElementById('search-field');
    searchText = searchField.value;
    // clear field
    searchField.value = '';
    const url =`http://openlibrary.org/search.json?q=${searchText}`
    fetch(url)
        .then(res => res.json())
        .then(data=>displayBook(data))
}
const displayBook = (books)=>{
    
}

