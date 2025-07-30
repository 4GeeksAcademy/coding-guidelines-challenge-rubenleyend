// function numberIsDivisible(num) {
//   if (num > 0) {
//     if (num % 2 === 0) {
//       if (num % 3 === 0) {
//         return "Divisible by 2 and 3";
//       } else {
//         return "Divisible by 2";
//       }
//     } else {
//       if (num % 3 === 0) {
//         return "Divisible by 3";
//       } else {
//         return "Not divisible by 2 or 3";
//       }
//     }
//   } else {
//     return "Number is not positive";
//   }
// }

// function numberIsDivisible(num) {
//    return((num > 0 && num % 2 === 0 && num % 3 === 0)
//     ? "Divisible by 2 and 3" :(num > 0 && num % 2 === 0)
//     ? "Divisible by 2":"No es divisible" )

//   }
//   console.log(numberIsDivisible(16))
  function numberIsDivisible2(num){
    if(num <= 0)return "No es positivo"
    if(num % 2 === 0 && num % 3 === 0)return "Divisible by 2 and 3"
    if(num % 2 === 0)return "Divisible by 2"
    if(num % 3 === 0)return "Divisible by 3"
    return "Not divisible by 2 or 3"

  }
  console.log(numberIsDivisible2())