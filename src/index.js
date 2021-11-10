const apiURL = 'http://localhost:3000';
 //GET /characters
    
async function getCharacter() {
    const response = await fetch('http://localhost:3000/characters');
    const data = await response.json();
    console.log(data);
}
getCharacter();

