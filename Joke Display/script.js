const mainDiv = document.getElementById('main');
let myData = [];
let currentIndex = 0;

function fetchData() {
    fetch("https://api.sampleapis.com/jokes/goodJokes")
        .then(res => res.json())
        .then(data => {
            console.log(data);
            myData = data;
            displaySetup(); // Display the first setup immediately
        })
        .catch(err => console.log(err));
}

fetchData();

function displaySetup() {
    mainDiv.textContent = ''; // Clear previous content
    if (currentIndex < myData.length) {
        const joke = myData[currentIndex];

        const setupp = document.createElement('p');
        setupp.textContent = `${joke.setup}`;
        mainDiv.appendChild(setupp);

        button.textContent = "Shall I tell you?😁";
        button.onclick = displayPunchline;
    } else {
        mainDiv.textContent = "No more jokes to display!";
        button.style.display = "none";
    }
}

function displayPunchline() {
    if (currentIndex < myData.length) {
        const joke = myData[currentIndex];

        const punchlinee = document.createElement('h2');
        punchlinee.textContent = "😂"+`${joke.punchline}`+"😂";
        mainDiv.appendChild(punchlinee);

        currentIndex++; // Move to the next joke

        button.textContent = "Next Joke";
        button.onclick = displaySetup;
    }
}

const heading = document.createElement('h1');
heading.textContent="Jokes";

const button = document.createElement('button');
button.textContent = "Show Punchline";
button.onclick = displayPunchline;

document.body.appendChild(button);
document.body.appendChild(heading);
