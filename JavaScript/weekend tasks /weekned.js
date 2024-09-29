//Basic Ex1.1- Yes or No
function yesOrNo(param) {
    if (param) {
        return "Yes";
    } else {
        return "No";
    }
}

console.log(yesOrNo(true));
console.log(yesOrNo(false));

//Simple Math Ex2.1- Sum of lowest numbers
function sumLowestNumbers(arr){
    if (arr.length <4) {
        return "The array should have at least 4 numbers :)";
    } 
    let low = -1;
    let lowest = -1;
    for(let i = 0; i<arr.length; i++){
        if (lowest === -1) {
            lowest = i;
        }
        else {
            if(low === -1){
                low = i;
            }
            if(arr[i]<arr[lowest]){
                low = lowest;
                lowest = i;
            } else if(arr[i]<arr[low]){
                low = i;
            }
        }
     
    }
    return arr[lowest]+arr[low];
}
console.log(sumLowestNumbers([19, 5, 42, 2, 77]));
console.log(sumLowestNumbers([10, 343445353, 3453445, 3453545353453]));


//Simple Math Ex2.3- Find the Next Perfect Square
function findNextSquare(square) {
    let root=Math.sqrt(square);
    
    if (Number.isInteger(root)){
        let nextRoot = root+1;
        return nextRoot * nextRoot;
    }
    else { return -1;
    }
    }
    
    console.log(findNextSquare(9));
