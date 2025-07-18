const args = process.argv.slice(2);
const number = Number(args[0]);
if (!isNaN(number)) {
    console.log("My number: " + Math.floor(number));
}
else {
    console.log("Not a number");
}