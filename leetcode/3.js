const numbers=[3,62,234,7,23,74,23,76,92];
//const arr=[];
 //const LargeNumbers=numbers.forEach((e,i)=>{
//  if(e>70){
//      arr.push(e);

//  }
// })
//forEach基础上
    const cb=numbers=>{
    return numbers>70
    }
const LargeNumbers=numbers.filter(cb);
console.log(LargeNumbers);
