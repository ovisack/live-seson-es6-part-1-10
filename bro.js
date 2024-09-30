 const number=[15,,857,5,75,82,87,84,7];
//  for(let sum of number){
//     if(sum>50){
//         tim=sum;
//         break;

//     }

//  }
//  console.log(tim);


 const sum=number.find((nam) => nam >50 && nam%2===0);
 console.log(sum);