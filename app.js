const jokeElement = document.getElementById('joke');
const button = document.getElementById('jokeBtn');

button.addEventListener('click', generateJoke)
generateJoke()

// function generateJoke(){
//     const config = {
//         headers : {
//             'Accept': 'application/json'
//         }
//     }
    
//     fetch('https://icanhazdadjoke.com', config)
//     .then(response => response.json())
//     .then(data => {
//         jokeElement.innerHTML = data.joke
//     })
// }


// async await method(cleaner)

async function generateJoke(){
    const config = {
        headers : {
            'Accept': 'application/json'
        }
    }
    
    const response = await fetch('https://icanhazdadjoke.com', config)

    const data = await response.json()

    jokeElement.innerHTML = data.joke
    
}