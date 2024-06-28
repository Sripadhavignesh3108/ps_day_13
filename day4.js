const prompt = require("prompt-sync")();

// // FINDING DUPLICATES AND UNIQUE NUMBERS IN A STRING

// let num=prompt("enter");
// let s="",dup="",unq="";
// for(i of num){
//     if(!s.includes(i)){
//         s+=i
//     }
// }
// for(i of s){
//     c=0;
//     for(j of num){
//         if(i==j){
//             c++;
//         }
//     }
//     if(c>1){
//         dup+=i+", "
//     }
//     else
//     unq+=i+", "
// }
// console.log("count of duplicate numbers in given number : "+dup)
// console.log("count of Unique numbers in given number : "+unq)



// // FINDING THE COUNT OF EACH NUMBERS REPEAT COUNT

// let num=prompt("enter");
// let s="";
// for(i of num){
//     if(!s.includes(i)){
//         s+=i
//     }
// }
// for(i of s){
//     c=0;
//     for(j of num){
//         if(i==j){
//             c++;
//         }
//     }
//     console.log(i+"-->"+c)
// }



// // SUM OF DUPLICATES IN GIVEN NUMBER;

// let num=prompt("enter");
// let s="",dup=0;
// for(i of num){
//     if(!s.includes(i)){
//         s+=i
//     }
// }
// for(i of s){
//     c=0;
//     for(j of num){
//         if(i==j){
//             c++;
//         }
//     }

//     if(c>1){
//         dup=dup+Number(i)
//     }
// }
// console.log(dup)


// // FINDING PRIME NUMBERS UPTO GIVEN NUMBER AND REVERSING THERE DIGITS
// num=+prompt("enter a number :");
// let primeRev="";
// for(n=1;n<num;n++){
//     if(n>1){
//         c=0;
//         for(i=2;i<n;i++){
//             if(n%i==0){
//                 c++;
//                 break;
//             }
//         }
//         if(c==0){
//             primeRev+=String(n).split("").reverse().join("")+" ";                                                                         
//         }
//     }
// }
// console.log(primeRev)





// let input=prompt("enter a number : ");
// let filt="",dup="",unq="";
// for(n of input){
//     if(!filt.includes(n))
//         filt+=n
// }
// for(i of filt){
//       count=0;
//     for(j of input){
//          if(i==j){
//             count++;
//          }
//         }
//          if(count>1) dup+=Number(i)
//             else unq+=Number(i)
// }
// let max=dup[0];
// let max1=unq[0];
// let min=dup[0];
// let min1=unq[0];
// for(m of dup){
//     if(m<min){
//         min=m;
//     }
//     if(m>max){
//         max=m
//     }
// }
// for(v of unq){
//     if(v<min1){
//         min1=v;
//     }
//     if(v>max1){
//         max1=v
//     }

// }

// console.log(` sum of smallest unique number and smallest duplicate number is : ${min1} + ${min} =`,Number(min)+Number(min1))
// console.log(` sum of Largest unique number and largest duplicate number is : ${max1} + ${max} =`,Number(max)+Number(max1))
// console.log(` sum of Largest unique number and Smallest duplicate number is : ${max1} + ${min} =`,Number(max1)+Number(min))
// console.log(` sum of Smallest unique number and largest duplicate number is : ${min1} + ${max} =`,Number(min1)+Number(max))

