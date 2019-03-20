
export class mergeClass {
     mergeSort(arr){
        var len = arr.length;
        if(len <2)
           return arr;
        var mid = Math.floor(len/2),
            left = arr.slice(0,mid),
            right =arr.slice(mid);
        //send left and right to the mergeSort to broke it down into pieces
        //then merge those
        console.log("left array "+left);
        console.log("right array "+right);
        return this.merge(this.mergeSort(left),this.mergeSort(right));
     }
    
      merge(left, right){
        var result = [],
            lLen = left.length,
            rLen = right.length,
            l = 0,
            r = 0;
        while(l < lLen && r < rLen){
           if(left[l] < right[r]){
             result.push(left[l++]);
           }
           else{
             result.push(right[r++]);
          }
        }  
        //remaining part needs to be addred to the result
        console.log(result.concat(left.slice(l)).concat(right.slice(r)));
        return result.concat(left.slice(l)).concat(right.slice(r));
      }
}
