var fs = require('fs');
var readline = require('readline');

var index_token = 0;
var access_token = [];

exports.get_token = function(){
   if(index_token >= access_token.length){
     index_token = 0;
   } else{
     index_token = index_token + 1;
   }
  return access_token[index_token];
}

function process_file(inputFile, data){
  instream = fs.createReadStream(inputFile),
  outstream = new (require('stream'))(),
  rl  = readline.createInterface(instream, outstream);

  rl.on('line', function(line){
    data.push(line);
  });

  rl.on('close', function(line){
    console.log('Done reading file.')
  });
};
process_file("./db/token.txt",access_token);
