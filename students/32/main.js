const ex1 = () => {
    const array = [1, '2', 3, 'test', 1.2];
    console.log(countNumbers(array));
  }
  
    const ex2 = () => {
    const array = [12, 55, 2, 11];
    console.log(minNumber(array));
    
   
  }
  
    const ex3 = () => {
    const array1 = [1, 2, 3, 4, 5, 1];
    const array2 = ['a', 'b', 'c', 'd', 'e'];
    console.log(interleave(array1, array2));

  }
  
  const countNumbers = (array) => {
    let retval = 0;
    for(let i of array){
        if(typeof(i)=='number'){
            retval++
        }
     
      
    }
    
    return retval;
}
  const minNumber = (array) => {
    let retval = array[0];
    for(let i of array){
        if(i<retval){
            retval=i;
           
        }
                        
   }

    
    return retval;
} 
  




  const interleave = (array1, array2) => {
    
    if(array1.length != array2.length){
        return `ERROR: Array length mismatch`
    }
    else{
        
    } 
   
} 
  
  const main = async () => {
    ex3();
  }
  
  main();
