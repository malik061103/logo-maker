// TODO: Create a constructor function called 'BlogPost' that takes in 'authorName', 'title', 'text, and 'createdOn'
class BlogPost {
    constructor(authorName, title, text, createdOn) {
        this.authorName = authorName;
        this.title = title;
        this.text = text;
        this.createdOn = createdOn;
        this.printmatadata = function () {
            console.log(`created by ${this.authorName}on${this.createdOn}`);

        }
    }







}
    // TODO: Include a method called 'printMetaData()' that prints a message in the console saying 'Created by (authorName) on (createdOn)'

    // TODO: Create a new object using the 'BlogPost' constructor
    const  mypost = new BlogPost("malik","JS is powerful","js is one of the most userful tool you can use for coding","08/25/2024")
// TODO: Call the 'printMetaData()' method on the new object
console.log(mypost);
mypost.printmatadata();