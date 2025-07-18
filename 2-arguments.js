const arguments = process.argv.slice(2);
if (arguments===0) {
    console.log("No argument");
}
else if (arguments===1) {
    console.log("Argument found");
}
else {
    console.log("Arguments found");
}