//functiong merge(){

//}
//js变量类型是有由值决定，弱类型
//m+n<=nums,length
const merge =(nums1,m,nums2,n) =>{         //箭头函数 es6
//把nums2合并到nums1中
//[1,2,3,0,0,0]
//重新排序
//多定义一个变量
let current2=0;//定义一个指针
for (let i=nums1.length-n;i<=nums1.length-1;i++){
    nums1[i]=nums2[current2++];//好理解  num2有个可遍历
}
//console.log(nums1);
//return nums1.sort((a,b)=>a-b)布尔值 a-b>0不变 从小到大
return nums1.sort((a,b)=>b-a)//大到小
 }

 console.log(merge([1,2,3,0,0,0],3,[2,5,6],3));
