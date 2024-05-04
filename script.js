///////////
// Peças //
///////////
const randomBlack = 
[
    "url(MahjongTiles/Black/Front.svg)", "url(MahjongTiles/Export/Black/Back.png)"
];
const randomWhite = 
[
    "url(MahjongTiles/Regular/Front.svg)", "url(MahjongTiles/Export/Regular/Back.png)"
];

const doraBlack = 
[
    "MahjongTiles/Black/Front.svg", "MahjongTiles/Export/Black/Back.png"
];
const doraWhite = 
[
    "MahjongTiles/Regular/Front.svg", "MahjongTiles/Export/Regular/Back.png"
];

const blackTiles = 
[
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

const whiteTiles = 
[
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

const hand = 
[
    // 0      1       2       3        4      5        6      7        8      9       10      11      12      13      14     15   16       17   18    19 20 21 22   23   24    25   26    
    ["Ton", "Shaa", "Man3", "Man4", "Man5", "Man7", "Man8", "Man9", "Pin1", "Pin1", "Pin3", "Pin4", "Pin5", "Sou6", "Sou7", 1, "Sou5", 1, "Pin2", 0, 0, 0, 1, "Man5"],
    ["Ton", "Ton", "Pin2", "Pin3", "Pin4", "Sou2", "Sou2", "Sou2", "Sou3", "Sou4", "Sou7", "Sou8", "Sou9", "Hatsu", "Hatsu", 0, "Hatsu", 2, "Sou7", "Pin6", 0, 0, 0],
    ["Ton", "Pei", "Man3", "Man5", "Pin1", "Pin2", "Pin3", "Sou1", "Sou2", "Sou3", "Sou6", "Sou7", "Sou8", "Sou9", "Sou9", 1, "Man4", 2, "Nan", "Man6", 0, 0, 0],
    ["Ton", "Shaa", "Pin6", "Pin6", "Sou5", "Sou6", "Sou7", "Nan", "Nan", "Shaa", "Shaa", "Shaa", "Haku", "Haku", "Haku", 0, "Nan", 3, "Chun", "Pin7", "Sou5", 0, 0],
    ["Ton", "Shaa", "Man2", "Man4", "Man4", "Man5", "Man6", "Pin1", "Pin1", "Pin5", "Pin6", "Pin7", "Pei", "Pei", "Pei", 0, "Man3", 3, "Sou4", "Sou3", "Ton", 0, 1, "Haku", "Haku", "Pin4"]
];

const hand_yaku = 
[
    [1, "門前清自模和「メンゼンツモ」", "立直「リーチ」", "平和「ピンフ」"],
    [1, "役牌「やくはい」", "門前清自模和「メンゼンツモ」"],
    [0, "門前清自模和「メンゼンツモ」"],
    [4, "役牌「やくはい」"],
    [1, "立直「リーチ」"]
];

const dora_suu = 
[
    ["ゼロ", "一", "二", "三", "四", "五", "六", "七", "八", "九", "十"]
];

const verif_yaku = ["役牌「やくはい」", "門前清自模和「メンゼンツモ」", "立直「リーチ」", "平和「ピンフ」", "断么九「タンヤオ」", "一盃口「イーペーコー」", "三色同順「サンショク」", "一気通貫「イッツウ」", "対々和「トイトイ」", "七対子「チートイツ」", "混全帯么九「チャンタ」", "三暗刻「サンアンコー」", "混老頭「ホンロートー」", "三槓子「サンカンツ」", "小三元「ショウサンゲン」", "三色同刻「サンショクドーコー」", "混一色「ホンイツ」", "二盃口「リャンペーコー」", "純全帯么九「ジュンチャン」", "清一色「チンイツ」", "国士無双「コクシムソウ」", "四暗刻「スーアンコー」", "大三元「ダイサンゲン」", "字一色「ツーイーソー」", "緑一色「リューイーソー」", "四喜和「スーシーホー」", "九蓮宝燈「チューレンポートー」", "清老頭「チンロートー」"]

/////////////
// Defines // 
/////////////
const prox = document.querySelector("#prox");
const define = document.querySelector("#define");
var resposta = document.querySelector("#Div_21");
var respota_original = document.querySelector("#Div_22");
let contagem = 0;
let trava = 0;

///////////
// Theme //
///////////
var toggle = document.getElementById("cor");

//Recupera qual o tema atual
var storedTheme = localStorage.getItem('theme') || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "BL" : "WT");
if (storedTheme)
    document.documentElement.setAttribute('data-theme', storedTheme)
var temaAtual = document.documentElement.getAttribute("data-theme");

const lista = document.querySelectorAll(".tiles");
//Define o background incial das peças com base no tema salvo
for (let i = 0; i < lista.length; i++) 
{
    if (temaAtual === "BL") 
    {
        lista[i].style.backgroundImage = randomBlack[1];
    }
    else if (temaAtual === "WT") 
    {
        lista[i].style.backgroundImage = randomWhite[1];
    }
}

//Define o background incial das doras com base no tema salvo
const dora = document.querySelectorAll(".dora");
for (let i = 0; i < dora.length; i++) 
{
    if (temaAtual === "BL") 
    {
        dora[i].style.backgroundImage = randomBlack[1];
    }
    else if (temaAtual === "WT") 
    {
        dora[i].style.backgroundImage = randomWhite[1];
    }
}

//Função mudar de cor
toggle.onclick = function () 
{
    var currentTheme = document.documentElement.getAttribute("data-theme");
    var targetTheme = "BL";

    if (currentTheme === "BL") 
    {
        targetTheme = "WT";
    }

    //Altera as cores das peças normais
    const nodeList = document.querySelectorAll(".tiles");
    const tileList = document.querySelectorAll(".tiles_default");
    for (let i = 0; i < tileList.length; i++) 
    {
        if (targetTheme === "BL") 
        {
            nodeList[i].style.backgroundImage = randomBlack[0]
            tileList[i].src = blackTiles[conversor(hand[contagem][i])];
        }
        else if (targetTheme === "WT") 
        {
            nodeList[i].style.backgroundImage = randomWhite[0];
            tileList[i].src = whiteTiles[conversor(hand[contagem][i])];
        }
    }

    //Altera as cores das doras e do riichi
    const dora = document.querySelectorAll(".dora");
    const doraList = document.querySelectorAll(".dora_default");
    if (targetTheme === "BL") 
    {
        for (let i = 0; i < 14; i++) 
        {
            dora[i].style.backgroundImage = randomBlack[1];
        }
        for (let i = 0; i < hand[contagem][17]; i++) 
        {
            dora[2 + i].style.backgroundImage = randomBlack[0];
            doraList[2 + i].src = blackTiles[conversor(hand[contagem][18 + i])];
            if (hand[contagem][22] == 1) 
            {
                Richi_1.style.visibility = "visible";
                Richi_2.style.visibility = "visible";
                dora[9 + i].style.backgroundImage = randomBlack[0];
                doraList[9 + i].src = blackTiles[conversor(hand[contagem][23 + i])];
            }
            else 
            {
                dora[9 + i].style.backgroundImage = randomBlack[1];
                Richi_1.style.visibility = "hidden";
                Richi_2.style.visibility = "hidden";
            }
        }
    }

    //Caso seja branco (dora e riichi)
    else if (targetTheme === "WT") 
    {
        for (let i = 0; i < 14; i++) 
        {
            dora[i].style.backgroundImage = randomWhite[1];
        }
        for (let i = 0; i < hand[contagem][17]; i++) 
        {
            dora[2 + i].style.backgroundImage = randomWhite[0];
            doraList[2 + i].src = whiteTiles[conversor(hand[contagem][18 + i])];
            if (hand[contagem][22] == 1) 
            {
                Richi_1.style.visibility = "visible";
                Richi_2.style.visibility = "visible";
                dora[9 + i].style.backgroundImage = randomWhite[0];
                doraList[9 + i].src = whiteTiles[conversor(hand[contagem][23 + i])];
            }
            else 
            {
                dora[9 + i].style.backgroundImage = randomWhite[1];
                Richi_1.style.visibility = "hidden";
                Richi_2.style.visibility = "hidden";
            }
        }
    }

    //Peça de agari
    const agari = document.querySelector("#Tile_14");
    if (targetTheme === "BL") 
    {
        agari.src = blackTiles[conversor(hand[contagem][16])];
    }
    else if (targetTheme === "WT") 
    {
        agari.src = whiteTiles[conversor(hand[contagem][16])];
    }

    document.documentElement.setAttribute('data-theme', targetTheme)
    localStorage.setItem('theme', targetTheme);
};

//////////
// Yaku //
//////////
define.addEventListener("click", () => 
{
    document.querySelector("#verificacao").style.display = "flex";
    document.querySelector("#Div_18").style.display = "flex";
    document.querySelector("#Div_21").style.display = "none";
    respota_original.style.display = "none";
    resposta.innerHTML = "";

    if (trava == 1) 
    {
        contagem++;
        if (contagem > 4) 
        {
            contagem = 0;
        }
    }
    trava = 1;

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
    
    

    //Altera as cores das peças normais
    const nodeList = document.querySelectorAll(".tiles");
    const tileList = document.querySelectorAll(".tiles_default");
    for (let i = 0; i < tileList.length; i++) 
    {
        if (currentTheme === "BL") 
        {
            nodeList[i].style.backgroundImage = randomBlack[0];
            tileList[i].src = blackTiles[conversor(hand[contagem][i])];
        }
        else if (currentTheme === "WT") 
        {
            nodeList[i].style.backgroundImage = randomWhite[0];
            tileList[i].src = whiteTiles[conversor(hand[contagem][i])];
        }
    }

    nodeList[15].style.transition = "all 0.5s";

    
    if (currentTheme === "BL") 
    {
        //Define o src black
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

        //Define as doras
        const dora = document.querySelectorAll(".dora");
        const doraList = document.querySelectorAll(".dora_default");
        
        for (let i = 0; i < 4; i++) 
        {
            dora[2 + i].style.backgroundImage = randomBlack[1];
            doraList[2 + i].src = "";
            dora[9 + i].style.backgroundImage = randomBlack[1];
            doraList[9 + i].src = "";
        }

        for (let i = 0; i < hand[contagem][17]; i++) 
        {
            dora[2 + i].style.backgroundImage = randomBlack[0];
            doraList[2 + i].src = blackTiles[conversor(hand[contagem][18 + i])];
            if (hand[contagem][22] == 1) 
            {
                Richi_1.style.visibility = "visible";
                Richi_2.style.visibility = "visible";
                dora[9 + i].style.backgroundImage = randomBlack[0];
                doraList[9 + i].src = blackTiles[conversor(hand[contagem][23 + i])];
            }
            else 
            {
                dora[9 + i].style.backgroundImage = randomBlack[0];
                Richi_1.style.visibility = "hidden";
                Richi_2.style.visibility = "hidden";
            }
        }

        //Tsumo/Ron
        if (hand[contagem][15] == 0) 
        {
            Text_4.innerHTML = "ロ<br>ン";
            nodeList[15].style.rotate = "90deg";
        }
        else 
        {
            Text_4.innerHTML = "ツ<br>モ";
            nodeList[15].style.rotate = "0deg";
        }
    }

    
    else if (currentTheme === "WT") 
    {
        //Define o src white
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
        const doraList = document.querySelectorAll(".dora_default");

        for (let i = 0; i < 4; i++) 
        {
            dora[2 + i].style.backgroundImage = randomWhite[1];
            doraList[2 + i].src = "";
            dora[9 + i].style.backgroundImage = randomWhite[1];
            doraList[9 + i].src = "";
        }

        for (let i = 0; i < hand[contagem][17]; i++) 
        {
            dora[2 + i].style.backgroundImage = randomWhite[0];
            doraList[2 + i].src = whiteTiles[conversor(hand[contagem][18 + i])];
            if (hand[contagem][22] == 1) 
            {
                Richi_1.style.visibility = "visible";
                Richi_2.style.visibility = "visible";
                dora[9 + i].style.backgroundImage = randomWhite[0];
                doraList[9 + i].src = whiteTiles[conversor(hand[contagem][23 + i])];
            }
            else 
            {
                dora[9 + i].style.backgroundImage = randomWhite[1];
                Richi_1.style.visibility = "hidden";
                Richi_2.style.visibility = "hidden";
            }

            //Tsumo/Ron
            if (hand[contagem][15] == 0) 
            {
                Text_4.innerHTML = "ロ<br>ン";
                nodeList[15].style.rotate = "90deg";
            }
            else 
            {
                Text_4.innerHTML = "ツ<br>モ";
                nodeList[15].style.rotate = "0deg";
            }
        } 
    }
});

/////////////////
// Verificação //
/////////////////
var verificacao = document.querySelector("#verificacao");
verificacao.addEventListener("click", () => 
{
    resposta.style.display = "flex";
    respota_original.style.display = "flex";

    let mao = [];
    let yakusfeitos = 0;
    var dorasuu = document.querySelector('#input_dora').value;
    var yakuhai = document.querySelector('#yakuhai');
    var menzentsumo = document.querySelector('#menzentsumo');
    var riichi = document.querySelector('#riichi');
    var pinfu = document.querySelector('#pinfu');
    var tanyao = document.querySelector('#tanyao');
    var iipeikou = document.querySelector('#iipeikou');
    var sanshoku = document.querySelector('#sanshoku');
    var ittsuu = document.querySelector('#ittsuu');
    var toitoi = document.querySelector('#toitoi');
    var chiitoitsu = document.querySelector('#chiitoitsu');
    var chanta = document.querySelector('#chanta');
    var sanankou = document.querySelector('#sanankou');
    var honroutou = document.querySelector('#honroutou');
    var sankantsu = document.querySelector('#sankantsu');
    var shousangen = document.querySelector('#shousangen');
    var sanshokudoukou = document.querySelector('#sanshokudoukou');
    var honitsu = document.querySelector('#honitsu');
    var ryanpeikou = document.querySelector('#ryanpeikou');
    var jyunchan = document.querySelector('#jyunchan');
    var chinitsu = document.querySelector('#chinitsu');
    var kokushimusou = document.querySelector('#kokushimusou');
    var suuankou = document.querySelector('#suuankou');
    var daisangen = document.querySelector('#daisangen');
    var tsuuiisou = document.querySelector('#tsuuiisou');
    var ryuuiisou = document.querySelector('#ryuuiisou');
    var suushiihou = document.querySelector('#suushiihou');
    var chuurennpoutou = document.querySelector('#chuurennpoutou');
    var chinnroutou = document.querySelector('#chinnroutou');
    if (yakuhai.checked) 
    {
        mao.push("役牌「やくはい」");
        yakusfeitos++;
    }
    if (menzentsumo.checked) 
    {
        mao.push("門前清自模和「メンゼンツモ」");
        yakusfeitos++;
    }
    if (riichi.checked) 
    {
        mao.push("立直「リーチ」");
        yakusfeitos++;
    }
    if (pinfu.checked) 
    {
        mao.push("平和「ピンフ」");
        yakusfeitos++;
    }
    if (tanyao.checked) 
    {
        mao.push("断么九「タンヤオ」");
        yakusfeitos++;
    }
    if (iipeikou.checked) 
    {
        mao.push("一盃口「イーペーコー」");
        yakusfeitos++;
    }
    if (sanshoku.checked) 
    {
        mao.push("三色同順「サンショク」");
        yakusfeitos++;
    }
    if (ittsuu.checked)
    {
        mao.push("一気通貫「イッツウ」");
        yakusfeitos++;
    }
    if (toitoi.checked) 
    {
        mao.push("対々和「トイトイ」");
        yakusfeitos++;
    }
    if (chiitoitsu.checked) 
    {
        mao.push("七対子「チートイツ」");
        yakusfeitos++;
    }
    if (chanta.checked) 
    {
        mao.push("混全帯么九「チャンタ」");
        yakusfeitos++;
    }
    if (sanankou.checked) 
    {
        mao.push("三暗刻「サンアンコー」");
        yakusfeitos++;
    }
    if (honroutou.checked) 
    {
        mao.push("混老頭「ホンロートー」");
        yakusfeitos++;
    }
    if (sankantsu.checked) 
    {
        mao.push("三槓子「サンカンツ」");
        yakusfeitos++;
    }
    if (shousangen.checked) 
    {
        mao.push("小三元「ショウサンゲン」");
        yakusfeitos++;
    }
    if (sanshokudoukou.checked) 
    {
        mao.push("三色同刻「サンショクドーコー」");
        yakusfeitos++;
    }
    if (honitsu.checked) 
    {
        mao.push("混一色「ホンイツ」");
        yakusfeitos++;
    }
    if (ryanpeikou.checked) 
    {
        mao.push("二盃口「リャンペーコー」");
        yakusfeitos++;
    }
    if (jyunchan.checked) 
    {
        mao.push("純全帯么九「ジュンチャン」");
        yakusfeitos++;
    }
    if (chinitsu.checked) 
    {
        mao.push("清一色「チンイツ」");
        yakusfeitos++;
    }
    if (kokushimusou.checked) 
    {
        mao.push("国士無双「コクシムソウ」");
        yakusfeitos++;
    }
    if (suuankou.checked) 
    {
        mao.push("四暗刻「スーアンコー」");
        yakusfeitos++;
    }
    if (daisangen.checked) 
    {
        mao.push("大三元「ダイサンゲン」");
        yakusfeitos++;
    }
    if (tsuuiisou.checked) 
    {
        mao.push("字一色「ツーイーソー」");
        yakusfeitos++;
    }
    if (ryuuiisou.checked) 
    {
        mao.push("緑一色「リューイーソー」");
        yakusfeitos++;
    }
    if (suushiihou.checked) 
    {
        mao.push("四喜和「スーシーホー」");
        yakusfeitos++;
    }
    if (chuurennpoutou.checked) 
    {
        mao.push("九蓮宝燈「チューレンポートー」");
        yakusfeitos++;
    }
    if (chinnroutou.checked) 
    {
        mao.push("清老頭「チンロートー」");
        yakusfeitos++;
    }

    resposta.innerHTML = "・自分の答え・";
    resposta.innerHTML += "<br>";
    if(dora_suu[0][dorasuu] == dora_suu[0][hand_yaku[contagem][0]])
    {
        adicionarDora(resposta, dora_suu[0][dorasuu], "certo");
    }
    else
    {
        adicionarDora(resposta, dora_suu[0][dorasuu], "errado");   
    }
    for (var i = 0; i < mao.length; i++) 
    {
        if (mao[i] === hand_yaku[contagem][i + 1]) 
        {
            adicionarElemento(resposta, mao[i], "certo");
        }
        else
        {
            adicionarElemento(resposta, mao[i], "errado");
        }
    }

    respota_original.innerHTML = "・正しい答え・";
    respota_original.innerHTML += "<br>";
    respota_original.innerHTML += "ドラ数：";
    respota_original.innerHTML += dora_suu[0][hand_yaku[contagem][0]];
    respota_original.innerHTML += "<br>";
    for (var i = 0; i < (hand_yaku[contagem].length - 1); i++) 
    {
        for(var x = 0; x < verif_yaku.length; x ++)
        {
            if(hand_yaku[contagem][i + 1] == verif_yaku[x])
            {
                if(x >= 0 && x <= 6)
                {
                    adicionarElemento(respota_original, hand_yaku[contagem][i + 1], "ichihan");
                }
                else if (x >= 7 && x <= 15)
                {
                    adicionarElemento(respota_original, hand_yaku[contagem][i + 1], "nihan");
                }
                else if (x >= 16 && x <= 18)
                {
                    adicionarElemento(respota_original, hand_yaku[contagem][i + 1], "sanhan");
                }
                else if (x == 19)
                {
                    adicionarElemento(respota_original, hand_yaku[contagem][i + 1], "rokuhan");
                }
                else
                {
                    adicionarElemento(respota_original, hand_yaku[contagem][i + 1], "yakuman");
                }
            }
        }
    }
    document.querySelector("#verificacao").style.display = "none";
    document.querySelector("#Div_18").style.display = "none";
    yakuhai.checked = menzentsumo.checked = riichi.checked = pinfu.checked = tanyao.checked = iipeikou.checked = sanshoku.checked = ittsuu.checked = toitoi.checked = chiitoitsu.checked = chanta.checked = sanankou.checked = honroutou.checked = sankantsu.checked = shousangen.checked = sanshokudoukou.checked = honitsu.checked = ryanpeikou.checked = jyunchan.checked = chinitsu.checked = kokushimusou.checked = suuankou.checked = daisangen.checked = tsuuiisou.checked = ryuuiisou.checked = suushiihou.checked = chuurennpoutou.checked = chinnroutou.checked = false;
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

function adicionarElemento(field, mao, cor) 
{
    var novoElemento = document.createElement("p");
    novoElemento.innerHTML = mao;
    novoElemento.innerHTML += "<br>";
    novoElemento.classList.add(cor);
    field.appendChild(novoElemento);
}

function adicionarDora(field, mao, cor) 
{
    var novoElemento = document.createElement("p");
    novoElemento.innerHTML = "ドラ数：";
    novoElemento.innerHTML += mao;
    novoElemento.innerHTML += "<br>";
    novoElemento.classList.add(cor);
    field.appendChild(novoElemento);
}