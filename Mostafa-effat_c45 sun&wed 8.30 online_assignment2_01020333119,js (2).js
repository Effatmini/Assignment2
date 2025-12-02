const path = require('path');
const fs = require('fs');
const EventEmitter = require('events');
const os = require('os');
//1
 console.log(__filename); 
 console.log(__dirname);  


//  //2

 
function getFileName(filePath) {
  return path.basename(filePath);
}


const filePath = "C:\\Users\\effat\\OneDrive\\Desktop\\assignment\\assignment2.js";
console.log(getFileName(filePath)); 



// //3 



function buildPath(obj) {
  return path.join(obj.dir, 'assignment2', obj.name + obj.ext);
}


const input = { dir: "C:\\Users\\effat\\OneDrive\\Desktop\\assignment", name: "assignment2", ext: ".js" };

console.log(buildPath(input));


// //4


function getFileExtension(filePath) {
  const parts = filePath1.split('.');
  return parts.length > 1 ? '.' + parts.pop() : '';
}


const filePath1 = "/docs/readme.md";
console.log(getFileExtension(filePath)); 


// //5

function parseFile(filePath) {
  return {
    Name: path.basename(filePath, path.extname(filePath)), 
    Ext: path.extname(filePath) 
  };
}


const filePath2 = "/home/app/main.js";
console.log(parseFile(filePath));


// //6 

function isAbsolutePath(filePath) {
  return path.isAbsolute(filePath);
}

console.log(isAbsolutePath("/home/user/file.txt")); 



//7


function joinPaths(...segments) {
  return path.join(...segments);
}

const result = joinPaths("src", "components", "App.js");
console.log(result); 


// //8 


function resolveAbsolutePath(relativePath) {
  return path.resolve(relativePath);
}


const relativePath = "./index.js";
console.log(resolveAbsolutePath(relativePath));



 //9


 function joinTwoPaths(path1, path2) {
   return path.join(path1, path2);
 }


 const result1 = joinTwoPaths("/folder1", "folder2/file.txt");
 console.log(result1); 


//10


 function deleteFileAsync(filePath3) {
   fs.unlink(filePath3, (err) => {
     if (err) {
       console.error(err.message);
       return;
     }
     console.log(`${path.basename(filePath2)} .`);
  });
 }

 const filePath3 = "/path/to/file.txt";
 deleteFileAsync(filePath3);

// //11

 function createFolderSync(folderPath) {
   try {
     fs.mkdirSync(folderPath, { recursive: true }); 
     return "Success";
  } catch (err) {
    return `Error: ${err.message}`;
   }
 }


 const folderPath = path.join(__dirname, "NewFolder");
 console.log(createFolderSync(folderPath)); 


 //12

 const myEmitter = new EventEmitter();


 myEmitter.on('start', () => {
   console.log("Welcome event triggered!");
 });


 myEmitter.emit('start');

// //13

 const myEmitter1 = new EventEmitter();


 myEmitter1.on('login', (username) => {
   console.log(`User logged in: ${username}`);
 });


 myEmitter1.emit('login', "Ahmed");


// //14


 function readFileSyncAndLog(filePath) {
  try {
     const data = fs.readFileSync(filePath4, 'utf8');
     console.log("the file content =>", data);
  } catch (err) {
    console.error("Error reading file:", err.message);
   }
 }


 const filePath4 = path.join(__dirname, "notes.txt");
 readFileSyncAndLog(filePath4);


// //15

 function writeFileAsync(filePath, content) {
   fs.writeFile(filePath, content, 'utf8', (err) => {
     if (err) {
       console.error("Error writing file:", err.message);
       return;
     }
     console.log(`${path.basename(filePath)} has been saved successfully.`);
   });
 }


 const filePath5 = path.join(__dirname, "async.txt");
 writeFileAsync(filePath5, "Async save");


//16


function pathExists(targetPath) {
  return fs.existsSync(targetPath);
}

console.log(pathExists(path.join(__dirname, "notes.txt")));   

//17

function getSystemInfo() {
  return {
    Platform: os.platform(), 
    Arch: os.arch()         
  };
}


console.log(getSystemInfo());
