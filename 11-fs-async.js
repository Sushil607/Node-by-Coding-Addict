// File System Module Asyncronous

const { readFile , writeFile } = require('fs');

console.log('starting...');


// Read from first file
readFile('./content/first.txt', 'utf8' , (err,result) => {
    if(err){
        console.log(err);
        return;
    }

    const first = result;

    // Read from second file
    readFile('./content/second.txt', 'utf8' , (err,result) => {
        if(err){
            console.log(err);
            return;
        }

        const second = result;

        // Write in third file
        writeFile('./content/result-async.txt',
        `Here is the result of asyncronous fs module : ${first} ${second}`
        , (err,result) => {
            if(err){
                console.log(err);
                return;
            }
            else{
                console.log('done with this task...');
            }
        })

    })
})

console.log('starting the new task...');
