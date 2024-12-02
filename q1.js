const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});
/*
Create a simple library management application with the following features:

1) Allow users to register books by entering the book title. Store this information in an array.
2) Using the libraryCard object, assign "borrow" as one of the key and have it's value default to false. When the user uses the command "borrow", toggle it. A user can only register books if borrow is true.
3) List all the books registered under your array

CHALLENGE 1: The same book cannot be borrowed twice. So if a user tried to borrow a book that's already in the array, deny them

CHALLENGE 2: Make it so that the user can return their books with a "return" command. Returning books means the book registry is an empty array again.
*/

/*NOTES:
REFERENCE BACK TO OLD CODE TO FIGURE THIS OUT!!
1) work on registering books into the system (REMEMBER TO STORE THEM!!! FOR LATER!!)
2) Let books be locked by borrow in the beginning, when unlocked people can borrow
3) List all the books (should be in previous lesson)

Challenge 1: Make the function look back at the stored information! Make it deny them if it's already there (like the lesson about repeating names in a system)

Challenge 2: Clear the registry to make it look like they returned the book
*/

let bookregistry = [];
let libraryCard = {
  //library card setting goes here
  Borrow: false
};

//rename this to RegisterBook
function RegisterBook(){
  //ask for the book title with readline
  if(libraryCard.Borrow === true){
  readline.question("What book would you like to borrow?", newTitle =>{
   if(bookregistry[newTitle]){
    console.log("Sorry, that book is already in our system!")
   }else {
    bookregistry[newTitle] = true;
    console.log(`${newTitle} is now borrowed!`)
    bookregistry.push(newTitle);
    StartApp();
   }
    })
  }else {
      console.log("Sorry, you don't have a library card!")
      StartApp();
    }
}


//rename this to ListBooks
function ListBooks(){
  if (bookregistry.length === 0) {
    console.log("No books are currently borrowed.");
} else {
    console.log("Books currently borrowed:");
    bookregistry.forEach((book, index) => {
        console.log(`${index + 1}. ${book}`);
    });
}
StartApp();
}


function ReturnBooks() {
  if (bookregistry.length === 0) {
      console.log("No books to return. The registry is already empty.");
  } else {
     bookregistry = [];
      console.log("All books have been successfully returned.");
  }
  StartApp();
}

function StartApp(){
  readline.question("What is your command? ", _command=>{
    if(_command === "quit"){
      readline.close();
    } else if(_command === "Check Books"){
      ListBooks();
    } else if(_command === "Register Books"){
      RegisterBook();
    }  else if(_command === "Borrow"){
      console.log("You've given us your library card!")
      libraryCard.Borrow = !libraryCard.Borrow;
      StartApp();
    } else if (_command === "Return Books") {
      ReturnBooks();
    }
  })
}

StartApp();
