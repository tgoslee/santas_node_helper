const fs = require('fs') //fs stands for file system

function question(){
    fs.readFile('./input.txt', (err,data) => {
        console.time('Delivery Time')
            const directions = data.toString();
            const directionsSplit = directions.split('');
            const answer = directionsSplit.reduce((acc, value) => {
                if (value === '(') {
                    return acc = acc + 1;
                } else if (value === ')') {
                    return acc = acc - 1;
                } else if (value === '(())' || '()()') {
                    return acc = 0;
                } else if (value === '(((' || '(()(()(' || '))(((((') {
                    return acc = acc + 3;
                } else if (value === '())' || '))(') {
                    return acc = acc - 1;
                } else if (value === ')))' || ')())())') {
                    return acc = acc - 3;
                }
            }, 0)
        console.timeEnd('Delivery Time')
        console.log('Santa deliver to floor', answer)
        }
    )
}

question()
