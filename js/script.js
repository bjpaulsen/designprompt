let button_newPrompt = document.getElementById("newPrompt");
let button_cardType = document.getElementById("random-cardType");
let dropdown_cardType = document.getElementById("cardType");
let button_minionType = document.getElementById("random-minionType");
let dropdown_minionType = document.getElementById("minionType");
let button_spellSchool = document.getElementById("random-spellSchool");
let dropdown_spellSchool = document.getElementById("spellSchool");
let button_mechanic = document.getElementById("random-mechanic");
let dropdown_mechanic = document.getElementById("mechanic");
let button_twist = document.getElementById("random-twist");
let dropdown_twist = document.getElementById("twist");
let button_inspiration = document.getElementById("random-inspiration");
let output_inspiration = document.getElementById("inspiration");
let a_inspiration = document.getElementById("a-inspiration");

// HIDE BUTTONS
let subType_hidden = false;
let cardType_hidden = false;
let mechanic_hidden = false;
let inspiration_hidden = false;
let twist_hidden = false;

let hide_cardType = document.getElementById("hide-cardType");
let hide_minionType = document.getElementById("hide-minionType");
let hide_spellSchool = document.getElementById("hide-spellSchool");
let hide_mechanic = document.getElementById("hide-mechanic");
let hide_inspiration = document.getElementById("hide-inspiration");
let hide_twist = document.getElementById("hide-twist");

let show_subType = document.getElementById("show-subType");
let show_cardType = document.getElementById("show-cardType");
let show_mechanic = document.getElementById("show-mechanic");
let show_inspiration = document.getElementById("show-inspiration");
let show_twist = document.getElementById("show-twist");


// SCRIPT

onPageLoad();

function onPageLoad() {
    newPrompt();
    showAllConstraints();
}

function showAllConstraints() {
    showCardType();
    showSubType();
    showMechanic();
    showInspiration();
    showTwist();
}

button_newPrompt.addEventListener("click", newPrompt);
function newPrompt() {
    randomCardType();
    randomMechanic();
    randomInspiration();
    randomTwist();
}

button_cardType.addEventListener("click", randomCardType);
dropdown_cardType.addEventListener("change", updateCardType);
function updateCardType() {
    document.getElementById("constraint-minionType").style.display = "none";
    document.getElementById("constraint-spellSchool").style.display = "none";
    if (dropdown_cardType.selectedIndex === 0 && !subType_hidden) { // show minion type constraint
        randomMinionType();
        document.getElementById("constraint-minionType").style.display = "flex";
    }
    else if (dropdown_cardType.selectedIndex === 1 && !subType_hidden) { // show spell school constraint
        randomSpellSchool();
        document.getElementById("constraint-spellSchool").style.display = "flex";
    }
}
function randomCardType() {
    let randomIndex;
    do {
        randomIndex = Math.floor(Math.random() * dropdown_cardType.length);
    } while (randomIndex === dropdown_cardType.selectedIndex)
    dropdown_cardType.selectedIndex = randomIndex;

    updateCardType();
}

button_minionType.addEventListener("click", randomMinionType);
function randomMinionType() {
    let randomIndex;
    do {
        randomIndex = Math.floor(Math.random() * dropdown_minionType.length);
    } while (randomIndex === dropdown_minionType.selectedIndex)
    dropdown_minionType.selectedIndex = randomIndex;
}

button_spellSchool.addEventListener("click", randomSpellSchool);
function randomSpellSchool() {
    let randomIndex;
    do {
        randomIndex = Math.floor(Math.random() * dropdown_spellSchool.length);
    } while (randomIndex === dropdown_spellSchool.selectedIndex)
    dropdown_spellSchool.selectedIndex = randomIndex;
}

button_mechanic.addEventListener("click", randomMechanic);
function randomMechanic() {
    let randomIndex;
    do {
        randomIndex = Math.floor(Math.random() * dropdown_mechanic.length);
    } while (randomIndex === dropdown_mechanic.selectedIndex)
    dropdown_mechanic.selectedIndex = randomIndex;
}

button_inspiration.addEventListener("click", randomInspiration);
function randomInspiration() {
    let randomIndex;
    do {
        randomIndex = Math.floor(Math.random() * cards.length);
    } while (cards[randomIndex] === output_inspiration.textContent)
    output_inspiration.textContent = cards[randomIndex];
    a_inspiration.href = "https://hearthstone.wiki.gg/wiki/" + cards[randomIndex];
}

button_twist.addEventListener("click", randomTwist);
function randomTwist() {
    let randomIndex;
    do {
        randomIndex = Math.floor(Math.random() * dropdown_twist.length);
    } while (randomIndex === dropdown_twist.selectedIndex)
    dropdown_twist.selectedIndex = randomIndex;
}

// HIDE BUTTONS

// cardType
hide_cardType.addEventListener("click", hideCardType);
function hideCardType() {
    document.getElementById("constraint-cardType").style.display = "none";

    document.getElementById("show-cardType").style.display = "flex";

    cardType_hidden = true;

    // hideSubType();
}

show_cardType.addEventListener("click", showCardType);
function showCardType() {
    document.getElementById("show-cardType").style.display = "none";

    document.getElementById("constraint-cardType").style.display = "flex";

    cardType_hidden = false;

    // if (subType_hidden)
    //     showSubType();
}

// subType
hide_spellSchool.addEventListener("click", hideSubType);
hide_minionType.addEventListener("click", hideSubType);
function hideSubType() {
    document.getElementById("constraint-minionType").style.display = "none";
    document.getElementById("constraint-spellSchool").style.display = "none";

    document.getElementById("show-subType").style.display = "flex";

    subType_hidden = true;
}

show_subType.addEventListener("click", showSubType);
function showSubType() {
    document.getElementById("show-subType").style.display = "none";

    if (dropdown_cardType.selectedIndex === 0) // minion selected
        document.getElementById("constraint-minionType").style.display = "flex";
    if (dropdown_cardType.selectedIndex === 1) // spell selected
        document.getElementById("constraint-spellSchool").style.display = "flex";

    subType_hidden = false;

    // showCardType();
}

// mechanic
hide_mechanic.addEventListener("click", hideMechanic);
function hideMechanic() {
    document.getElementById("constraint-mechanic").style.display = "none";

    document.getElementById("show-mechanic").style.display = "flex";

    mechanic_hidden = true;
}

show_mechanic.addEventListener("click", showMechanic);
function showMechanic() {
    document.getElementById("show-mechanic").style.display = "none";

    document.getElementById("constraint-mechanic").style.display = "flex";

    mechanic_hidden = false;
}

// inspiration
hide_inspiration.addEventListener("click", hideInspiration);
function hideInspiration() {
    document.getElementById("constraint-inspiration").style.display = "none";

    document.getElementById("show-inspiration").style.display = "flex";

    inspiration_hidden = true;
}

show_inspiration.addEventListener("click", showInspiration);
function showInspiration() {
    document.getElementById("show-inspiration").style.display = "none";

    document.getElementById("constraint-inspiration").style.display = "flex";

    inspiration_hidden = false;
}

// twist
hide_twist.addEventListener("click", hideTwist);
function hideTwist() {
    document.getElementById("constraint-twist").style.display = "none";

    document.getElementById("show-twist").style.display = "flex";

    twist_hidden = true;
}

show_twist.addEventListener("click", showTwist);
function showTwist() {
    document.getElementById("show-twist").style.display = "none";

    document.getElementById("constraint-twist").style.display = "flex";

    twist_hidden = false;
}