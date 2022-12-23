// Description: convert After Effects expressions for use in a JSX script as a string



var expFile = File("exp.txt"); // must be in same directory as this script 
var expFileObj = new File(expFile);
expFileObj.open("r");

var expFileContent = expFileObj.read();

var expFileContentArray = [];
var convertedExpArray = [];

// convert lines of exp.txt file to array
for (var i = 0; i < expFileContent.split("\n").length; i++) {
    expFileContentArray[i] = expFileContent.split("\n")[i];
    convertedExpArray[i] = "'" + expFileContentArray[i] + " \\n'" ;
}

expFileObj.close();


// open exp.txt file with write mode and write convertedExpArray to exp.txt file
expFileObj.open("w");
var expFileContent = expFileObj.write(convertedExpArray.join("\n")); // write convertedExpArray to exp.txt file


expFileObj.close();




