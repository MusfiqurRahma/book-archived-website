const searchField = () => {
    const searchField = document.getElementById('search-field');
    searchText = searchField.value;
    // clear field
    searchField.value = '';
    const url = `https://openlibrary.org/search.json?q=${searchText}`;
    fetch(url)
        .then(res => res.json())
        .then(data=>displayBook(data.docs))
}
     const displayBook = (docs) => {
     const imageBox = document.getElementById('image-box');
    // console.log(books);
         docs.forEach(book => {
         console.log(book);
     })
}

