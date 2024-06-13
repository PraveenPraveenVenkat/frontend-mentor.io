/**
 * @param {number[]} nums
 * @return {boolean}
 */
// Corrected code
export const containsDuplicate = function(nums) {
    const seen = new Set();
    for (const num of nums) {
        if (seen.has(num)) {
            return true;
        }
        seen.add(num);
    } 
    return false;
};
/*
export const containsDuplicate = function (nums) {

    function nums(){
   
    if(containsDuplicate =true){
        return true;
    }elseif (containsDuplicate !=true){
        return false;
    }
 } 
 nums();*/

 /*
 // Function implementation
export const containsDuplicate = function(nums) {
    const seen = new Set();
    for (const num of nums) {
        if (seen.has(num)) {
            return true;
        }
        seen.add(num);
    }
    return false;
};

// Example usage
const array1 = [1, 2, 3, 4];
const array2 = [1, 2, 3, 1];

console.log(containsDuplicate(array1)); // Outputs: false
console.log(containsDuplicate(array2)); // Outputs: true

}
*/
// Corrected code

// Ensure there are no missing statements or declarations below this point
// Corrected code



