let addButton = document.getElementById('addPlayer');
function yardTotal() {
    let yard1 = document.getElementById('yard1');
    let yard2 = document.getElementById('yard2');
    let yard3 = document.getElementById('yard3');
    let yard4 = document.getElementById('yard4');
    let yard5 = document.getElementById('yard5');
    let yard6 = document.getElementById('yard6');
    let yard7 = document.getElementById('yard7');
    let yard8 = document.getElementById('yard8');
    let yard9 = document.getElementById('yard9');
    let yardTotal = document.getElementById('yardTotal');

    let total = Number(yard1.value) + Number(yard2.value) + Number(yard3.value) + Number(yard4.value) + Number(yard5.value) + Number(yard6.value) +
                Number(yard7.value) + Number(yard8.value) + Number(yard9.value);
    let finalTotal = yardTotal.innerText = total;
    yardTotal.parentElement = finalTotal;
}
function parTotal() {
    let par1 = document.getElementById('par1');
    let par2 = document.getElementById('par2');
    let par3 = document.getElementById('par3');
    let par4 = document.getElementById('par4');
    let par5 = document.getElementById('par5');
    let par6 = document.getElementById('par6');
    let par7 = document.getElementById('par7');
    let par8 = document.getElementById('par8');
    let par9 = document.getElementById('par9');
    let parTotal = document.getElementById('parTotal');

    let total = Number(par1.value) + Number(par2.value) + Number(par3.value) + Number(par4.value) + Number(par5.value) + Number(par6.value) +
                Number(par7.value) + Number(par8.value) + Number(par9.value);
    parTotal.innerText = total;
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
            <th scope="row" id="title">Yardage</th>
            <td><input maxlength="4" type="number" id="yard1"></input></td>
            <td><input maxlength="4" type="number" id="yard2"></input></td>
            <td><input maxlength="4" type="number" id="yard3"></input></td>
            <td><input maxlength="4" type="number" id="yard4"></input></td>
            <td><input maxlength="4" type="number" id="yard5"></input></td>
            <td><input maxlength="4" type="number" id="yard6"></input></td>
            <td><input maxlength="4" type="number" id="yard7"></input></td>
            <td><input maxlength="4" type="number" id="yard8"></input></td>
            <td><input maxlength="4" type="number" id="yard9"></input></td>
            <td id="yardTotal" onclick="yardTotal()">TOTAL</td>
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
            <td id="parTotal" onclick="parTotal()">TOTAL</td>
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
            <th scope="row" id="title">Mario</th>
            <td>1</td>
            <td>2</td>
            <td>3</td>
            <td>4</td>
            <td>5</td>
            <td>6</td>
            <td>7</td>
            <td>8</td>
            <td>9</td>
            <td id="totals">TOTAL</td>
        </tr>
        </tbody>
    </table>
</div>`
}
