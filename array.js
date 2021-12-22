//Construct way of array declaration
/* 
var arr1=new Array()

var arr2=new Array(10)
var arr3=new Array('test',12,10.6)
console.log(arr3) */

//Lirteral way of array declaration
/* var arr1=[]
var arr2=[undefined]
var arr3=['test',10,25.6]
console.log(arr3[0]) */

var arr=[21,23,12,67,56,78]
//for/of loops
for(ele of arr)
{
    console.log(ele)
}
//is Array
console.log(Array.isArray(ele))
//type
console.log(typeof(ele))

//toString,join
console.log(arr.toString())
console.log(arr.join("*"))

//Stack methods
//Add element to last position
arr.push(90)
console.log("Add element[90] to last position:"+arr)
console.log(arr.length)
//Delete element from last position
arr.pop()

//Queue
//Add element to first position
arr.unshift(10)
console.log("Add element to first position:"+ arr)
//Remove the first element
arr.shift(10)
console.log(" Remove the element to first position:"+ arr)

//reOrdering methods
//String sort
var str=["Third","second","One"]
console.log(str.reverse())
console.log(str.sort())

//Numbers Sort 
var nums=[12,002,23,14,45]
console.log("Numbers sort:"+nums.sort())
console.log("Numbers sort:"+nums.sort((a,b)=>a-b))
console.log("Numbers Reverse:"+nums.sort((a,b)=>b-a))

//array equals

var arr1 =arr
arr1.push(100)
console.log("Array equals:",arr)

//Copy element from one array to another array object
var arr2=arr1.concat()
arr2.push(2)
console.log(arr1)
console.log("Copy element from one array to another array object",arr2)

var newarr=arr2.concat(90,11,[2,45])
console.log("Copy element from one array to another array object",newarr)
//SubArray
var subArray=newarr.slice(2,4)
console.log("SubArray"+subArray)

//Remove  and insert
var removeArr=newarr.splice(3,newarr.length-3)
console.log(removeArr)
console.log(newarr)
var insertArr=newarr.splice(2,2,11,14)
console.log(insertArr)

console.log(newarr)

//Location Methods
//get element on position
console.log("get element on position:"+ newarr[2])
//get index of element
console.log("get index of element:"+ newarr.indexOf(11))
console.log("get index of element:"+ newarr.indexOf(11,3))
//lengnth of arr
console.log("lengnth of arr:"+ newarr.length)
//Element is present in arr
console.log("Element is present in arr:"+ newarr.includes(14))
//Deleting only element and not an index position from array
delete newarr[1]
console.log("Deleting only element and not an index position from array"+arr)

//Iteration Methods

newarr.forEach (function(item ,index ,array)
{
    console.log(item +"-"+index)
})
var arr=[1,2,3,4,5,6]
//Update-->Iteration without for loop using reduce filter map
let total=arr.reduce((sum,num)=>sum+num,0)
console.log("Iteration without for loop using reduce filter map:"+total)

//concat nested array values
let nested= [[1,2],[3,4],[5,6],[7,8]]
let combined=nested.reduce(function(combine,currentValue){
    return combine.concat(currentValue)
})
console.log("Combined Array:",combined)

//Remove Duplicates an store unique value
let duplicate=['a','b','c','a','t','c']

let unique=duplicate.reduce(function(uniqueValues,currentvalues)
{
    if(uniqueValues.indexOf(currentvalues) === -1)
    {
      uniqueValues.push(currentvalues);
    }
    return uniqueValues
},[])
console.log("unique values:",unique)
// condition-->Get Even numbers from an array
var nums=[12,13,14,15,16]
let evenNums=nums.filter(num=>num%2==0)
console.log("Get Even numbers from an array:"+evenNums)

//operation on each element in array using MAp
let multiplyWithTwo=nums.map(mul=>mul*2)
console.log("Operation on each element in array using Map:"+multiplyWithTwo)