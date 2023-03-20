const joketext = document.querySelector(".joke-text")
const button = document.querySelector(".btn")


button.addEventListener('click', getJoke)
getJoke()

function getJoke() {
    fetch('https://icanhazdadjoke.com/', {
        headers: {
            'Accept': 'application/json'
        }
    }).then(res => {
        return res.json()
    }).then(data => {
        const newjoke = data.joke;
        joketext.innerText = newjoke
    })
}