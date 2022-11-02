let playerNames = {
    0: {
        name:'',
        id:0,
        score:''
    },
    1: {
        name:'',
        id:1,
        score:''
    },
    2: {
        name:'',
        id:2,
        score:''
    },
    3: {
        name:'',
        id:3,
        score:''
    }
}
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
        yardTotal(data);
        parTotal(data);
        handicapTotal(data);
    }
}

function getNamePlayer1() {
    let name = prompt("Enter a Name", "Name....");
    let card2Name = document.getElementById('card2name1');
    if (name != null) {
        document.getElementById('player1').innerHTML = name;
    } 
    playerNames[0].name = name;
    card2Name.innerText = name;
    console.log(playerNames);
}
function getNamePlayer2() {
    let name = prompt("Enter a Name", "Name....");
    let card2Name = document.getElementById('card2name2');
    if (name != null) {
        document.getElementById('player2').innerHTML = name;
    } 
    playerNames[1].name = name;
    card2Name.innerText = name;
    console.log(playerNames);
}
function getNamePlayer3() {
    let name = prompt("Enter a Name", "Name....");
    let card2Name = document.getElementById('card2name3');
    if (name != null) {
        document.getElementById('player3').innerHTML = name;
    } 
    playerNames[2].name = name;
    card2Name.innerText = name;
    console.log(playerNames);
}
function getNamePlayer4() {
    let name = prompt("Enter a Name", "Name....");
    let card2Name = document.getElementById('card2name4');
    if (name != null) {
        document.getElementById('player4').innerHTML = name;
    } 
    playerNames[3].name = name;
    card2Name.innerText = name;
    console.log(playerNames);
}

function yardTotal(data) {
    let yardNum = document.getElementsByClassName('yard');
    let firstYardTotal = document.getElementById('yardTotal');
    let yard2Total = document.getElementById('yard2total');
    let yardTot = 0;
    for (let x=0; x < 9; x++){
        let yardsDataNum = data.data.holes[x].teeBoxes[0].yards;
        yardTot += yardsDataNum;
        yardNum[x].innerHTML = yardsDataNum;
        firstYardTotal.innerHTML = `${yardTot}`;
        if (x >= 8) {
            for(let x=9; x<18; x++) {
                let yardsDataNum = data.data.holes[x].teeBoxes[0].yards;
                yardTot += yardsDataNum;
                yardNum[x].innerHTML = yardsDataNum;
            }
            yard2Total.innerHTML = `${yardTot}`;
        } 
    }
    // yardTotal.innerHTML = `${yardTot}`;
}
function parTotal(data) {
    let parNum = document.getElementsByClassName('par');
    let firstParTotal = document.getElementById('parTotal');
    let par2total = document.getElementById('par2total')
    let parTot = 0;
    for (let x=0; x < 9; x++){
        let parDataNum = data.data.holes[x].teeBoxes[0].par;
        parTot += parDataNum;
        parNum[x].innerHTML = parDataNum;
        firstParTotal.innerHTML = `${parTot}`;
        if (x >=8) {
            for (let x=9; x<18; x++){
                let parDataNum = data.data.holes[x].teeBoxes[0].par;
                parTot += parDataNum;
                parNum[x].innerHTML = parDataNum;
            }
            par2total.innerHTML = `${parTot}`;
        }
    }
    // parTotal.innerHTML = `${parTot}`;
}
function handicapTotal(data) {
    let handicapNum = document.getElementsByClassName('handicap');
    let firstHandicapTotal = document.getElementById('handicapTotal');
    let handicap2total = document.getElementById('handicap2total')
    let handicapTot = 0;
    for (let x=0; x < 9; x++){
        let handicapDataNum = data.data.holes[x].teeBoxes[0].hcp;
        handicapTot += handicapDataNum;
        handicapNum[x].innerHTML = handicapDataNum;
        firstHandicapTotal.innerHTML = `${handicapTot}`;
        if(x >= 8) {
            for(let x=9; x<18; x++){
                let handicapDataNum = data.data.holes[x].teeBoxes[0].hcp;
                handicapTot += handicapDataNum;
                handicapNum[x].innerHTML = handicapDataNum;
            }
            handicap2total.innerHTML = `${handicapTot}`;
        }
    }
}

function getPlayer1score(){
    let hole1 = document.getElementById('p1hole1score').value;
    let hole2 = document.getElementById('p1hole2score').value;
    let hole3 = document.getElementById('p1hole3score').value;
    let hole4 = document.getElementById('p1hole4score').value;
    let hole5 = document.getElementById('p1hole5score').value;
    let hole6 = document.getElementById('p1hole6score').value;
    let hole7 = document.getElementById('p1hole7score').value;
    let hole8 = document.getElementById('p1hole8score').value;
    let hole9 = document.getElementById('p1hole9score').value;
    let hole10 = document.getElementById('p1card2hole10score').value;
    let hole11 = document.getElementById('p1card2hole11score').value;
    let hole12 = document.getElementById('p1card2hole12score').value;
    let hole13 = document.getElementById('p1card2hole13score').value;
    let hole14 = document.getElementById('p1card2hole14score').value;
    let hole15 = document.getElementById('p1card2hole15score').value;
    let hole16 = document.getElementById('p1card2hole16score').value;
    let hole17 = document.getElementById('p1card2hole17score').value;
    let hole18 = document.getElementById('p1card2hole18score').value;
    let card2player1total = document.getElementById('card2player1total');
    let handicap2Total = document.getElementById('handicap2total').innerHTML;
    let outHandicap = document.getElementById('handicapTotal').innerHTML;
    let playerOut = document.getElementById('player1total');

    let outHoleTotal = Number(hole1) + Number(hole2) + Number(hole3) + Number(hole4) + Number(hole5) + Number(hole6) + Number(hole7) + Number(hole8) + Number(hole9);
    outHandicap = Number(outHandicap);
    let playerOutTotal = outHoleTotal - outHandicap;
    playerOut.innerHTML = playerOutTotal;

    let total2 = Number(hole1) + Number(hole2) + Number(hole3) + Number(hole4) + Number(hole5) + Number(hole6) + Number(hole7) + Number(hole8) + Number(hole9) + Number(hole10) + Number(hole11) + Number(hole12) + Number(hole13) + Number(hole14) + Number(hole15) + Number(hole16) + Number(hole17) + Number(hole18);

    handicap2Total = Number(handicap2Total);

    let final2 = total2 - handicap2Total;

    card2player1total.innerText = final2;
    playerNames[0].score = final2;
}
function getPlayer2score(){
    let hole1 = document.getElementById('p2hole1score').value;
    let hole2 = document.getElementById('p2hole2score').value;
    let hole3 = document.getElementById('p2hole3score').value;
    let hole4 = document.getElementById('p2hole4score').value;
    let hole5 = document.getElementById('p2hole5score').value;
    let hole6 = document.getElementById('p2hole6score').value;
    let hole7 = document.getElementById('p2hole7score').value;
    let hole8 = document.getElementById('p2hole8score').value;
    let hole9 = document.getElementById('p2hole9score').value;
    let hole10 = document.getElementById('p2card2hole10score').value;
    let hole11 = document.getElementById('p2card2hole11score').value;
    let hole12 = document.getElementById('p2card2hole12score').value;
    let hole13 = document.getElementById('p2card2hole13score').value;
    let hole14 = document.getElementById('p2card2hole14score').value;
    let hole15 = document.getElementById('p2card2hole15score').value;
    let hole16 = document.getElementById('p2card2hole16score').value;
    let hole17 = document.getElementById('p2card2hole17score').value;
    let hole18 = document.getElementById('p2card2hole18score').value;
    let card2player2total = document.getElementById('card2player2total');
    let handicap2Total = document.getElementById('handicap2total').innerHTML;
    let outHandicap = document.getElementById('handicapTotal').innerHTML;
    let playerOut = document.getElementById('player2total');

    let outHoleTotal = Number(hole1) + Number(hole2) + Number(hole3) + Number(hole4) + Number(hole5) + Number(hole6) + Number(hole7) + Number(hole8) + Number(hole9);
    outHandicap = Number(outHandicap);
    let playerOutTotal = outHoleTotal - outHandicap;
    playerOut.innerHTML = playerOutTotal;

    let total = Number(hole1) + Number(hole2) + Number(hole3) + Number(hole4) + Number(hole5) + Number(hole6) + Number(hole7) + Number(hole8) + Number(hole9) + Number(hole10) + Number(hole11) + Number(hole12) + Number(hole13) + Number(hole14) + Number(hole15) + Number(hole16) + Number(hole17) + Number(hole18);

    handicap2Total = Number(handicap2Total);
    let final = total - handicap2Total;

    card2player2total.innerText = final;
    playerNames[1].score = final;
}
function getPlayer3score(){
    let hole1 = document.getElementById('p3hole1score').value;
    let hole2 = document.getElementById('p3hole2score').value;
    let hole3 = document.getElementById('p3hole3score').value;
    let hole4 = document.getElementById('p3hole4score').value;
    let hole5 = document.getElementById('p3hole5score').value;
    let hole6 = document.getElementById('p3hole6score').value;
    let hole7 = document.getElementById('p3hole7score').value;
    let hole8 = document.getElementById('p3hole8score').value;
    let hole9 = document.getElementById('p3hole9score').value;
    let hole10 = document.getElementById('p3card2hole10score').value;
    let hole11 = document.getElementById('p3card2hole11score').value;
    let hole12 = document.getElementById('p3card2hole12score').value;
    let hole13 = document.getElementById('p3card2hole13score').value;
    let hole14 = document.getElementById('p3card2hole14score').value;
    let hole15 = document.getElementById('p3card2hole15score').value;
    let hole16 = document.getElementById('p3card2hole16score').value;
    let hole17 = document.getElementById('p3card2hole17score').value;
    let hole18 = document.getElementById('p3card2hole18score').value;
    let card2player3total = document.getElementById('card2player3total');
    let handicap2Total = document.getElementById('handicap2total').innerHTML;
    let outHandicap = document.getElementById('handicapTotal').innerHTML;
    let playerOut = document.getElementById('player3total');

    let outHoleTotal = Number(hole1) + Number(hole2) + Number(hole3) + Number(hole4) + Number(hole5) + Number(hole6) + Number(hole7) + Number(hole8) + Number(hole9);
    outHandicap = Number(outHandicap);
    let playerOutTotal = outHoleTotal - outHandicap;
    playerOut.innerHTML = playerOutTotal;

    let total = Number(hole1) + Number(hole2) + Number(hole3) + Number(hole4) + Number(hole5) + Number(hole6) + Number(hole7) + Number(hole8) + Number(hole9) + Number(hole10) + Number(hole11) + Number(hole12) + Number(hole13) + Number(hole14) + Number(hole15) + Number(hole16) + Number(hole17) + Number(hole18);

    handicap2Total = Number(handicap2Total);
    let final = total - handicap2Total;

    card2player3total.innerText = final;
    playerNames[2].score = final;
}
function getPlayer4score(){
    let hole1 = document.getElementById('p4hole1score').value;
    let hole2 = document.getElementById('p4hole2score').value;
    let hole3 = document.getElementById('p4hole3score').value;
    let hole4 = document.getElementById('p4hole4score').value;
    let hole5 = document.getElementById('p4hole5score').value;
    let hole6 = document.getElementById('p4hole6score').value;
    let hole7 = document.getElementById('p4hole7score').value;
    let hole8 = document.getElementById('p4hole8score').value;
    let hole9 = document.getElementById('p4hole9score').value;
    let hole10 = document.getElementById('p3card2hole10score').value;
    let hole11 = document.getElementById('p3card2hole11score').value;
    let hole12 = document.getElementById('p3card2hole12score').value;
    let hole13 = document.getElementById('p3card2hole13score').value;
    let hole14 = document.getElementById('p3card2hole14score').value;
    let hole15 = document.getElementById('p3card2hole15score').value;
    let hole16 = document.getElementById('p3card2hole16score').value;
    let hole17 = document.getElementById('p3card2hole17score').value;
    let hole18 = document.getElementById('p3card2hole18score').value;
    let card2player4total = document.getElementById('card2player4total');
    let handicap2Total = document.getElementById('handicap2total').innerHTML;
    let outHandicap = document.getElementById('handicapTotal').innerHTML;
    let playerOut = document.getElementById('player4total');

    let outHoleTotal = Number(hole1) + Number(hole2) + Number(hole3) + Number(hole4) + Number(hole5) + Number(hole6) + Number(hole7) + Number(hole8) + Number(hole9);
    outHandicap = Number(outHandicap);
    let playerOutTotal = outHoleTotal - outHandicap;
    playerOut.innerHTML = playerOutTotal;

    let total = Number(hole1) + Number(hole2) + Number(hole3) + Number(hole4) + Number(hole5) + Number(hole6) + Number(hole7) + Number(hole8) + Number(hole9) + Number(hole10) + Number(hole11) + Number(hole12) + Number(hole13) + Number(hole14) + Number(hole15) + Number(hole16) + Number(hole17) + Number(hole18);

    handicap2Total = Number(handicap2Total);
    let final = total - handicap2Total;

    card2player4total.innerText = final;
    playerNames[3].score = final;
}
function endGame() {
    if(playerNames[0].score < playerNames[1].score && playerNames[0].score < playerNames[2].score && playerNames[0].score < playerNames[3].score) {
        window.alert(`${playerNames[0].name} wins`);
    }
    if(playerNames[1].score < playerNames[0].score && playerNames[1].score < playerNames[2].score && playerNames[1].score < playerNames[3].score) {
        window.alert(`${playerNames[1].name} wins`);
    }
    if(playerNames[2].score < playerNames[0].score && playerNames[2].score < playerNames[1].score && playerNames[2].score < playerNames[3].score) {
        window.alert(`${playerNames[2].name} wins`);
    }
    if(playerNames[3].score < playerNames[0].score && playerNames[3].score < playerNames[1].score && playerNames[3].score < playerNames[2].score) {
        window.alert(`${playerNames[3].name} wins`);
    }
}