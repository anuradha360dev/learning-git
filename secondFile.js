// Largest Sum Contiguous Subarray
function maxSubArraySum(a, size)
{
    var maxint = Math.pow(2, 53)
    var max_so_far = -maxint - 1
    var max_ending_here = 0
       
    for (var i = 0; i < size; i++)
    {
        max_ending_here = max_ending_here + a[i]
        if (max_so_far < max_ending_here)
            max_so_far = max_ending_here
  
        if (max_ending_here < 0)
            max_ending_here = 0 
    }
    return max_so_far
function largest(arr) {
    let i;
    let max = arr[0];
    
    for (i = 1; i < arr.length; i++) {
        if (arr[i] > max)
            max = arr[i];
    }
     
  return max;
}