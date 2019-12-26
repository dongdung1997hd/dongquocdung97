let clothers = JSON.parse(localStorage.getItem("AllClothers"));
let sum = '';
for (let i = 0; i < clothers.length; i++) {
    const clother = clothers[i];
     sum += `<li>${clother.name}</li>`;
    
}
document.getElementById('list-items').innerHTML = sum;