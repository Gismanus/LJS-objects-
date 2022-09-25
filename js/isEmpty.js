function isEmpty(obj) {
    for (let key in obj){
        return false;
    }
    return true;
}

let shedule = {};

console.log(isEmpty(shedule)); // true

shedule["8:30"] = "get up";

console.log(isEmpty(shedule)); // false