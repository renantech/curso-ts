// function showMessage(msg) {
//     return msg;
// }

function showMessage(msg: any): any {
    return msg;
}

console.log(showMessage('string'));
console.log(showMessage(123));
console.log(showMessage(['array']));
