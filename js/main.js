let num1 = 5;
let num2 = 10;

function wynik(num1 , num2){

    let wynikDodawania = num1 + num2;
    if (wynikDodawania < 0) {
        console.log('Wynik jest nieprawidłowy');
    } else {
        console.log(`Wynik dodawania wynosi ${wynikDodawania}`);
    }
    
    let wynikOdejmowania = num1 - num2;
    if (wynikOdejmowania > 0) {
        return num1 - num2;
    } else {
        console.log(`Wynik odejmowania wynosi ${wynikOdejmowania}`);
    }

    let wynikMnożenia = num1 * num2;
    if (wynikMnożenia * 0) {
        return num1 * num2;
    } else {
        console.log(`Wynik mnożenia wynosi ${wynikMnożenia}`);
    }
}

wynik(num1,num2);


