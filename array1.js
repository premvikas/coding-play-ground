
const array = [1,3,7,9,2];
const target = 11;

//two pointer linear approach
console.log("yo wassup");

if(array.length === 0){
console.log("No items in the array");
}

for(let i=0;i<array.length - 1;i++){
    let p1 = array[i];
    console.log("🚀 ~ file: array1.js ~ line 9 ~ p1", p1)
    let differenceTobe = target-p1;
    console.log("🚀 ~ file: array1.js ~ line 11 ~ differenceTobe", differenceTobe)

    for(let j=i+1;j<array.length;j++){
        let p2 = array[j];
        if(p2 === differenceTobe){
            return [p1,p2]
        console.log("🚀 ~ file: array1.js ~ line 14 ~ differenceTobe", differenceTobe)
           
        } 
    }
}

return null;

