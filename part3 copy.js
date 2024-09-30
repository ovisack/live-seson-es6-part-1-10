const info={
    name:'ovisack',
    ago:23,
    id:12,
    adscss:'dhaka',
    $canat:{
        phone:1245,
        email:'royovisack',


    }

}



// for(let key in info){
//     console.log(info[key]);

// }




 const {$canat}= info;
// //console.log($canat);
const{email,phone}=$canat;
console.log(email?phone);