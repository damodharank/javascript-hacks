
var arr = [2,4,6,7];


//USING FOR =================================

for (var i = 0, len = arr.length; i < len; i++) {
    // DO SOME THING 
}




// USING FOR EACH ============================
arr.forEach( a => {
    // DO SOME THING 
}




// USING WHILE  - Iterate reverse from last to first =======================
i = arr.length;
while(i--){
 console.log("--->",arr[i])
}

/* OUTPUT 

​"--->" 7
"--->" 6
"--->" 4
"--->" 2
*/


// FOR EACH ======================================

arr.forEach(function(value, index) {
 
  console.log("index=>",index);
  console.log("value=>",value);

});

/* OUTPUT 
"index=>" 0
"value=>" 2

"index=>" 1
"value=>" 4

"index=>" 2
"value=>" 6

"index=>" 3
"value=>" 7
*/


// USING MAP 
arr.map(function(a){
    console.log("-->",a)
  });

/* OUTPUT 
"-->" 2
"-->" 4
"-->" 6
"-->" 7


*/

// USING REDUCE ====================================
arr.reduce(function(a, b) {
  console.log('a--------->', a);
  console.log('b---------->',b);
});

//  OUTPUT 
// a---------> 2
// b--------->4
// a---------> 4
// b---------> 6
// a---------> 6
// b---------> 7
// a---------> 7

//=========================================================== STRING 

const words = ['welcome', 'to', 'javascript', 'world', 'of', 'arrayfunctions'];

const result = words.filter(word => word.length > 6);

console.log("-->",result);

/* OTPUT */
//["welcome", "javascript", "arrayfunctions"]