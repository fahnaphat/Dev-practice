//Provide Service about Project process

function getCurrentTime(){
    //return current date.
    return new Date()
}

function add(x,y){
    return x+y
}

//export getCurrentTime() function
module.exports.getCurrentTime = getCurrentTime
module.exports.add = add