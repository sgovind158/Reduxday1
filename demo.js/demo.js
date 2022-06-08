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
  let sum = 0;
  for(let i = 0; i<n; i++){
      sum = sum + arr[i]
  }
  let sum1 = 0;
  for(let i = 0; i<n;i++){
      if(y>arr[i]){
          sum1 = sum1 + 0;
      }else{
          sum1 =   arr[i]-y +sum1 ;
      }
  }
  console.log(sum1)
  let total = Math.floor(sum1) + x;
  if(sum > total){
      console.log("YES")
  }else{
      console.log("NO")
  }

}
 

runProgram(`3
4 30 10
15 8 22 6
4 40 10
15 8 22 6
4 34 10
15 8 22 6`)