
const params = new URLSearchParams(window.location.search);
const pid = params.get('pid');
console.log(pid);


const fetchData = (pid) => 
{
    fetch (`https://dummyjson.com/product/${pid}`)
    .then((res) => res.json())
    .then((data) => displayData(data))
    .catch((err) => console.log(err))
}

fetchData(pid)

const displayData = (data) => 
{
    
}