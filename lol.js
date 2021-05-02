/* let removedAnswerSlice ={} ;
let key =5

Object.assign(removedAnswerSlice,
    {
    [key] : 'aaaaa'
})
console.log(removedAnswerSlice);
key =20
Object.assign(removedAnswerSlice,
    {
    [key] : '00000'
})
console.log(removedAnswerSlice);
 */

let ques = {
    a: 5,
    b: 2,
    c: 3,
    d: 10,
    e: 0
}

const customFindLarge = (obj = {}, arr = []) => {
    let largest;
    for (const outer in obj) {

        for (const inner in obj) {
            if (!arr.includes(inner)) {
                if (obj[outer] <= obj[inner] && inner !== outer) {
                    largest = inner
                } else if (inner !== outer) {
                    largest = outer
                }
            }

        }
    }
    return largest;
}

const qesDec = [];
for (const q in ques) {
   
    qesDec.push(customFindLarge(ques, qesDec))
    //console.log(qesDec);
}

let arr = []
let keys = Object.keys(ques)
for (const key of keys) { let larKey = '';
    let lar = 0;
    let index=0;
    let whereToSlice =0

    for (const key of keys) {
        if (ques[key] >= lar) {
            larKey = key
            lar = ques[key]
            
            whereToSlice= index
        }
        index+=1;
    }
    arr.push(larKey)
    keys=keys.slice(0,whereToSlice).concat( keys.slice(whereToSlice+1,keys.length)      )}
   


console.log( 'keys' , keys ,'arr' , arr);