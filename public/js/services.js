angular.module('myApp')
  .service('BookService', BookService);

function BookService(){
  this.value = "I am a book service!";
  this.books = [
    {
      id: 1,
      title: 'Treason',
      author: 'Orson Scott Card'
    },
    {
      id: 2,
      title: 'Ender\'s Game',
      author: 'Orson Scott Card'
    },
    {
      id: 3,
      title: 'Harry Potter and the Sorcerer\'s Stone',
      author: 'J.K. Rowling'
    }
  ];
}

BookService.prototype.getBooks = function () {
  return this.books;
};

BookService.prototype.getBook = function (id) {
  return this.books.find((book) => book.id === id);
};

BookService.prototype.addBook = function (bookData){
  const { author, title } = bookData;
  this.books.unshift({
    author,
    title,
  });
};


