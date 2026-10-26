console.log("Enter year");
const data = require('fs').readFileSync(0, 'utf8');
if(data%4==0||data%400==0){
    console.log("yes");
} else {
    console.log("no");
}
// Write your solution here