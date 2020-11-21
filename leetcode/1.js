//console.log('leetcode,必考之twoSum')
//手写代码 js
/**
 * @author jnw
 * @date 20-11-20
 * @param {number[]} nums 
 * @param {number} target 
 * @return {number[]} 
 */
//es5 老版js语法 var
const twoSum = function(nums,target){ //const常量
    let arr=[];
    //ea6 新版js语法
   for(let i=0;i<nums.length;i++){
       for(let j=i+1;j<nums.length;j++){
           if(nums[i]+nums[j]==target){
               arr=[i,j]
           }
       }
   }
    return  arr

}
console.log(twoSum([2,7,11,15],9))
//两重for循环时间复杂度o(n^2)