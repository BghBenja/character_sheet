init()

function init() {
    const stats = document.getElementsByClassName("stat");
    for (const stat of stats) {
        stat.addEventListener("change", scoreModifierCalculator);
    }
    const statmods = document.getElementsByClassName("statmod")
    for (const statmod of statmods){
        statmod.addEventListener("change", kacsa)
    }
}

function scoreModifierCalculator(e) {
    const modifier = Math.floor((e.currentTarget.value / 2) - 5);
    e.currentTarget.parentElement.nextElementSibling.children[0].value = modifier;
    
}

function kacsa(e) {
    console.log(e.currentTarget.value)
}

