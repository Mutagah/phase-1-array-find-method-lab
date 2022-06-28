// code your solution here
function superbowlWin(arrayTesting){ 
let ushindi =  arrayTesting.find((winningFinder) => winningFinder.result === 'W')
if (ushindi)
{
    return ushindi.year
}
else {
    return undefined;
}}