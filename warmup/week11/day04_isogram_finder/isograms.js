// version 1

// const isIsogram = (word) => {
//   word = word.toLowerCase();
//
//   if(word.length === 0){
//     console.log(`${word} is an isogram`)
//     return true;
//   }
//
//   for (let i = 0; i < word.length; i++) {
//     for (let j = i+1; j < word.length; j++) {
//       if(word[i] === word[j]){
//         console.log(`${word} is NOT an isogram`);
//         return false;
//       }
//     }
//   }
//
//   console.log(`${word} is an isogram`)
//   return true;
// };


const isIsogram = (word) => {
  // let newWord = new Set(word.toLowerCase());
  // if(newWord.size === word.length ){
  //   return true;
  // } else {
  //   return false;
  // }
  return new Set(word.toLowerCase()).size === word.length;
};


console.log(isIsogram("Dermatoglyphics")); //, true );
console.log(isIsogram("isogram")); //, true );
console.log(isIsogram("aba")); //, false, "same chars may not be adjacent" );
console.log(isIsogram("moOse")); //, false, "same chars may not be same case" );
console.log(isIsogram("isIsogram")); //, false );
console.log(isIsogram("")); //, true, "an empty string is a valid isogram" );


// compact solution - Aleks! 
let i=(s)=>new Set(s.toLowerCase()).size==s.length
