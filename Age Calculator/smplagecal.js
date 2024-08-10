function calculate() {
    setInterval(() => {
        let birthdate = new Date(document.getElementById('birthdate').value);
        let now = new Date();
        let ageInMs = now.getTime() - birthdate.getTime();

        let ageInS = ageInMs / 1000;
        let ageInMins = ageInS / 60;
        let ageInHrs = ageInMins / 60;
        let ageInDays = ageInHrs / 24;
        let ageInMonths = ageInDays / 30.4375;
        let ageInYears = ageInMonths / 12;

        ageInMonths %= 12;
        ageInDays %= 30;

        let years = Math.floor(ageInYears);
        let months = Math.floor(ageInMonths);
        let days = Math.floor(ageInDays);
        let hours = Math.floor(ageInHrs);
        let minutes = Math.floor(ageInMins);
        let seconds = Math.floor(ageInS);

        document.querySelector('#years').innerHTML = years + " years";
        document.querySelector('#months').innerHTML = months + " months";
        document.querySelector('#days').innerHTML = days + " days";
        document.querySelector('#hours').innerHTML = hours + " hours";
        document.querySelector('#minutes').innerHTML = minutes + " minutes";
        document.querySelector('#seconds').innerHTML = seconds + " seconds";
        document.querySelector('#seconds').style.borderBottom = '1px grey solid';
    }, 1000);
}

function reset() {
    window.location.reload();
}

