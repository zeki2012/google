let gmail = prompt('G-mailinizi yazin:');
let email = gmail.split('@');

document.getElementById('ggmail').innerHTML = `Sizin istifadechi adiniz: ${email[0]}`
document.getElementById('ggmail2').innerHTML = `Sizin domain adiniz: ${email[1]}`
