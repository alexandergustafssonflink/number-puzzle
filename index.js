let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 0]

 function shuffleNumbers(array) {
    let j, x, i;
    for (i = array.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = array[i];
        array[i] = array[j];
        array[j] = x;
    }
    return array;
 }

const restartButton = document.querySelector('.restart');

numbers = shuffleNumbers(numbers);

let numberDivs = document.querySelectorAll(".numberDiv")
    
 numbers.map((number, i) => {
     numberDivs[i].innerText = number

 }) 

let indexOfNull = numbers.indexOf(0) 
 restartButton.addEventListener("click", () => {
    let newNumbers = shuffleNumbers(numbers)
    newNumbers.map((number, i) => {
        numberDivs[i].innerText = number
 })
 })

numberDivs.forEach((numberDiv) => {
    if (numberDiv.innerText == 0) {
        numberDiv.classList.add("null")
    }
    numberDiv.addEventListener("click", () => {
    
     
        let clickedNumber = parseInt(numberDiv.innerText)
        let indexOfClickedNumber = numbers.indexOf(clickedNumber) ;
        let rowOfNull = checkRowOfNumber(indexOfNull);
        let columnOfNull = checkColumnOfNumber(indexOfNull);

        let rowOfClickedNumber = checkRowOfNumber(indexOfClickedNumber)
        let columnOfClickedNumber = checkColumnOfNumber(indexOfClickedNumber)

        let sameRow = checkIfClickedNumberAndNullHasSameRow(rowOfClickedNumber, rowOfNull)
        let sameColumn = checkIfClickedNumberAndNullHasSameColumn(columnOfClickedNumber, columnOfNull)
    if (sameRow) {
        let newNumbers =  moveNumbersInRow(numbers, indexOfClickedNumber)
        indexOfNull = newNumbers.indexOf(0); 
        newNumbers.map((number, i) => {
        numberDivs[i].innerText = number
 }) 
 }

   if (sameColumn) {
        let newNumbers =  moveNumbersInColumn(numbers, indexOfClickedNumber)
        indexOfNull = newNumbers.indexOf(0); 
        newNumbers.map((number, i) => {
        numberDivs[i].innerText = number
 }) 
 }
    numberDivs.forEach((numberDiv) => {
        if(numberDiv.innerText == 0) {
            numberDiv.classList.add('null')
        } else {
            numberDiv.classList.remove('null')
        }
    })
    checkForWin(numbers)
    })
})


function moveNumbersInRow (numbers, indexOfClickedNumber) {
   let a = numbers[indexOfClickedNumber];
   let b = numbers[indexOfNull]; 

  if (indexOfClickedNumber > indexOfNull) {
    let amountOfNumbersToSwitch = indexOfClickedNumber - indexOfNull; 

        if (amountOfNumbersToSwitch == 1) {
            let a = numbers[indexOfClickedNumber];
            let b = numbers[indexOfNull]; 
            numbers[indexOfNull] = a
            numbers[indexOfClickedNumber] = b; 

        } else if (amountOfNumbersToSwitch == 2) {
                let a = numbers[indexOfClickedNumber];
                let b = numbers[(indexOfClickedNumber - 1)] 
                let c = numbers[indexOfNull]; 
                
                numbers[indexOfNull] = b;
                numbers[(indexOfClickedNumber - 1)] = a; 
                numbers[indexOfClickedNumber] = 0; 
         } 
        else if (amountOfNumbersToSwitch == 3) {
                let a = numbers[indexOfClickedNumber];
                let b = numbers[(indexOfClickedNumber - 1)] 
                let c = numbers[(indexOfClickedNumber - 2)] 
                let d = numbers[indexOfNull]; 
                
                numbers[indexOfNull] = c;
                numbers[(indexOfClickedNumber - 2)] = b; 
                numbers[(indexOfClickedNumber - 1)] = a; 
                numbers[indexOfClickedNumber] = 0; 
        } 
       else if (amountOfNumbersToSwitch == 4) {
                let a = numbers[indexOfClickedNumber];
                let b = numbers[(indexOfClickedNumber - 1)] 
                let c = numbers[(indexOfClickedNumber - 2)] 
                let d = numbers[(indexOfClickedNumber - 3)] 
                let e = numbers[indexOfNull]; 
                
                numbers[indexOfNull] = d;
                numbers[(indexOfClickedNumber - 3)] = c; 
                numbers[(indexOfClickedNumber - 2)] = b; 
                numbers[(indexOfClickedNumber - 1)] = a; 
                numbers[indexOfClickedNumber] = 0; 
         }

  } 
  else {
    let amountOfNumbersToSwitch = indexOfNull - indexOfClickedNumber; 
     if (amountOfNumbersToSwitch == 1) {
            let a = numbers[indexOfClickedNumber];
            let b = numbers[indexOfNull]; 
            numbers[indexOfNull] = a
            numbers[indexOfClickedNumber] = b; 

        } else if (amountOfNumbersToSwitch == 2) {
                let a = numbers[indexOfClickedNumber];
                let b = numbers[(indexOfClickedNumber + 1)] 
                let c = numbers[indexOfNull]; 
                
                numbers[indexOfNull] = b;
                numbers[(indexOfClickedNumber + 1)] = a; 
                numbers[indexOfClickedNumber] = 0; 
         } 
        else if (amountOfNumbersToSwitch == 3) {
                let a = numbers[indexOfClickedNumber];
                let b = numbers[(indexOfClickedNumber + 1)] 
                let c = numbers[(indexOfClickedNumber + 2)] 
                let d = numbers[indexOfNull]; 
                
                numbers[indexOfNull] = c;
                numbers[(indexOfClickedNumber + 2)] = b; 
                numbers[(indexOfClickedNumber + 1)] = a; 
                numbers[indexOfClickedNumber] = 0; 
        } 
       else if (amountOfNumbersToSwitch == 4) {
                let a = numbers[indexOfClickedNumber];
                let b = numbers[(indexOfClickedNumber + 1)] 
                let c = numbers[(indexOfClickedNumber + 2)] 
                let d = numbers[(indexOfClickedNumber + 3)] 
                let e = numbers[indexOfNull]; 
                
                numbers[indexOfNull] = d;
                numbers[(indexOfClickedNumber + 3)] = c; 
                numbers[(indexOfClickedNumber + 2)] = b; 
                numbers[(indexOfClickedNumber + 1)] = a; 
                numbers[indexOfClickedNumber] = 0; 
         } 

  }
    return numbers; 
}

function moveNumbersInColumn (numbers, indexOfClickedNumber) {
   let a = numbers[indexOfClickedNumber];
   let b = numbers[indexOfNull]; 
    if (indexOfClickedNumber > indexOfNull) {
        let amountOfStepsToMake = (indexOfClickedNumber - indexOfNull) / 5 ; 
       if (amountOfStepsToMake == 1) {
            let a = numbers[indexOfClickedNumber];
            let b = numbers[indexOfNull]; 
            numbers[indexOfNull] = a
            numbers[indexOfClickedNumber] = b; 

        } else if (amountOfStepsToMake == 2) {
                let a = numbers[indexOfClickedNumber];
                let b = numbers[(indexOfClickedNumber) - 5] 
                let c = numbers[indexOfNull]; 
    
                numbers[indexOfNull] = b;
                numbers[(indexOfClickedNumber - 5)] = a; 
                numbers[indexOfClickedNumber] = 0; 
         } 
    } else {
        let amountOfStepsToMake = (indexOfNull - indexOfClickedNumber) / 5 ; 
          if (amountOfStepsToMake == 1) {
            let a = numbers[indexOfClickedNumber];
            let b = numbers[indexOfNull]; 
            numbers[indexOfNull] = a
            numbers[indexOfClickedNumber] = b; 

        } else if (amountOfStepsToMake == 2) {
                let a = numbers[indexOfClickedNumber];
                let b = numbers[(indexOfClickedNumber) + 5] 
                let c = numbers[indexOfNull]; 
    
                numbers[indexOfNull] = b;
                numbers[(indexOfClickedNumber + 5)] = a; 
                numbers[indexOfClickedNumber] = 0; 
         } 
    }
return numbers; 
} 

function checkForWin(numbers) {
    numbersAsString = numbers.join(''); 
    let winningNumbers = '12345678910111213140'; 
   
    if (numbersAsString === winningNumbers) {
        window.alert("YOU WIN!")
        shuffleNumbers(numbers) 
    } else {
       return; 
    }
}
 
function checkIfClickedNumberAndNullHasSameRow (rowOfClickedNumber, rowOfNull) {
    if (rowOfClickedNumber == rowOfNull) {
        return true; 
    } else {
        return false; 
    }
}

function checkIfClickedNumberAndNullHasSameColumn (columnOfClickedNumber, columnOfNull) {
    if (columnOfClickedNumber == columnOfNull) {
        return true; 
    } else {
        return false; 
    }
}


function checkRowOfNumber (number) {
    if (number >= 0 && number <= 4) {
        return 1; 
    } else if (number >=5 && number < 10) {
        return 2; 
    } else if (number >=10 && number < 15) {
        return 3; 
    }
}

function checkColumnOfNumber (n) {
        if (n == 0 || n == 5 || n == 10 ) {
        return 1; 
    } else if (n == 1 || n == 6 || n == 11 ) {
        return 2; 
    } else if (n == 2 || n == 7 || n == 12 ) {
        return 3; 
    } else if (n == 3 || n == 8 || n == 13  ) {
        return 4
    } else if (n == 4 || n == 9 || n == 14  ) {
        return 5
    }
}