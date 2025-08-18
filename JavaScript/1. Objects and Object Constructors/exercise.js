// const theHobbit = {
//     title: 'The Hobbit',
//     author: 'J.R.R. Tolkien',
//     pages: 295,
//     false: false,

//     info: function() {
//         return `${this.title} by ${this.author}`;
//     }

// }

function bookInfo(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.status = read;

    this.info = function() {
        return `${title} by ${author}, ${pages} pages, ${this.status}`
    };
}

const theHobbit = new bookInfo('The Hobbit', 'J.R.R. Tolkien', 295,'read');
// theHobbit.info();
console.log(theHobbit.info());