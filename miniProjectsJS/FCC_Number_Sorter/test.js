///// GRAB HTML ELEMENT AND REDFINE AS JS VARIBLES IN ORDER TO USE IN FUNCTIONS
const main = document.querySelector('body')
const sortBtn = document.getElementById('sort')
const outputArray = document.getElementById('output-array')


/*//////// FUNCTION: PREVENT SUBMISSION, MAPS OUT INPUT VALUES ADDING THEM TO AN ARRAY OF INTEGERS TO BE USED IN A SORTING FUNCTION
AS WELL AS A FUNCTION FOR UPDATING THE UI OUTPUT VISUAL CONFIMRATION *//////////
const sortInputArray = (event) => {
    event.preventDefault


    const inputValues = [...document.getElementsByClassName('values-dropdown')]
    .map((dropdown) => Number(dropdown.value))


    const sortedValues = bubbleSort(inputValues)


    updateUI(sortedValues)

}

/*/////////// *//////////////////
    const updateUI = (array = []) => {
        array.forEach((num, i) => {
        const outputValueNode = document.getElementById(`output-value-${i}`) 
        outputValueNode.innerText = num
        })
    }




const bubbleSort = (array) => {
    for (let i=0; i < array.length; i++) {
        for (let j=0; j < array.length-1; j++) {
            if (array[j] > array[j+1] ) {
                const temp = array[j]
                array[j] = array[j+1]
                array[j+1] = temp
        }
    }
}
return array
}

/*/// FUNCTION: SORTS NUMBER BASED ON SEQUENTIAL COMPARISON. SETS A MINIMUM THRESHOLD. IF THE NEXT
IF NEXT INTEGER IS SMALLER THAN THE COMPARITOR, IT IS PLACED IN POSITION OF THE COMPARITOR *//////
const selectionSort = (array) => {
    for (let i = 0; i < array.length; i++) {
      let minIndex = i;
  
      for (let j = i + 1; j < array.length; j++) {
        console.log(array, array[j], array[minIndex])
        if (array[j] < array[minIndex]) {
          minIndex = j;
        }
      }
    }
  }




sortBtn.addEventListener('click', sortInputArray)

