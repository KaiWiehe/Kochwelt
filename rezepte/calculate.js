function calculate() {
    let personenzahl = +document.getElementById('inputfield').value;
    let calculate = personenzahl * 12;
    document.getElementById('1').innerHTML = `${calculate}g`;

    let calculate2 = personenzahl * 125;
    document.getElementById('2').innerHTML = `${calculate2}g`;

    let calculate3 = personenzahl * 50;
    document.getElementById('3').innerHTML = `${calculate3}g`;

    let calculate4 = personenzahl * 500;
    document.getElementById('4').innerHTML = `${calculate4}g`;

    let calculate5 = personenzahl * 25;
    document.getElementById('5').innerHTML = `${calculate5}g`;

    let calculate6 = personenzahl * 250;
    document.getElementById('6').innerHTML = `${calculate6}g`;

    let calculate7 = personenzahl * 200;
    document.getElementById('7').innerHTML = `${calculate7}g`;

    let calculate8 = personenzahl * 40;
    document.getElementById('8').innerHTML = `${calculate8}g`;
}