function chunkArrayInGroups(arr, size) {
    var numloops = arr.length / size;
    // if (arr.length % size > 1){
    //   numloops+=1;
    // }
  
  var new_arr=[];
  var y=0;
  var z=0;
  for (var x=0; x<numloops; x++){
    var holder=[];
    for(var y=0; y<size; y++){
      console.log(arr[z]);
      if(arr[z] != undefined){
        holder[y] = arr[z];
        console.log("x = " + x);
        console.log("y = " + y);
        console.log("z = " + z);
        console.log("arr[z] = " + arr[z]);
        console.log("holder = " + holder);
        z++;
      }
    }
    new_arr.push(holder);
    console.log(z);
  }
    return new_arr;
  }
  
  const arrr = [0, 1, 2, 3, 4, 5];
  //const size = 1;
   
  chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4);