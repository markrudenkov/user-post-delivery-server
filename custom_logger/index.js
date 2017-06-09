const fs = require('fs');
const mkdirp = require('mkdirp');

const log_root = 'log';
let log_day_dir = new Date().getDate();
let log_file_name = new Date().getHours();
let log_file_path = `${log_root}/${log_day_dir}`;
let tsFormat = new Date().toLocaleTimeString();


function dirController(){
    mkdirp(log_file_path,function(){return log_file_path});
};

function writeLoggTofile(logMessage){
    dirController();
    fs.appendFileSync(`${log_file_path}/${log_file_name}.txt`, `${tsFormat} ${logMessage}\n`, encoding='utf8');
};

function writeLoggTofileConsole (logMessage){
    console.log(`${tsFormat} ${logMessage}\n`);
    return this;
};

function info(logMessage){
    writeLoggTofile(logMessage);
    writeLoggTofileConsole (logMessage);
}

info('Logger is enabled');

module.exports = info;
