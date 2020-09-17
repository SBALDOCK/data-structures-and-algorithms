## Blogorithm

A blog about my chronic struggles with the logic of Algorithms

-Steve Baldock


### Quick Sort

Hello all. Welcome back and happy Wednesday. The world may falling apart, but this blog is fully intact so let's kick it off. 

Today, we are going to scale the sharp and unforgiving peaks of **Quick Sort** Algorithms. If you're not familiar with Quick Sort Algorithms, hold on to yer seat because it's going to get bumpy.   

Here is the array we will be working with today

Quick Sort is another divide and conquer approach, but differs greatly from other sorting methods. We will select a single element of the array as a "pivot", partitioning the array around it so that the left side contains elements less than the pivot while the right contains elements greater than the pivot. This approach reduces the space complexity.

* Input Array - `[8,4,23,42,16,15]`

Okay, let's get started. First, we select a pivot. Let's take 23 as a starting point. Next, we will swap the pivot with the last element of the array, like this... 

* Pivot Moved - `[8,4,15,42,16,23]

Next, we partion the "subarray" from 8 to 16, and begin to move inwards toward the middle. Let's move the 8 to the right until it reaches a value greater than or equal to the pivot. As you probably see, this will be the 42. We stop there. 

Now, let's perform the same action, but begin at the right partition with the value of 16. This time, we move left until we find a value less than the pivot or it cross the left bound (which is now 42). Well, the right partition has a value of 16, which is less than the pivot of 23. Now, we swap the new left and right partitions, for a revised array that looks like this...

* Revised Array = `[8,4,15,16,42,23]`

How, we perform this same set of steps with 16 and 42, our new left and right partitions. Beginning with the 16, we only move to the right once place before we find a value greater than the pivot of 23. Stepping left from the right partition of 42, we immediately cross the left. When this takes place, all elements to the left of the left bound are less than the pivot and those to the right are greater than or equal to the pivot. With that in mind, we can now swap 42 with 23. Our new revised array looks like this...

* Revised Array = `[8,4,15,16,23,42]`

Now that we know 42 is the largest, and thus the last place in the array, and 23 is ordered directly before it, we run quick sort again with our new left sublist, which excludes both. Let's select a new pivot. This time, we will choose 4. We swap it with 16, which marks the end of our current sublist. We now have an array like this...

* Revised Array = `[8,16,15,4,23,42]`

With 4 as our new pivot, we can partition the subarray with 8 on the left and 15 on the right. Performing the same action steps we did previously, we quickly find that the 8 is greater than the new pivot of 4, so we begin working left from the right partition of 15. Well, 15, 16, and 8 are not less than 4, but we cross the left partition of 8. We know that this means all elements to the left of the left bound are less than the pivot (nothing) and all elements to the right are greater or equal to the pivot. That being the case, we now swap the pivot of 4 with 8. 

* Revised Array = `[4,16,15,8,23,42]`

We now know that 4, 23, and 42 are in the right order. Our new subarray is 16,15, and 8. Performing quick sort, we select a new pivot. Let's choose 15. Swap 15 and 8, working inward from our left partition of 16 and right partition of 8. Performing the same steps, we realize that 16 and 8 need to be swapped based upon our established sorting rules.

* Revised Array = `[4,8,16,15,23,42]`

We are so, so close! In our last few steps, we move left from our left partition of 16 and right from 16 and find that 16 is greater than our pivot, and thus needs to swap with it. 

* Revised Array = `[4,8,15,16,23,42]`

All items are now in place and we hopefully understand a bit about how quick sort methodology works. Thanks for climbing this peak with me today!

Signing off,

STB

## Attachments

[readme](README.md)
[solution](quick-sort.js)
[tests](quick-sort.test.js)