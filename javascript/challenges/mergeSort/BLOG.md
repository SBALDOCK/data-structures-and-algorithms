## Merge Sort - A Blog

* Author - Stephen Baldock
* installment #2

Hello all. Welcome back! Today, we are going to walk through a **Merge Sort** function that takes an array, divides it in half, sorts the left and right half, and merges it back together for a fully sorted array. 

Here is the array we will be working with today

* Input Array - `[8,4,23,42,16,15]`

Our first step is to divide the input array into two halves, which will look like this

* Left = `[4,8,23]`
* Right = `[42,16,15]`

Next, we divide the left array in two, which will result in two uneven halves, like this.

* Left = `[8,4]`
* Right = `[23]`

Next, we divide the left array in two again, separting the two numbers into two arrays like this.

* Left = `[8]`
* Right = `[4]`

We can no longer split the arrays, since they arrays of 1. 

Now, we compare the value of the left and right, sorting them appropriately, In this case, we would merge the two arrays back together in a new order...

* `[4,8]`

If we follow this logic of array separation, comparison, and merging, we wind back up with two ordered halves from our original array.

* Left = `[4,8,23]`
* Right = `[15,16,42]`

Now, we perform the same comparison we've been doing on each individual half, comparing the smallest value from the front of each array and comparing them. 

Our first placement into a merged array will result in this.

* Merged Array = `[4,_,_,_,_,_]`
* Left = `[_,8,23]`
* Right = `[15,16,42]`

Our next comparison will measure the smallest value in the left array with the smallest value in the right array, with this result...

* Merged Array = `[4,8,_,_,_,_]`
* Left = `[_,_,23]`
* Right = `[15,16,42]`

As we continue on, we will eventually come to a single, ordered array.

* Merged Array = `[4,8,15,16,23,42]`

Voila! I hope you've enjoyed today's installment. Please sign up to enjoy member perks. 


## Pseudocode

```
ALGORITHM Mergesort(arr)
    DECLARE n <-- arr.length
           
    if n > 1
      DECLARE mid <-- n/2
      DECLARE left <-- arr[0...mid]
      DECLARE right <-- arr[mid...n]
      // sort the left side
      Mergesort(left)
      // sort the right side
      Mergesort(right)
      // merge the sorted left and right sides together
      Merge(left, right, arr)

ALGORITHM Merge(left, right, arr)
    DECLARE i <-- 0
    DECLARE j <-- 0
    DECLARE k <-- 0

    while i < left.length && j < right.length
        if left[i] <= right[j]
            arr[k] <-- left[i]
            i <-- i + 1
        else
            arr[k] <-- right[j]
            j <-- j + 1
            
        k <-- k + 1

    if i = left.length
       set remaining entries in arr to remaining values in right
    else
       set remaining entries in arr to remaining values in left
```
## Attachments

[readme](README.md)
[solution](merge-sort.js)
[tests](merge-sort.test.js)
![whiteboard](whiteboard.png)
