// code your solution here
function superbowlWin(arrayTesting){
let winning = (arrayTesting) => arrayTesting.result === 'W';
let ushindi =  arrayTesting.find(winning)  
if (ushindi)
{
    return ushindi.year
}
else {
    return undefined;
}}