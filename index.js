const fs = require('fs');

 module.exports.readFile = function (fileName){
    fs.readFile(fileName, (err, data) => {
        if(err){
            return console.log('Error while reading file\n'+err);
        }
        console.log(data.toString())
    })
}

module.exports.createAndWriteFile = function (filename, content){
    fs.writeFile('./' + filename, content , (err)=>{
        if(err){
            return console.log(err);
        }
        console.log(`${filename} has been created` );
    });
    
}
