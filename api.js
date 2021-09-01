const searchField = () => {
    const searchField = document.getElementById('search-field');
    searchText = searchField.value;
    // clear field
    searchField.value = '';
    const url = `https://openlibrary.org/search.json?q=${searchText}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayBook(data.docs))
}
    //  display all books and make dynamic
const displayBook = (docs) => {
    const imageBox = document.getElementById('image-box');
    imageBox.textContent = '';
         docs.forEach(book => {
         console.log(book);
         const div = document.createElement('div');
             div.classList.add('col');
             div.innerHTML = `
             <div class="card">
            <img src="https://covers.openlibrary.org/b/id/${book.cover_i}-L.jpg" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">Book Name: ${book.title}</h5>
              <h6 class="card-text">Author: ${book.author_name}</h6>
              <h6 class="card-text">Publisher: ${book.publisher}</h6>
              <p class="card-text">First Publish: ${book.first_publish_year}</p>
            </div>
          </div>
             `
             imageBox.appendChild(div);
     })
}

