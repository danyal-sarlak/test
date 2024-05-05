var numbers = [1, 5, 8, 9, 7, 12, 2]
var evenlist = []
var oddlist = []
for( var i = 0; i < numbers.length; i++){
    if(i % 2 === 0){
        evenlist.push(numbers[i])
       
        }else{
            oddlist.push(numbers[i])
         
        }
}
console.log('evenlist:'evenlist);
console.log(''oddlist);


