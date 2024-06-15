/**# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code**\
```
/**
 * @param {number} n
 * @return {Function} counter
 */
var createCounter =function(n) {
    let createCounter =n-1;
    return function(){
      createCounter +=1;
      return createCounter;
    } 
    }
/** 
 * const counter = createCounter(10)
 * counter() // 10
 * counter() // 11
 * counter() // 12
 */
