const button = document.querySelector(".btn");                            
const quote = document.querySelector(".quote");
const author = document.querySelector(".author");

button.addEventListener('click', getQuote);
getQuote();

function getQuote() {
    fetch("https://api.quotable.io/random")            //fetching link using fetch api
        .then(res => {
            return res.json();
        })
        .then(data => {
            quote.innerText = data.content;             // getting access to content
            author.innerText = "- " + data.author;      //  and author name
        })
        .catch(err => {
            console.log(err);                           // if something went wrong it will display error 
        });
}
