// Getting and setting things from DOM
const allBtnDOM = document.querySelectorAll(".eachBtn"),
    fightSecondTitleDOM = document.querySelector(".fightSecondTitle"),
    fightParaDOM = document.querySelector(".fightPara"),
    fightFeaDOM = document.querySelector(".fightFea");

// Initializing contents
const fight = {
    type: "fight",
    secondTitleDOM: fightSecondTitleDOM,
    paraDOM: fightParaDOM,
    feaDOM: fightFeaDOM,
    current: 0,
    secondTitles: ["PVP ACTION", "GUILD WARFARE", "PVE BATTLES"],
    paras: ["Challenge yourself with intense, exhilarating PvP fighting with the greatest warriors in the open world of Albion. Gear up and use teamwork to send the enemy fleeing from the battlefield! Only the most skilful fighters will leave the field victorious!",
            "Conquer a piece of the vast world of Albion for yourself! Territories allow your guild to collect valuable Siphoned Energy and gather precious resources. Claim yours, then expand your empire and protect it from invaders!",
            "Monster hunting isn’t just a pastime in Albion Online. The creatures you fight provide you with the resources you’ll need to create weapons and items. Arm yourself wisely: Powerful beasts lurk in the world below, and only true heroes can best them!"],
    imgs: ["url('../media/albion/pvpFight.jpg')", "url('../media/albion/gvgFight.jpg')", "url('../media/albion/pveFight.jpg')"]
}



// Setting Contents
function setContent(feature){
    feature.secondTitleDOM.textContent = feature.secondTitles[feature.current];
    feature.paraDOM.textContent = feature.paras[feature.current];
    feature.feaDOM.style.backgroundImage = feature.imgs[feature.current];
    let currentBox = document.querySelector(`.${feature.type}Box${feature.current}`);
    currentBox.style.boxShadow = "0 0 5px 2px #fff";
}

// btn clicking to change contents
allBtnDOM.forEach(function(btn){
    btn.addEventListener('click', function(){
        console.log(btn);
    })
})

setContent(fight);
