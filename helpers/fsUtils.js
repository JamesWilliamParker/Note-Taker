const fs = require("fs");
const util = require("util");
const readFromFile = util.promisify(fs.readFile);


const writeToFile = (destination, content) => {
    fs.writeFile(destination, JSON.stringify(content,null,4), (err)=> err ? console.error(err):console.info(`\n Data written to ${destination}`));
}

const readAndAppend = (content,file) => {
    readFromFile(file, "utf-8", (err, data) => {
        if(err){
            console.error(err);
        }
        else {
            const parseData = JSON.parse(data);
            parseData.push(content);
            writeToFile(file,parseData);
        }

    });
};

module.exports = {readFromFile,writeToFile,readAndAppend};