function runProgram(input){
    var input = input.trim().split("\n")
    let tc = +input[0]
    let line = 1;
    for(let i = 0; i<tc; i++){
        let [n,x,y]= input[line++].trim().split(" ").map(Number)
        let arr = input[line++].trim().split(" ").map(Number)
        SmartConsumer(n,x,y,arr)
    }
  
}

function   SmartConsumer(n,x,y,arr){
    console.log(n,x,y,arr)
}
 

runProgram(`3
4 30 10
15 8 22 6
4 40 10
15 8 22 6
4 34 10
15 8 22 6`)