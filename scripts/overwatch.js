const heroFeature = document.querySelector('.hero');
const heroImg = document.getElementById('heroImg');
const heroTitle = document.querySelector('.hero .txtTitleDiv');
const heroPara = document.querySelector('.hero .txtParaDiv');
const allBtns = document.querySelectorAll('.feaBtns > img');
const mapImg = document.getElementById('mapImg');
const mapTitle = document.querySelector('.secondTitle');
const mapPara = document.querySelector('.secondPara');

const hero = {
    current: 0,
    imgDOM: heroImg,
    titleDOM: heroTitle,
    paraDOM: heroPara,
    titles: ["TANK", "DAMAGE", "SUPPORT"],
    paras: ["Tank heroes soak up damage and shatter fortified positions, like closely grouped enemies and narrow chokepoints. If you’re a tank, you lead the charge.",
            "Damage heroes seek out, engage, and obliterate the enemy with wide-ranging tools, abilities, and play styles. Fearsome but fragile, these heroes require backup to survive.",
            "Support heroes empower their allies by healing, shielding, boosting damage, and disabling foes. As a support, you're the backbone of your team's survival."],
    images: ["./media/overwatch/tank.webp", "./media/overwatch/damage.webp", "./media/overwatch/support.webp"]
}
const map = {
    current: 0,
    imgDOM: mapImg,
    titleDOM: mapTitle,
    paraDOM: mapPara,
    titles: ["PUSH", "CONTROL", "ESCORT", "HYBRID", "CAPTURE THE FLAG", "ELIMINATION", "DEATHMATCH", "TEAM DEATHMATCH"],
    paras: ["Teams battle to take control of a robot and push it toward the enemy base.",
            "Teams fight to hold a single objective. The first team to win two rounds wins the map.",
            "One team escorts a payload to its delivery point, while the other races to stop them.",
            "Attackers capture a payload, then escort it to its destination; defenders try to hold them back.",
            "Teams compete to capture the enemy team’s flag while defending their own.",
            "Dispatch all enemies to win the round. Win three rounds to claim victory. Available with teams of one, three, or six.",
            "Race to reach 20 points first by racking up kills in a free-for-all format.",
            "Team up and triumph over your enemies by scoring the most kills."],
    images: ["./media/overwatch/Toronto_Push.jpg", "./media/overwatch/Oasis_Control.jpg", "./media/overwatch/Monte_Carlo_Escort.jpg", "./media/overwatch/Rio_de_Janeiro_Hybrid.jpeg", 
            "./media/overwatch/Lijang_Tower_Capture_the_Flag.jpg", "./media/overwatch/Black_Forest_Elimination.jpg", "./media/overwatch/Eichenwalde_Deathmatch.png", "./media/overwatch/Kanezaka_Team_Deathmatch.jpg", ]
}

function setContent(feature){
    feature.titleDOM.textContent = feature.titles[feature.current];
    feature.paraDOM.textContent = feature.paras[feature.current];
    feature.imgDOM.src = feature.images[feature.current];
    allBtns.forEach(function(btn){
        if(feature.current == btn.id){
            btn.classList.add('active');
        }else{
            btn.classList.remove('active');
        }
    })
}

allBtns.forEach(function(btn){
    btn.addEventListener('click', function(){
        if(btn.parentElement.classList.contains('heroBtns')){
            feature = hero;
        }else{
            feature = map;
        }
        feature.current = btn.id;
        setContent(feature);
    })
})

function setDefaultContents(){
    setContent(hero);
    setContent(map);
}

setDefaultContents();