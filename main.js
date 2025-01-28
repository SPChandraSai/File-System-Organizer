let inputArr = process.argv.slice(2);
// console.log(inputArr);
// node main.js tree "directoryPath"
// node main.js organize "directoryPath"
// node main.js help
let command=inputArr[0];
switch (command){
    case "tree":
        treeFn(inputArr[1]);
        break;
    case "organize":
        organizeFn(inputArr[1]);
        break;
    case "help":
        helpFn(inputArr[1]);
        break;
    default:
        console.log("Please 🙏 Input Right command");
        break;
}

function treeFn(dirPath){
    console.log("Tree command implemented for ", dirPath);
}

function organizeFn(dirPath){
    console.log("Organize command implemented for ", dirPath);
}

function helpFn(){
    console.log(`
    List of All the commands:
        node main.js tree "directoryPath"
        node main.js organize "directoryPath"
        node main.js help
    `);
}





