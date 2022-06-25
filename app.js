const jokeElement = document.getElementById('joke');
const button = document.getElementById('jokeBtn');

generateJoke()

function generateJoke(){
    const config = {
        headers : {
            'Accept': 'application/json'
        }
    }
    fetch('http://icanhazdadjoke.com', config).then(response => response.json.then(data => console.log(data)))
}