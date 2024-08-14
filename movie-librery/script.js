
const movieList =[
    {
      "Title": "Avatar",
      "Year": "2009"
    },
    {
      "Title": "Endgame",
      "Year": "2019"
    },
    {
      "Title": "Iron-Man",
      "Year": "2008"
    }
]

const mainDiv=document.getElementById('main')
const main = document.createElement('div');
movieList.forEach(function (m){

    const movieDiv = document.createElement('div');

    const ttitle = document.createElement('h1');
    ttitle.textContent=m.Title;

    const yYear = document.createElement('p');
    yYear.textContent = m.Year;

    main.append(ttitle,yYear);
    mainDiv.appendChild(main);

});