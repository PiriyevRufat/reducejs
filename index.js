// let voters = [
//     {name:'Bob' , age: 30, voted: true},
//     {name:'Jake' , age: 32, voted: true},
//     {name:'Kate' , age: 25, voted: false},
//     {name:'Sam' , age: 20, voted: false},
//     {name:'Phil' , age: 21, voted: true},
//     {name:'Ed' , age:55, voted:true},
//     {name:'Tami' , age: 54, voted:true},
//     {name: 'Mary', age: 31, voted: false},
//     {name: 'Becky', age: 43, voted: false},
//     {name: 'Joey', age: 41, voted: true},
//     {name: 'Jeff', age: 30, voted: true},
//     {name: 'Zack', age: 19, voted: false}
//     ];
// function whoVoted(arr) {
//         return arr.reduce((acc, cur) => {
//             if (cur.voted === true) {
//                 return acc + 1;
//             } else {
//                 return acc;
//             }
//         }, 0);
//     }
//     console.log(`Ses verenlerin sayı: ${whoVoted(voters)}`);

// task 1

// let wishlist = [
//     { title: "Tesla Model S", price: 90000 },
//     { title: "4 carat diamond ring", price: 45000 },
//     { title: "Fancy hacky Sack", price: 5 },
//     { title: "Gold fidgit spinner", price: 2000 },
//     { title: "A second Tesla Model S", price: 90000 }
//     ];
// function overallPrice(wishlist) {
//     return wishlist.reduce((totalPrice, item) => {
//         return totalPrice + item.price;
//     }, 0);
// }
// console.log(`Wishlistdeki butun itemlerin qiymeti: $${overallPrice(wishlist)}`);

//task 2

// const findLongestWord = function(str) {
//     let arrStr = str.split(' ');
//     let wordLength = 0;
//     let longestWord;
//     for (let i = 0; i < arrStr.length; i += 1) {
//       wordLength= arrStr[1].length;
//       if (arrStr[i].length > wordLength) {
//         longestWord= arrStr[i];
//         return longestWord;
//       }  
//     }
//   };
//   console.log(findLongestWord("My motto is if you want to win the lottery you have to make the money to buy a ticket."));

//task3

// function capitalizeFirstLetter(str) {
//     const words= str.split(' ');
//     const capitalizedWords = words.map(word => {
//         return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
//     });
//     return capitalizedWords.join(' ');
// }
// const sentence= "what's your favorite scary movie?";
// console.log(capitalizeFirstLetter(sentence));

//task4

// function truncate(str,cutWords) {
//     return str.split(" ").splice(0,cutWords).join(" ")
// }
// console.log(truncate("Ah you think darkness is your ally? You merely adopted the dark. I was born in it, molded by it. I didn't see the light until I was already a man, by then it was nothing to me but blinding!",7));

//task5
