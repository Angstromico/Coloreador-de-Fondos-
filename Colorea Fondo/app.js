//const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const btn = document.getElementById('btn');
const color = document.querySelector('.color');
btn.addEventListener('click', () => {
    //get random number between 0 -3
    const ramdonNumber = `rGBA(${getRandomN()}, ${getRandomN()}, ${getRandomN()})`;
    console.log(ramdonNumber);
    console.log(document.body);
    document.body.style.backgroundColor = ramdonNumber;
    color.textContent = ramdonNumber

}); 
function getRandomN() {
    return Math.floor(Math.random()*255);
}