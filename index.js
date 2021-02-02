function  writeCards(namesArray, event) {
    
    let array = []
    for ( let i = 0; i < namesArray.length; i++ ) {
        array.push(`Thank you, ${namesArray[i]}, for the wonderful ${event} gift!`)
    }
    return array

};

function countDown(n) {
    for (let count = n; count >= 0; count --) {
        console.log (count);
    }
};


