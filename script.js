///////////
// Peças //
///////////
const randomBlack = [
    "url(MahjongTiles/Black/Front.svg)", "url(MahjongTiles/Black/Back.svg)"
];
const randomWhite = [
    "url(MahjongTiles/Regular/Front.svg)", "url(MahjongTiles/Regular/Back.svg)"
];

const doraBlack = [
    "MahjongTiles/Black/Front.svg", "MahjongTiles/Black/Back.svg"
];
const doraWhite = [
    "MahjongTiles/Regular/Front.svg", "MahjongTiles/Regular/Back.svg"
];

const blackTiles = [
    "MahjongTiles/Black/Man1.svg", "MahjongTiles/Black/Man2.svg", "MahjongTiles/Black/Man3.svg",
    "MahjongTiles/Black/Man4.svg", "MahjongTiles/Black/Man5.svg", "MahjongTiles/Black/Man5-Dora.svg",
    "MahjongTiles/Black/Man6.svg", "MahjongTiles/Black/Man7.svg", "MahjongTiles/Black/Man8.svg",
    "MahjongTiles/Black/Man9.svg", "MahjongTiles/Black/Pin1.svg", "MahjongTiles/Black/Pin2.svg",
    "MahjongTiles/Black/Pin3.svg", "MahjongTiles/Black/Pin4.svg", "MahjongTiles/Black/Pin5.svg",
    "MahjongTiles/Black/Pin5-Dora.svg", "MahjongTiles/Black/Pin6.svg", "MahjongTiles/Black/Pin7.svg",
    "MahjongTiles/Black/Pin8.svg", "MahjongTiles/Black/Pin9.svg", "MahjongTiles/Black/Sou1.svg",
    "MahjongTiles/Black/Sou2.svg", "MahjongTiles/Black/Sou3.svg", "MahjongTiles/Black/Sou4.svg",
    "MahjongTiles/Black/Sou5.svg", "MahjongTiles/Black/Sou5-Dora.svg", "MahjongTiles/Black/Sou6.svg",
    "MahjongTiles/Black/Sou7.svg", "MahjongTiles/Black/Sou8.svg", "MahjongTiles/Black/Sou9.svg",
    "MahjongTiles/Black/Ton.svg", "MahjongTiles/Black/Nan.svg", "MahjongTiles/Black/Shaa.svg",
    "MahjongTiles/Black/Pei.svg", "MahjongTiles/Black/Haku.svg", "MahjongTiles/Black/Hatsu.svg",
    "MahjongTiles/Black/Chun.svg"
];
const whiteTiles = [
    "MahjongTiles/Regular/Man1.svg", "MahjongTiles/Regular/Man2.svg", "MahjongTiles/Regular/Man3.svg",
    "MahjongTiles/Regular/Man4.svg", "MahjongTiles/Regular/Man5.svg", "MahjongTiles/Regular/Man5-Dora.svg",
    "MahjongTiles/Regular/Man6.svg", "MahjongTiles/Regular/Man7.svg", "MahjongTiles/Regular/Man8.svg",
    "MahjongTiles/Regular/Man9.svg", "MahjongTiles/Regular/Pin1.svg", "MahjongTiles/Regular/Pin2.svg",
    "MahjongTiles/Regular/Pin3.svg", "MahjongTiles/Regular/Pin4.svg", "MahjongTiles/Regular/Pin5.svg",
    "MahjongTiles/Regular/Pin5-Dora.svg", "MahjongTiles/Regular/Pin6.svg", "MahjongTiles/Regular/Pin7.svg",
    "MahjongTiles/Regular/Pin8.svg", "MahjongTiles/Regular/Pin9.svg", "MahjongTiles/Regular/Sou1.svg",
    "MahjongTiles/Regular/Sou2.svg", "MahjongTiles/Regular/Sou3.svg", "MahjongTiles/Regular/Sou4.svg",
    "MahjongTiles/Regular/Sou5.svg", "MahjongTiles/Regular/Sou5-Dora.svg", "MahjongTiles/Regular/Sou6.svg",
    "MahjongTiles/Regular/Sou7.svg", "MahjongTiles/Regular/Sou8.svg", "MahjongTiles/Regular/Sou9.svg",
    "MahjongTiles/Regular/Ton.svg", "MahjongTiles/Regular/Nan.svg", "MahjongTiles/Regular/Shaa.svg",
    "MahjongTiles/Regular/Pei.svg", "MahjongTiles/Regular/Haku.svg", "MahjongTiles/Regular/Hatsu.svg",
    "MahjongTiles/Regular/Chun.svg"
];

//////////
// Mãos // 
//////////

const hand = [
    // 0      1       2       3        4      5        6      7        8      9       10      11      12      13      14     15   16       17   18    19 20 21 22   23   24    25   26    
    ["Ton", "Shaa", "Man3", "Man4", "Man5", "Man7", "Man8", "Man9", "Pin1", "Pin1", "Pin3", "Pin4", "Pin5", "Sou6", "Sou7", 1, "Sou5", 1, "Pin2", 0, 0, 0, 1, "Man5"],
    ["Ton", "Ton", "Pin2", "Pin3", "Pin4", "Sou2", "Sou2", "Sou2", "Sou3", "Sou4", "Sou7", "Sou8", "Sou9", "Hatsu", "Hatsu", 0, "Hatsu", 2, "Sou7", "Pin6", 0, 0, 0],
    ["Ton", "Pei", "Man3", "Man5", "Pin1", "Pin2", "Pin3", "Sou1", "Sou2", "Sou3", "Sou6", "Sou7", "Sou8", "Sou9", "Sou9", 1, "Man4", 2, "Nan", "Man6", 0, 0, 0],
    ["Ton", "Shaa", "Pin6", "Pin6", "Sou5", "Sou6", "Sou7", "Nan", "Nan", "Shaa", "Shaa", "Shaa", "Haku", "Haku", "Haku", 0, "Nan", 3, "Chun", "Pin7", "Sou5", 0, 0],
    ["Ton", "Shaa", "Man2", "Man4", "Man4", "Man5", "Man6", "Pin1", "Pin1", "Pin5", "Pin6", "Pin7", "Pei", "Pei", "Pei", 0, "Man3", 3, "Sou4", "Sou3", "Ton", 0, 1, "Haku", "Haku", "Pin4"]
];

/////////////
// Defines // 
/////////////
const prox = document.querySelector("#prox");
const define = document.querySelector("#define");
let contagem = 0;

///////////
// Theme //
///////////

var toggle = document.getElementById("cor");

var storedTheme = localStorage.getItem('theme') || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "BL" : "WT");
if (storedTheme)
    document.documentElement.setAttribute('data-theme', storedTheme)

var temaAtual = document.documentElement.getAttribute("data-theme");
const lista = document.querySelectorAll(".tiles");
    for (let i = 0; i < lista.length; i++) {
        if (temaAtual === "BL") {
            lista[i].style.backgroundImage = randomBlack[0];
            lista[i].src = doraBlack[1];
        }
        else if (temaAtual === "WT") {
            lista[i].style.backgroundImage = randomWhite[0];
            lista[i].src = doraWhite[1];
        }
    }
    const dora = document.querySelectorAll(".dora");
    for (let i = 0; i < dora.length; i++) {
        if (temaAtual === "BL") {
            dora[i].src = doraBlack[1];
        }
        else if (temaAtual === "WT") {
            dora[i].src = doraWhite[1];
        }
    }

    toggle.onclick = function () {
        var currentTheme = document.documentElement.getAttribute("data-theme");
        var targetTheme = "BL";

        if (currentTheme === "BL") {
            targetTheme = "WT";
        }

        const nodeList = document.querySelectorAll(".tiles");
        for (let i = 0; i < nodeList.length; i++) {
            if (targetTheme === "BL") {
                nodeList[i].style.backgroundImage = randomBlack[0];
                nodeList[i].src = blackTiles[conversor(hand[contagem][i])];
            }
            else if (targetTheme === "WT") {
                nodeList[i].style.backgroundImage = randomWhite[0];
                nodeList[i].src = whiteTiles[conversor(hand[contagem][i])];
            }
        }

        const dora = document.querySelectorAll(".dora");
        if (targetTheme === "BL") {
            for (let i = 0; i < 14; i++) {
                dora[i].src = doraBlack[1];
            }
            for (let i = 0; i < hand[contagem][17]; i++) {
                dora[2 + i].style.backgroundImage = randomBlack[0];
                dora[2 + i].src = blackTiles[conversor(hand[contagem][18 + i])];
                if (hand[contagem][22] == 1) {
                    Richi_1.style.visibility = "visible";
                    Richi_2.style.visibility = "visible";
                    dora[9 + i].style.backgroundImage = randomBlack[0];
                    dora[9 + i].src = blackTiles[conversor(hand[contagem][23 + i])];
                }
                else {
                    dora[9 + i].src = doraBlack[1];
                    Richi_1.style.visibility = "hidden";
                    Richi_2.style.visibility = "hidden";
                }
            }
        }
        else if (targetTheme === "WT") {
            for (let i = 0; i < 14; i++) {
                dora[i].src = doraWhite[1];
            }
            for (let i = 0; i < hand[contagem][17]; i++) {
                dora[2 + i].style.backgroundImage = randomWhite[0];
                dora[2 + i].src = whiteTiles[conversor(hand[contagem][18 + i])];
                if (hand[contagem][22] == 1) {
                    Richi_1.style.visibility = "visible";
                    Richi_2.style.visibility = "visible";
                    dora[9 + i].style.backgroundImage = randomWhite[0];
                    dora[9 + i].src = whiteTiles[conversor(hand[contagem][23 + i])];
                }
                else {
                    dora[9 + i].src = doraWhite[1];
                    Richi_1.style.visibility = "hidden";
                    Richi_2.style.visibility = "hidden";
                }
            }
        }

        const agari = document.querySelector("#Tile_14");
        if (targetTheme === "BL") {
            agari.style.backgroundImage = randomBlack[0];
            agari.src = blackTiles[conversor(hand[contagem][16])];
        }
        else if (targetTheme === "WT") {
            agari.style.backgroundImage = randomWhite[0];
            agari.src = whiteTiles[conversor(hand[contagem][16])];
        }

        document.documentElement.setAttribute('data-theme', targetTheme)
        localStorage.setItem('theme', targetTheme);
    };

//////////
// Yaku //
//////////
define.addEventListener("click", () => {
    contagem++;
    if (contagem > 4) {
        contagem = 0;
    }
    var currentTheme = document.documentElement.getAttribute("data-theme");
    let Text_4 = document.querySelector("#Text_4");
    let Kaze_1 = document.querySelector("#Kaze_1");
    let Kaze_2 = document.querySelector("#Kaze_2");
    let Tile_1 = document.querySelector("#Tile_1");
    let Tile_2 = document.querySelector("#Tile_2");
    let Tile_3 = document.querySelector("#Tile_3");
    let Tile_4 = document.querySelector("#Tile_4");
    let Tile_5 = document.querySelector("#Tile_5");
    let Tile_6 = document.querySelector("#Tile_6");
    let Tile_7 = document.querySelector("#Tile_7");
    let Tile_8 = document.querySelector("#Tile_8");
    let Tile_9 = document.querySelector("#Tile_9");
    let Tile_10 = document.querySelector("#Tile_10");
    let Tile_11 = document.querySelector("#Tile_11");
    let Tile_12 = document.querySelector("#Tile_12");
    let Tile_13 = document.querySelector("#Tile_13");
    let Tile_14 = document.querySelector("#Tile_14");
    let Dora_3 = document.querySelector("#Dora_3");
    let Dora_4 = document.querySelector("#Dora_4");
    let Dora_5 = document.querySelector("#Dora_5");
    let uraDora_3 = document.querySelector("#uraDora_3");
    let uraDora_4 = document.querySelector("#uraDora_4");
    let uraDora_5 = document.querySelector("#uraDora_5");
    let Richi_1 = document.querySelector("#Richi_1");
    let Richi_2 = document.querySelector("#Richi_2");

    if (currentTheme === "BL") {
        Kaze_1.src = blackTiles[conversor(hand[contagem][0])];
        Kaze_2.src = blackTiles[conversor(hand[contagem][1])];
        Tile_1.src = blackTiles[conversor(hand[contagem][2])];
        Tile_2.src = blackTiles[conversor(hand[contagem][3])];
        Tile_3.src = blackTiles[conversor(hand[contagem][4])];
        Tile_4.src = blackTiles[conversor(hand[contagem][5])];
        Tile_5.src = blackTiles[conversor(hand[contagem][6])];
        Tile_6.src = blackTiles[conversor(hand[contagem][7])];
        Tile_7.src = blackTiles[conversor(hand[contagem][8])];
        Tile_8.src = blackTiles[conversor(hand[contagem][9])];
        Tile_9.src = blackTiles[conversor(hand[contagem][10])];
        Tile_10.src = blackTiles[conversor(hand[contagem][11])];
        Tile_11.src = blackTiles[conversor(hand[contagem][12])];
        Tile_12.src = blackTiles[conversor(hand[contagem][13])];
        Tile_13.src = blackTiles[conversor(hand[contagem][14])];
        Tile_14.src = blackTiles[conversor(hand[contagem][16])];
        const dora = document.querySelectorAll(".dora");
        for (let i = 0; i < 4; i++) {
            dora[2 + i].src = doraBlack[1];
            dora[9 + i].src = doraBlack[1];
        }
        for (let i = 0; i < hand[contagem][17]; i++) {
            dora[2 + i].style.backgroundImage = randomBlack[0];
            dora[2 + i].src = blackTiles[conversor(hand[contagem][18 + i])];
            if (hand[contagem][22] == 1) {
                Richi_1.style.visibility = "visible";
                Richi_2.style.visibility = "visible";
                dora[9 + i].style.backgroundImage = randomBlack[0];
                dora[9 + i].src = blackTiles[conversor(hand[contagem][23 + i])];
            }
            else {
                dora[9 + i].src = doraBlack[1];
                Richi_1.style.visibility = "hidden";
                Richi_2.style.visibility = "hidden";
            }
        }
        if (hand[contagem][15] == 0) {
            Text_4.innerHTML = "ロ<br>ン";
            Tile_14.style.rotate = "90deg";
        }
        else {
            Text_4.innerHTML = "ツ<br>モ";
            Tile_14.style.rotate = "0deg";
        }
    }

    else if (currentTheme === "WT") {
        Kaze_1.src = whiteTiles[conversor(hand[contagem][0])];
        Kaze_2.src = whiteTiles[conversor(hand[contagem][1])];
        Tile_1.src = whiteTiles[conversor(hand[contagem][2])];
        Tile_2.src = whiteTiles[conversor(hand[contagem][3])];
        Tile_3.src = whiteTiles[conversor(hand[contagem][4])];
        Tile_4.src = whiteTiles[conversor(hand[contagem][5])];
        Tile_5.src = whiteTiles[conversor(hand[contagem][6])];
        Tile_6.src = whiteTiles[conversor(hand[contagem][7])];
        Tile_7.src = whiteTiles[conversor(hand[contagem][8])];
        Tile_8.src = whiteTiles[conversor(hand[contagem][9])];
        Tile_9.src = whiteTiles[conversor(hand[contagem][10])];
        Tile_10.src = whiteTiles[conversor(hand[contagem][11])];
        Tile_11.src = whiteTiles[conversor(hand[contagem][12])];
        Tile_12.src = whiteTiles[conversor(hand[contagem][13])];
        Tile_13.src = whiteTiles[conversor(hand[contagem][14])];
        Tile_14.src = whiteTiles[conversor(hand[contagem][16])];
        const dora = document.querySelectorAll(".dora");
        for (let i = 0; i < 4; i++) {
            dora[2 + i].src = doraWhite[1];
            dora[9 + i].src = doraWhite[1];
        }
        for (let i = 0; i < hand[contagem][17]; i++) {
            dora[2 + i].style.backgroundImage = randomWhite[0];
            dora[2 + i].src = whiteTiles[conversor(hand[contagem][18 + i])];
            if (hand[contagem][22] == 1) {
                Richi_1.style.visibility = "visible";
                Richi_2.style.visibility = "visible";
                dora[9 + i].style.backgroundImage = randomWhite[0];
                dora[9 + i].src = whiteTiles[conversor(hand[contagem][23 + i])];
            }
            else {
                dora[9 + i].src = doraWhite[1];
                Richi_1.style.visibility = "hidden";
                Richi_2.style.visibility = "hidden";
            }
        }
    }
});

/////////////////
// Verificação //
/////////////////
var verificacao = document.querySelector("#verificacao");
verificacao.addEventListener("click", () => {
    var pinfu = document.querySelector('#pinfu');
    if (pinfu.checked) {
        alert("teste");
    }
});
/////////////////////////
// Função de Conversão //
/////////////////////////

function conversor(valor) {
    if (valor == "Man1") { return 0; }
    else if (valor == "Man2") { return 1; }
    else if (valor == "Man3") { return 2; }
    else if (valor == "Man4") { return 3; }
    else if (valor == "Man5") { return 4; }
    else if (valor == "Man5_Dora") { return 5; }
    else if (valor == "Man6") { return 6; }
    else if (valor == "Man7") { return 7; }
    else if (valor == "Man8") { return 8; }
    else if (valor == "Man9") { return 9; }
    else if (valor == "Pin1") { return 10; }
    else if (valor == "Pin2") { return 11; }
    else if (valor == "Pin3") { return 12; }
    else if (valor == "Pin4") { return 13; }
    else if (valor == "Pin5") { return 14; }
    else if (valor == "Pin5_Dora") { return 15; }
    else if (valor == "Pin6") { return 16; }
    else if (valor == "Pin7") { return 17; }
    else if (valor == "Pin8") { return 18; }
    else if (valor == "Pin9") { return 19; }
    else if (valor == "Sou1") { return 20; }
    else if (valor == "Sou2") { return 21; }
    else if (valor == "Sou3") { return 22; }
    else if (valor == "Sou4") { return 23; }
    else if (valor == "Sou5") { return 24; }
    else if (valor == "Sou5_Dora") { return 25; }
    else if (valor == "Sou6") { return 26; }
    else if (valor == "Sou7") { return 27; }
    else if (valor == "Sou8") { return 28; }
    else if (valor == "Sou9") { return 29; }
    else if (valor == "Ton") { return 30; }
    else if (valor == "Nan") { return 31; }
    else if (valor == "Shaa") { return 32; }
    else if (valor == "Pei") { return 33; }
    else if (valor == "Haku") { return 34; }
    else if (valor == "Hatsu") { return 35; }
    else if (valor == "Chun") { return 36; }
}