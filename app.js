var bookList = document.querySelector('#book-list');

console.log('book-list next sibling is:', bookList.nextSibling);
console.log('book-list next element sibling is:', bookList.nextElementSibling);

console.log('book-list previous sibling is:', bookList.previousSibling);
console.log('book-list previous element sibling is:', bookList.previousElementSibling);

bookList.previousElementSibling.querySelector('p').innerHTML += '</br>Too cool for everyone else!'
