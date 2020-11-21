/**
 * @author jnw
 * @date 20-11-20
 * @param {number[]} nums 
 * @param {number} target 
 * @return {number[]} 
 */
//键头函数
const twoSum=(nums,target) => {
   // console.log('两数相加')
   let map={};//JSON Object  {}建字对 HashMap
   let res=[];
   //编写功能 一个函数完成一个功能
   //forEach遍历每一个当前值e和下标i
   // {console.log(e,i);
   nums.forEach((e,i)=>map[e]=i);//callback for+执行功能 O(n)空间换时间
   //console.log(map) { '2': 0, '7': 1, '11': 2, '15': 3 }  组成json object
   console.log(map, '-----------')
   for(let i=0;i<nums.length;i++){
       let j=map[target-nums[i]];
       console.log(nums[i], j, '++++++++++++')
       if(j&&j!==i) {
        res=[i,j];
        break;
       }
   }
//})
   return res;
}
// console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([3, 2, 4], 6));