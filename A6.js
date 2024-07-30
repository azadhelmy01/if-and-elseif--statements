document.getElementById("vowelBox").addEventListener("keyup", vowelSearch);
let outputVowels = document.getElementById("outputVowel");
function vowelSearch() {
    if (event.key == "Enter") {
        string = document.getElementById("vowelBox").value;
        string = string.toLowerCase();
        let position = 0
        let letterA = "";
        let letterE = "";
        let letterI = "";
        let letterO = "";
        let letterU = "";

        while (position < string.length) {


            if (string.charAt(position) == "a") {
                letterA = letterA + "a";



            }
            else if (string.charAt(position) == "e") {
                letterE = letterE + "e";



            }
            else if (string.charAt(position) == "i") {
                letterI = letterI + "i";




            }
            else if (string.charAt(position) == "o") {
                letterO = letterO + "o";




            }
            else if (string.charAt(position) == "u") {
                letterU = letterU + "u";



            }
            position = position + 1;

        }
        lengthOfA = letterA.length;
        lengthOfE = letterE.length;
        lengthOfI = letterI.length;
        lengthOfO = letterO.length;
        lengthofU = letterU.length;
        outputVowels.textContent = "Your string " + string + " contains " + lengthOfA + " A's and " + lengthOfI + " I's and" + lengthOfE + " E's and " + lengthOfO + " O's and " + lengthofU + " U's.";



    }
}


document.getElementById("guess").addEventListener("click", maxAndMin)
let guessOutput = document.getElementById("guessOutput")


function maxAndMin() {

    let min = Number.MAX_VALUE;
    let max = -(Number.MAX_VALUE);
    let num1;
    do {
        num1 = Number(prompt("Enter a number, press a letter to stop:"));

        if (num1 <= min) {
            min = num1;
        }

        if (max <= num1) {
            max = num1
        }



    } while (isNaN(num1) == false)

    guessOutput.textContent = "The min is:" + min + " and the max is " + max


}


let numBox1 = document.getElementById("num1")
let numBox2 = document.getElementById("num2")
let numList = document.getElementById("numList")
numBox1.addEventListener("keyup", numberList)
numBox2.addEventListener("keyup", numberList)

function numberList() {
    if (event.key == "Enter") {
        a = Number(numBox1.value)
        b = Number(numBox2.value)
        if (isNaN(a) || isNaN(b)) {
            numList.textContent = "Please enter a valid number"
        }
        else {
            if (a > b) {
                list = ""
                for (i = b; i <= a; i++) {
                    list = list + i + " "
                }
                numList.textContent = list
            }
            else if (b > a) {
                list = ""
                for (i = a; i <= b; i++) {
                    list = list + i + " "
                }
                numList.textContent = list
            }
        }
    }

}

document.getElementById("pattern").addEventListener("click", pattern)
let patternBox = document.getElementById("patternBox")
let myDiv = document.getElementById("myDiv")


function pattern() {
    let ptrn = "";
    let numP = patternBox.value;
    let str = "";
    if (numP % 2 != 0) {
        for (let y = 1; y <= numP; y++)//This helps with the rows
            {
            ptrn = ptrn + "<p>"; 
            for (let x = 1; x <= numP; x++) {

                if ((y % 2 != 0) && (x % 2 != 0)) {
                    ptrn = ptrn + "*";
                    // eg if row is 1 and if column is 1
                }
                else if ((y % 2 != 0) && (x % 2 == 0)) {
                    ptrn = ptrn + "+";
                }
                else if ((y % 2 == 0) && (x % 2 != 0)) {
                    ptrn = ptrn + "+";
                }
                else if ((y % 2 == 0) && (x % 2 == 0)) {
                    ptrn = ptrn + "*";
                }
            }
            ptrn = ptrn + "</p>";

        }
        myDiv.innerHTML = ptrn;
    }
    else if (numP % 2 == 0) {
        for (let y = 0 + 1; y <= numP; y++) {
            str = str + "<p>"
            for (let x = 0 + 1; x <= numP; x++) {
                if ((y % 2 != 0) && (x % 2 != 0)) {
                    str = str + "*";
                }
                else if ((y % 2 != 0) && (x % 2 == 0)) {
                    str = str + "+";
                }
                else if ((y % 2 == 0) && (x % 2 != 0)) {
                    str = str + "+";
                }
                else if ((y % 2 == 0) && (x % 2 == 0)) {
                    str = str + "*";
                }


            }
            str = str + "</p>"
        }
        myDiv.innerHTML = str;

    }
}


