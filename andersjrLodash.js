const _ = {
  clamp(num,lower,upper){
    return Math.min(upper,Math.max(num,lower))
  },
  inRange(num,start,end){
    if (end === 'Undefined'){
      end = start;
      start = 0;
    } else if(num < Math.min(start,end) || num > Math.max(start,end)){
      return false;
    } else {
      return true;
    }
  },
  words (str){
    return str.split(" ");
  },
  pad (str, len){
    if (str.length > len){
      return str;
    }
    for (let item1 = 0; item1 <= Math.floor((len-str.length)/2); item1++){
      str = str + ' ';
    }
    for (let item2 = 0; item2 <= Math.ceil((len-str.length)/2); item2++){
      str = ' ' + str;
    }
    return str;
  },
  has (obj, key){
    return (obj[key] !== undefined)
  },
  invert (obj){
    var invertedObject = {};
    for (let item in obj){
      invertedObject[obj[`${item}`]] = item;
    }
    return invertedObject;
  },
  findKey (obj, pred){
    for (let item in obj){
      if (pred(obj[item])) {
        return item;
      }
    }
    return undefined;
  },
  drop (arr, num){
    do {
      arr.shift();
      num --;
    } while (num > 0);
    return arr;
  },
  dropWhile(arr, pred){
    let newArr = arr;
    let count = 0;
    do {
      newArr.shift();
      count ++;
    } while (pred(newArr[0],count,arr));
    return newArr;
  },
  chunk (arr, size){
    let chunkArr = [];
    for (let item = 0; item < Math.ceil(arr.length/size); item++){
      let chunk = [];
      for (let arrItem = 0; arrItem < size && (arrItem+1)*(item+1) <= arr.length; arrItem++){
        chunk.push(arr[arrItem + size*item]);
      }
      chunkArr.push(chunk);
    }
    return chunkArr;
  }
}


// Do not write or modify code below this line.
module.exports = _;
