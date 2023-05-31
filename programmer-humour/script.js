const contentEl = document.getElementById("content");

const data = fetchFromApi();

async function fetchFromApi (){
const response = await fetch (`https://xkcd.now.sh/?comic=latest`);
const data = response.json(); 
console.log(data);
return data;
}

contentEl.innerHTML= data;