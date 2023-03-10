// Getting and setting things from DOM
const allBtnDOM = document.querySelectorAll(".eachBtn"),
    fightSecondTitleDOM = document.querySelector(".fightSecondTitle"),
    fightParaDOM = document.querySelector(".fightPara"),
    fightFeaDOM = document.querySelector(".fightFea"),
    characterSecondTitleDOM = document.querySelector(".characterSecondTitle"),
    characterParaDOM = document.querySelector(".characterPara"),
    characterFeaDOM = document.querySelector(".characterFea"),
    worldSecondTitleDOM = document.querySelector(".worldSecondTitle"),
    worldParaDOM = document.querySelector(".worldPara"),
    worldFeaDOM = document.querySelector(".worldFea");

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
};

const character = {
    type: "character",
    secondTitleDOM: characterSecondTitleDOM,
    paraDOM: characterParaDOM,
    feaDOM: characterFeaDOM,
    current: 0,
    secondTitles: ["DESTINY BOARD", "NO CLASSES - NO RESTRICTIONS"],
    paras: ["To create your perfect character, you need to be shown the many paths your destiny could take you. That’s where the Destiny Board comes in! The Destiny Board shows you everything you are and everything you could be, and that’s a lot! Dive in and choose your path.",
            "Forget what you know from other MMOs. There are no classes in Albion Online, which means no restrictions on what you can equip. Experiment to design and create your own perfect build - in Albion Online, you are what you wear!"],
    imgs: ["url('../media/albion/characterDestiny.jpg')", "url('../media/albion/characterClass.jpg')"]
};

const world = {
    type: "world",
    secondTitleDOM: worldSecondTitleDOM,
    paraDOM: worldParaDOM,
    feaDOM: worldFeaDOM,
    current: 0,
    secondTitles: ["DEMONS OF HELL", "THE HERETICS", "KEEPERS OF ALBION", "THE UNDEAD", "DISCIPLES OF MORGANA", "THE AVALONIANS", "ROYAL EXPEDITIONARY FORCES"],
    paras: ["From hideous, fiery nightmares comes an entirely new threat to the world of Albion: The Demons of Hell. For now, their presence is felt only dimly as they try to force their way through gates between this world and theirs, but their will to crossover is unwavering.",
            "The Heretics were corrupted heavily by the magical fallout from the Great War, and are now barely recognizable as their former selves. Crazed, they roam the world of Albion with no purpose but indiscriminate murder. Show them no mercy!",
            "Deep in the forests dwell Albion's oldest denizens, its Keepers. The native inhabitants of Albion channel its dangerous magical power from the nature around them, and are remnants of a forgotten era of peace. They will fight fiercely for their home!",
            "The fallen of Albion rarely stay dead for long… Skeletal forms of restless spirits roam in the dark, cavernous recesses of the crypts and dungeons under the earth, preying on unwitting adventurers. These husks know no mercy, and should be shown none!",
            "Once an immensely powerful sorceress, Morgana diminished after a cataclysmic battle with Merlin at the end of the Great War. However, her devoted Disciples walk the earth still, bearing her standard in the name of evil, devastation... and revenge.",
            "The Avalonians are a proud and ancient faction, formed after the dragons went to their long slumber. They learned the power of the land through trial and error, infusing their tools, beasts, and even themselves with magic.",
            "Sent from the Old World to the coasts of Albion to exploit its resources, the Royals now serve as a place of refuge for newcomers in Albion. Not out of charity, of course, but to fill the King’s coffers in the Old World."],
    imgs: ["url('../media/albion/worldDemon.jpg')","url('../media/albion/worldHeretics.jpg')","url('../media/albion/worldKeepers.jpg')","url('../media/albion/worldUndead.jpg')","url('../media/albion/worldMorgana.jpg')","url('../media/albion/worldAvalonians.jpg')","url('../media/albion/worldRoyals.jpg')",]
};

// Setting Contents
function setContent(feature){
    // change title, para, image
    feature.secondTitleDOM.textContent = feature.secondTitles[feature.current];
    feature.paraDOM.textContent = feature.paras[feature.current];
    feature.feaDOM.style.backgroundImage = feature.imgs[feature.current];

    // You cannot target pseudo-class from JS, so I am adding and removing "active" class for box shadow effect
    let currentBoxes = document.querySelectorAll(`.${feature.type}Box`);
    currentBoxes.forEach(function(currentBox){
        if(currentBox.id == feature.current){
            currentBox.classList.add('active');
        }else{
            currentBox.classList.remove('active');
        }
    })
}

// btn clicking to change contents
// first, check what feature did it clicked from
// second, left or right
// last, change content
allBtnDOM.forEach(function(btn){
    btn.addEventListener('click', function(){

        // check feature
        if(btn.parentElement.id == "fightBtns"){
            feature = fight;
        }else if(btn.parentElement.id == "characterBtns"){
            feature = character;
        }else if(btn.parentElement.id == "worldBtns"){
            feature = world;
        }

        // left or right
        if(btn.classList.contains('leftBtn')){
            if(feature.current == 0){
                feature.current = feature.imgs.length - 1;
            }else{
                feature.current--;
            }
        }else if(btn.classList.contains('rightBtn')){
            if(feature.current == feature.imgs.length - 1){
                feature.current = 0;
            }else{
                feature.current++;
            }
        }

        // change content
        setContent(feature);
    })
})

function setDefaultContents(){
    setContent(fight);
    setContent(character);
    setContent(world);
}

setDefaultContents();
