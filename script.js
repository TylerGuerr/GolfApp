let addButton = document.getElementById('addPlayer');

function newPlayer() {
    let container = document.getElementById('container');
    let goal = document.getElementById('goal');
    let addNewPlayer = document.getElementById('addNewPlayer');
    
    goal.innerHTML += container.innerHTML;
    goal.style.display="block";
}