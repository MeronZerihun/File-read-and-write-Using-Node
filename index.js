const fs = require('fs');

module.exports = function readFile(fileName){
    fs.readFile(fileName, (err, data) => {
        if(err){
            return console.log('Error while reading file\n'+err);
        }
        console.log(data)
    })
}
module.exports = function createAndWriteFile(filename, content){
    fs.writeFile('./' + filename, content , (err)=>{
        if(err){
            return console.log(err);
        }
        console.log(`${filename} has been created` );
    });
    
}
