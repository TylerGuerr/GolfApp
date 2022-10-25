let addButton = document.getElementById('addPlayer');
let playerNames = []
// window.onload = initializeOnLoad();



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
function getName() {
    let name = prompt("Enter a Name", "Name....");
    if (name != null) {
        document.getElementById('playerName').innerHTML = name;
    } 
    playerNames[0] = name;
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


function newPlayer() {
    let container = document.getElementById('container');
    let playerList = document.getElementById('playerList');
    playerList.innerHTML += `<div class="container" id="container">
    <table class="table">
        <thead class="thead-dark">
        <tr>
            <th scope="col" id="title">HOLE</th>
            <th scope="col">1</th>
            <th scope="col">2</th>
            <th scope="col">3</th>
            <th scope="col">4</th>
            <th scope="col">5</th>
            <th scope="col">6</th>
            <th scope="col">7</th>
            <th scope="col">8</th>
            <th scope="col">9</th>
            <th scope="col" id="totals">OUT</th>
        </tr>
        </thead>
        <tbody>
        <tr>
            <th scope="row" id="title">handicapage</th>
            <td><input maxlength="4" type="number" id="yard1"></input></td>
            <td><input maxlength="4" type="number" id="yard2"></input></td>
            <td><input maxlength="4" type="number" id="yard3"></input></td>
            <td><input maxlength="4" type="number" id="yard4"></input></td>
            <td><input maxlength="4" type="number" id="yard5"></input></td>
            <td><input maxlength="4" type="number" id="yard6"></input></td>
            <td><input maxlength="4" type="number" id="yard7"></input></td>
            <td><input maxlength="4" type="number" id="yard8"></input></td>
            <td><input maxlength="4" type="number" id="yard9"></input></td>
            <td id="yardTotal" onclick="yardTotal()">SUBMIT</td>
        </tr>
        <tr>
            <th scope="row" id="title">Par</th>
            <td><input maxlength="4" type="number" id="par1"></input></td>
            <td><input maxlength="4" type="number" id="par2"></input></td>
            <td><input maxlength="4" type="number" id="par3"></input></td>
            <td><input maxlength="4" type="number" id="par4"></input></td>
            <td><input maxlength="4" type="number" id="par5"></input></td>
            <td><input maxlength="4" type="number" id="par6"></input></td>
            <td><input maxlength="4" type="number" id="par7"></input></td>
            <td><input maxlength="4" type="number" id="par8"></input></td>
            <td><input maxlength="4" type="number" id="par9"></input></td>
            <td id="parTotal" onclick="parTotal()">SUBMIT</td>
        </tr>
        <tr>
            <th scope="row" id="title">Handicap</th>
            <td><input maxlength="4" type="number" id="handicap1"></input></td>
            <td><input maxlength="4" type="number" id="handicap2"></input></td>
            <td><input maxlength="4" type="number" id="handicap3"></input></td>
            <td><input maxlength="4" type="number" id="handicap4"></input></td>
            <td><input maxlength="4" type="number" id="handicap5"></input></td>
            <td><input maxlength="4" type="number" id="handicap6"></input></td>
            <td><input maxlength="4" type="number" id="handicap7"></input></td>
            <td><input maxlength="4" type="number" id="handicap8"></input></td>
            <td><input maxlength="4" type="number" id="handicap9"></input></td>
            <td></td>
        </tr>
        </tbody>
    </table>   
    <table class="table">
        <thead class="thead-light">
        <tr>
            <th scope="col" id="title">PLAYER</th>
            <th scope="col"></th>
            <th scope="col"></th>
            <th scope="col"></th>
            <th scope="col"></th>
            <th scope="col"></th>
            <th scope="col"></th>
            <th scope="col"></th>
            <th scope="col"></th>
            <th scope="col"></th>
            <th scope="col" id="totals">SCORE</th>
        </tr>
        </thead>
        <tbody>
        <tr>
            <th scope="row" id="playerName" onclick="getName()">Enter Name...</th>
                <td>1</td>
                <td>2</td>
                <td>3</td>
                <td>4</td>
                <td>5</td>
                <td>6</td>
                <td>7</td>
                <td>8</td>
                <td>9</td>
            <td id="totals">SUBMIT</td>
        </tr>
        </tbody>
    </table>
</div>`
}