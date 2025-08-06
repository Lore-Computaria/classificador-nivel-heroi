let nomeHeroi = prompt("Digite o nome do herói:");
let heroiXP = parseInt(prompt("Digite a quantidade de XP do herói:"));
let nivel = "";

if (heroiXP < 1000) {
    nivel = "Ferro";
} else if (heroiXP < 2000) {
    nivel = "Bronze";
} else if (heroiXP < 5000) {
    nivel = "Prata";
} else if (heroiXP < 7000) {
    nivel = "Ouro";
} else if (heroiXP < 8000) {
    nivel = "Platina";
} else if (heroiXP < 9000) {
    nivel = "Ascendente";
} else if (heroiXP < 10001) {
    nivel = "Imortal";
} else {
    nivel = "Radiante";
}

console.log("O Herói de nome " + nomeHeroi + " está no nível de " + nivel);