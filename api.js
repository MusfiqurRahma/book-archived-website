const searchField = () => {
  const searchField = document.getElementById('search-field');
  searchText = searchField.value;
  // clear field
  searchField.value = '';
  const imageBox = document.getElementById('image-box');
  imageBox.textContent = '';
const errorDiv = document.getElementById('error');
  if (searchText === '') {
    // document.getElementById('spinner').classList.remove(d-none)
    errorDiv.innerHTML = "❌Search field can't be empty";
    errorDiv.style.color = 'red';
    errorDiv.style.fontSize = '25px';
    // errorDiv.style.display = 'block'
    return;
}
  const url = `https://openlibrary.org/search.json?q=${searchText}`;
  fetch(url)
      .then(res => res.json())
      .then(data => displayBook(data))

}
  //  display books
const displayBook = (books) => {
       const imageBox = document.getElementById('image-box');
       imageBox.textContent = '';
// found data result
const foundData = document.getElementById('found-data');
foundData.textContent = '';
const div = document.createElement('div')
div.innerHTML = `
<h4> Found Data: ${books.numFound} </h4>`
foundData.appendChild(div);

const errorDiv = document.getElementById('error');
errorDiv.style.color = 'red';
errorDiv.style.fontSize = '25px';
errorDiv.innerText = '';
  if (books.docs == '') {
     errorDiv.innerHTML=('"❌Please Give A Book Name"')
  }

        // display details about books
  // console.log(books.docs);
  books.docs.forEach(book => {
           console.log(book);
          const div = document.createElement('div');
           div.classList.add('col');
           div.innerHTML = `
           <div class="card w-75 h-100">
          <img src="https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">Book Name: ${book.title}</h5>
            <h6 class="card-text">Author: ${book.author_name}</h6>
            <h6 class="card-text">Publisher: ${book.publisher.slice(0,2)}</h6>
            <p class="card-text">First Publish: ${book.first_publish_year}</p>
          </div>
        </div>
           `
           imageBox.appendChild(div);
   })
}