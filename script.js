let addButton = document.getElementById('addPlayer');
let playerNames = []


function foxSelected() {
    const fox = document.getElementById('fox');
    let golfTitle = document.getElementById('golfTitle')
    golfTitle.innerText = fox.innerText;

    window.onload = initializeOnLoad();
    async function getCourse(id) {
        const url = `https://golf-courses-api.herokuapp.com/courses/${id}`;
        return fetch(url).then((response) => response.json());
    }           
    async function initializeOnLoad(id="18300"){
        const data = await getCourse(id);
        displayDataToPage(data);
    }
    function displayDataToPage(data){
        console.log(data);
        yardTotal(data);
        parTotal(data);
        handicapTotal(data);
    }
}
function thanksSelected() {
    const thanks = document.getElementById('thanks');
    let golfTitle = document.getElementById('golfTitle')
    golfTitle.innerText = thanks.innerText;

    window.onload = initializeOnLoad();

    async function getCourse(id) {
        const url = `https://golf-courses-api.herokuapp.com/courses/${id}`;
        return fetch(url).then((response) => response.json());
    }           
    async function initializeOnLoad(id="11819"){
        const data = await getCourse(id);
        displayDataToPage(data);
    }
    function displayDataToPage(data){
        console.log(data);
        yardTotal(data);
        parTotal(data);
        handicapTotal(data);
    }
}
function spanishSelected() {
    const spanish = document.getElementById('spanish');
    let golfTitle = document.getElementById('golfTitle')
    golfTitle.innerText = spanish.innerText;

    window.onload = initializeOnLoad();

    async function getCourse(id) {
        const url = `https://golf-courses-api.herokuapp.com/courses/${id}`;
        return fetch(url).then((response) => response.json());
    }           
    async function initializeOnLoad(id="19002"){
        const data = await getCourse(id);
        displayDataToPage(data);
    }
    function displayDataToPage(data){
        console.log(data);
        yardTotal(data);
        parTotal(data);
        handicapTotal(data);
    }
}

function getNamePlayer1() {
    let name = prompt("Enter a Name", "Name....");
    if (name != null) {
        document.getElementById('player1').innerHTML = name;
    } 
    playerNames[0] = name;
    console.log(playerNames);
}
function getNamePlayer2() {
    let name = prompt("Enter a Name", "Name....");
    if (name != null) {
        document.getElementById('player2').innerHTML = name;
    } 
    playerNames[1] = name;
    console.log(playerNames);
}
function getNamePlayer3() {
    let name = prompt("Enter a Name", "Name....");
    if (name != null) {
        document.getElementById('player3').innerHTML = name;
    } 
    playerNames[2] = name;
    console.log(playerNames);
}
function getNamePlayer4() {
    let name = prompt("Enter a Name", "Name....");
    if (name != null) {
        document.getElementById('player4').innerHTML = name;
    } 
    playerNames[3] = name;
    console.log(playerNames);
}

function yardTotal(data) {
    let yardNum = document.getElementsByClassName('yard');
    let yardTotal = document.getElementById('yardTotal')
    let yardTot = 0;
    for (let x=0; x < 9; x++){
        let yardsDataNum = data.data.holes[x].teeBoxes[0].yards;
        yardTot += yardsDataNum;
        yardNum[x].innerHTML = yardsDataNum;
    }
    yardTotal.innerHTML = `${yardTot}`;
}
function parTotal(data) {
    let parNum = document.getElementsByClassName('par');
    let parTotal = document.getElementById('parTotal')
    let parTot = 0;
    for (let x=0; x < 9; x++){
        let parDataNum = data.data.holes[x].teeBoxes[0].par;
        parTot += parDataNum;
        parNum[x].innerHTML = parDataNum;
    }
    parTotal.innerHTML = `${parTot}`;
}
function handicapTotal(data) {
    let handicapNum = document.getElementsByClassName('handicap');
    let handicapTotal = document.getElementById('handicapTotal')
    let handicapTot = 0;
    for (let x=0; x < 9; x++){
        let handicapDataNum = data.data.holes[x].teeBoxes[0].hcp;
        handicapTot += handicapDataNum;
        handicapNum[x].innerHTML = handicapDataNum;
    }
    handicapTotal.innerHTML = `${handicapTot}`;
}
