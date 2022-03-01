let hasPressedStop = new Boolean(false);
const bubblePseudoCodeString = `bubbleSort( list : array of items )

loop = list.count;

for i = 0 to loop-1 do:
   swapped = false
     
   for j = 0 to loop-1 do:
   
      /* compare the adjacent elements */   
      if list[j] > list[j+1] then
         /* swap them */
         swap( list[j], list[j+1] )		 
         swapped = true
      end if
      
   end for
   
   /*if no number was swapped that means 
   array is sorted now, break the loop.*/
   
   if(not swapped) then
      break
   end if
   
end for

end procedure return list`;

async function bubble() {
	document.getElementById("Description").classList.remove('hidden');
	document.getElementById("description_heading").innerHTML = "Bubble Sort";
	document.getElementById("pseudocode").innerHTML = bubblePseudoCodeString;
	document.getElementById("timeComplexity").innerHTML = "O(n<sup>2</sup>)";
	document.getElementById("description_details").innerHTML = `
<b>Bubble Sort</b> is a simple algorithm which is used to sort a given set of n elements provided in form of an array with n number of elements. Bubble Sort compares all the element one by one and sort them based on their values.<br>
<br>
If the given array has to be sorted in ascending order, then bubble sort will start by comparing the first element of the array with the second element, if the first element is greater than the second element, it will swap both the elements, and then move on to compare the second and the third element, and so on.<br>
<br>
If we have total n elements, then we need to repeat this process for n-1 times.<br>
<br>
It is known as bubble sort, because with every complete iteration the largest element in the given array, bubbles up towards the last place or the highest index, just like a water bubble rises up to the water surface.<br>
<br>
Sorting takes place by stepping through all the elements one-by-one and comparing it with the adjacent element and swapping them if required.`;

	const ele = document.querySelectorAll(".bar");
	console.log(ele)
	for (let i = 0; i < ele.length - 1; i++) {
		for (let j = 0; j < ele.length - i - 1; j++) {
			if (hasPressedStop == true) {
				return;
			}
			ele[j].style.background = 'cyan';
			ele[j + 1].style.background = 'cyan';

			if (parseInt(ele[j].style.width) > parseInt(ele[j + 1].style.width)) {
				await delayTime(delay);
				swap(ele[j], ele[j + 1]);
			}
			ele[j].style.background = '#e43f5a';
			ele[j + 1].style.background = '#e43f5a';
		}
		ele[ele.length - 1 - i].style.background = 'green';
	}
	ele[0].style.background = 'green';
}

const bubSortbtn = document.querySelector(".bubbleSort");
bubSortbtn.addEventListener('click', async function () {
	hasPressedStop = false;
	disableSortingBtn();
	disableSizeSlider();
	disableNewArrayBtn();
	enableStopSortingBtn();
	await bubble();
	if (hasPressedStop == true) {
		disableSpeedSlider();
	} else {
		enableSortingBtn();
		enableSizeSlider();
	}
	enableNewArrayBtn();
	disableStopSortingBtn();
});


const insertionPseudoCodeString = `insertionSort( A : array of items )
int holePosition
int valueToInsert
 
for i = 1 to length(A) inclusive do:
 
   /* select value to be inserted */
   valueToInsert = A[i]
   holePosition = i
   
   /*locate hole position for the element to be inserted */
     
   while holePosition > 0 and A[holePosition-1] > valueToInsert do:
      A[holePosition] = A[holePosition-1]
      holePosition = holePosition -1
   end while
     
   /* insert the number at hole position */
   A[holePosition] = valueToInsert
   
end for
 
end procedure`;

async function insertion() {
	document.getElementById("Description").classList.remove('hidden');
	document.getElementById("pseudocode").innerHTML = insertionPseudoCodeString;
	document.getElementById("description_heading").innerHTML = "Insertion Sort";
	document.getElementById("timeComplexity").innerHTML = "O(n<sup>2</sup>)";
	document.getElementById("description_details").innerHTML = "<b>Insertion Sort</b> Insertion sort is based on the idea that one element from the input elements is consumed in each iteration to find its correct position i.e, the position to which it belongs in a sorted array.<bbr><br>It iterates the input elements by growing the sorted array at each iteration. It compares the current element with the largest value in the sorted array. If the current element is greater, then it leaves the element in its place and moves on to the next element else it finds its correct position in the sorted array and moves it to that position. This is done by shifting all the elements, which are larger than the current element, in the sorted array to one position ahead.";
	const ele = document.querySelectorAll(".bar");
	ele[0].style.background = 'green';
	for (let i = 1; i < ele.length; i++) {
		if (hasPressedStop == true) {
			return;
		}
		let j = i - 1;
		let key = ele[i].style.width;
		ele[i].style.background = 'blue';

		await delayTime(delay);
		if (hasPressedStop == true) {
			return;
		}

		while (j >= 0 && (parseInt(ele[j].style.width) > parseInt(key))) {
			if (hasPressedStop == true) {
				return;
			}
			ele[j].style.background = 'blue';
			ele[j + 1].style.width = ele[j].style.width;
			j--;

			await delayTime(delay);
			if (hasPressedStop == true) {
				return;
			}
			for (let k = i; k >= 0; k--) {
				ele[k].style.background = 'green';
			}
		}
		ele[j + 1].style.width = key;
		ele[i].style.background = 'green';
	}
}

const inSortbtn = document.querySelector(".insertionSort");
inSortbtn.addEventListener('click', async function () {
	disableSortingBtn();
	disableSizeSlider();
	disableNewArrayBtn();
	enableStopSortingBtn();
	await insertion();
	if (hasPressedStop == true) {
		disableSpeedSlider();
	} else {
		enableSortingBtn();
		enableSizeSlider();
	}
	enableNewArrayBtn();
	disableStopSortingBtn();
});

const mergePseudoCodeString = `mergesort( var a as array )
if ( n == 1 ) return a

var l1 as array = a[0] ... a[n/2]
var l2 as array = a[n/2+1] ... a[n]

l1 = mergesort( l1 )
l2 = mergesort( l2 )

return merge( l1, l2 )
end procedure

procedure merge( var a as array, var b as array )

var c as array
while ( a and b have elements )
   if ( a[0] > b[0] )
      add b[0] to the end of c
      remove b[0] from b
   else
      add a[0] to the end of c
      remove a[0] from a
   end if
end while

while ( a has elements )
   add a[0] to the end of c
   remove a[0] from a
end while

while ( b has elements )
   add b[0] to the end of c
   remove b[0] from b
end while

return c
 
end procedure`;

async function merge(ele, low, mid, high) {
	document.getElementById("Description").classList.remove('hidden');
	document.getElementById("pseudocode").innerHTML = mergePseudoCodeString;
	document.getElementById("description_heading").innerHTML = "Merge Sort";
	document.getElementById("timeComplexity").innerHTML = "O(n*logn)";
	document.getElementById("description_details").innerHTML = "<b>Merge Sort</b> follows the rule of Divide and Conquer to sort a given set of numbers/elements, recursively, hence consuming less time.<br><br>If we can break a single big problem into smaller sub-problems, solve the smaller sub-problems and combine their solutions to find the solution for the original big problem, it becomes easier to solve the whole problem.<br><br>In Merge Sort, the given unsorted array with n elements, is divided into n subarrays, each having one element, because a single element is always sorted in itself. Then, it repeatedly merges these subarrays, to produce new sorted subarrays, and in the end, one complete sorted array is produced.<br><br>In merge sort, we break the given array midway, for example if the original array had 6 elements, then merge sort will break it down into two subarrays with 3 elements each.<br><br>    But breaking the orignal array into 2 smaller subarrays is not helping us in sorting the array.<br><br>So we will break these subarrays into even smaller subarrays, until we have multiple subarrays with single element in them. Now, the idea here is that an array with a single element is already sorted, so once we break the original array into subarrays which has only a single element, we have successfully broken down our problem into base problems.<br><br>And then we have to merge all these sorted subarrays, step by step to form one single sorted array.";
	console.log('In merge()');
	const n1 = mid - low + 1;
	const n2 = high - mid;
	let left = new Array(n1);
	let right = new Array(n2);

	for (let i = 0; i < n1; i++) {
		if (hasPressedStop == true) {
			return;
		}
		await delayTime(delay);
		ele[low + i].style.background = 'orange';
		left[i] = ele[low + i].style.width;
	}
	for (let i = 0; i < n2; i++) {
		if (hasPressedStop == true) {
			return;
		}
		await delayTime(delay);
		ele[mid + 1 + i].style.background = 'cyan';
		right[i] = ele[mid + 1 + i].style.width;
	}
	await delayTime(delay);
	let i = 0,
		j = 0,
		k = low;
	while (i < n1 && j < n2) {
		if (hasPressedStop == true) {
			return;
		}
		await delayTime(delay);

		if (parseInt(left[i]) <= parseInt(right[j])) {
			if ((n1 + n2) === ele.length) {
				ele[k].style.background = 'green';
			} else {
				ele[k].style.background = 'lightgreen';
			}

			ele[k].style.width = left[i];
			i++;
			k++;
		} else {
			if ((n1 + n2) === ele.length) {
				ele[k].style.background = 'green';
			} else {
				ele[k].style.background = 'lightgreen';
			}
			ele[k].style.width = right[j];
			j++;
			k++;
		}
	}
	while (i < n1) {
		if (hasPressedStop == true) {
			return;
		}
		await delayTime(delay);
		if ((n1 + n2) === ele.length) {
			ele[k].style.background = 'green';
		} else {
			ele[k].style.background = 'lightgreen';
		}
		ele[k].style.width = left[i];
		i++;
		k++;
	}
	while (j < n2) {
		if (hasPressedStop == true) {
			return;
		}
		await delayTime(delay);
		if ((n1 + n2) === ele.length) {
			ele[k].style.background = 'green';
		} else {
			ele[k].style.background = 'lightgreen';
		}
		ele[k].style.width = right[j];
		j++;
		k++;
	}
}

async function mergeSort(ele, l, r) {
	if (l >= r) {
		return;
	}
	const m = l + Math.floor((r - l) / 2);
	await mergeSort(ele, l, m);
	await mergeSort(ele, m + 1, r);
	await merge(ele, l, m, r);
}

const mergeSortbtn = document.querySelector(".mergeSort");
mergeSortbtn.addEventListener('click', async function () {
	let ele = document.querySelectorAll('.bar');
	let l = 0;
	let r = parseInt(ele.length) - 1;
	disableSortingBtn();
	disableSizeSlider();
	disableNewArrayBtn();
	enableStopSortingBtn();
	await mergeSort(ele, l, r);
	if (hasPressedStop == true) {
		disableSpeedSlider();
	} else {
		enableSortingBtn();
		enableSizeSlider();
	}
	enableNewArrayBtn();
	disableStopSortingBtn();
});

const quickPseudoCodeString = `quickSort(arr, beg, end)
if (beg < end)
  pivotIndex = partition(arr,beg, end)
  quickSort(arr, beg, pivotIndex)
  quickSort(arr, pivotIndex + 1, end)

partition(arr, beg, end)
set end as pivotIndex
pIndex = beg - 1
for i = beg to end-1
if arr[i] < pivot
  swap arr[i] and arr[pIndex]
  pIndex++
swap pivot and arr[pIndex+1]
return pIndex + 1`;

async function partitionLomuto(ele, l, r) {
	let i = l - 1;
	ele[r].style.background = 'cyan'; //pivot
	for (let j = l; j <= r - 1; j++) {
		if (hasPressedStop == true) {
			return;
		}
		ele[j].style.background = 'yellow'; //current element
		await delayTime(delay);
		if (hasPressedStop == true) {
			return;
		}
		if (parseInt(ele[j].style.width) < parseInt(ele[r].style.width)) {
			i++;
			swap(ele[i], ele[j]);
			ele[i].style.background = 'orange';
			if (i != j) ele[j].style.background = 'orange';
			await delayTime(delay);
		} else {
			ele[j].style.background = 'pink';
		}
	}
	i++;
	if (hasPressedStop == true) {
		return;
	}
	await delayTime(delay);
	if (hasPressedStop == true) {
		return;
	}
	swap(ele[i], ele[r]);
	ele[r].style.background = 'pink';
	ele[i].style.background = 'green';

	if (hasPressedStop == true) {
		return;
	}
	await delayTime(delay);
	if (hasPressedStop == true) {
		return;
	}

	// color
	for (let k = 0; k < ele.length; k++) {
		if (ele[k].style.background != 'green')
			ele[k].style.background = '#e43f5a';
	}

	return i;
}

async function quickSort(ele, l, r) {
	document.getElementById("Description").classList.remove('hidden');
	document.getElementById("description_heading").innerHTML = "Quick Sort";
	document.getElementById("pseudocode").innerHTML = quickPseudoCodeString;
	document.getElementById("timeComplexity").innerHTML = "O(n*logn)";
	document.getElementById("description_details").innerHTML = "<b>Quick Sort</b> is a highly efficient sorting algorithm and is based on partitioning of array of data into smaller arrays. A large array is partitioned into two arrays one of which holds values smaller than the specified value, say pivot, based on which the partition is made and another array holds values greater than the pivot value.<br><br>Quicksort partitions an array and then calls itself recursively twice to sort the two resulting subarrays. This algorithm is quite efficient for large-sized data sets as its average and worst-case complexity are O(n<sup>2</sup>), respectively.";
	if (l < r) {
		let pivot_index = await partitionLomuto(ele, l, r);
		await quickSort(ele, l, pivot_index - 1);
		await quickSort(ele, pivot_index + 1, r);
	} else {
		if (l >= 0 && r >= 0 && l < ele.length && r < ele.length) {
			ele[r].style.background = 'green';
			ele[l].style.background = 'green';
		}
	}
}


const quickSortbtn = document.querySelector(".quickSort");
quickSortbtn.addEventListener('click', async function () {
	let ele = document.querySelectorAll('.bar');
	let l = 0;
	let r = ele.length - 1;
	disableSortingBtn();
	disableSizeSlider();
	disableNewArrayBtn();
	enableStopSortingBtn();
	await quickSort(ele, l, r);
	if (hasPressedStop == true) {
		disableSpeedSlider();
	} else {
		enableSortingBtn();
		enableSizeSlider();
	}
	enableNewArrayBtn();
	disableStopSortingBtn();
});

const selectionPseudoCodeString = `selection sort 
list  : array of items
n     : size of list

for i = 1 to n - 1
/* set current element as minimum*/
   min = i    

   /* check the element to be minimum */

   for j = i+1 to n 
      if list[j] < list[min] then
         min = j;
      end if
   end for

   /* swap the minimum element with the current element*/
   if indexMin != i  then
      swap list[min] and list[i]
   end if
end for
 
end procedure`;

async function selection() {
	document.getElementById("Description").classList.remove('hidden');
	document.getElementById("pseudocode").innerHTML = selectionPseudoCodeString;
	document.getElementById("description_heading").innerHTML = "Selection Sort";
	document.getElementById("timeComplexity").innerHTML = "O(n<sup>2</sup>)";
	document.getElementById("description_details").innerHTML = "<b>Selection Sort</b> is conceptually the most simplest sorting algorithm. This algorithm will first find the smallest element in the array and swap it with the element in the first position, then it will find the second smallest element and swap it with the element in the second position, and it will keep on doing this until the entire array is sorted.<br><br>    It is called selection sort because it repeatedly selects the next-smallest element and swaps it into the right place.";
	const ele = document.querySelectorAll(".bar");
	for (let i = 0; i < ele.length; i++) {
		if (hasPressedStop == true) {
			return;
		}
		let min_index = i;
		ele[i].style.background = 'lightgreen';
		for (let j = i + 1; j < ele.length; j++) {
			if (hasPressedStop == true) {
				return;
			}
			ele[j].style.background = 'cyan';

			await delayTime(delay);
			if (hasPressedStop == true) {
				return;
			}
			if (parseInt(ele[j].style.width) < parseInt(ele[min_index].style.width)) {
				if (min_index !== i) {
					ele[min_index].style.background = '#e43f5a';
				}
				min_index = j;
			} else {
				ele[j].style.background = '#e43f5a';
			}
		}
		await delayTime(delay);
		if (hasPressedStop == true) {
			return;
		}
		swap(ele[min_index], ele[i]);
		ele[min_index].style.background = '#e43f5a';
		ele[i].style.background = 'green';
	}
}

const selectionSortbtn = document.querySelector(".selectionSort");
selectionSortbtn.addEventListener('click', async function () {
	hasPressedStop = false;
	disableSortingBtn();
	disableSizeSlider();
	disableNewArrayBtn();
	enableStopSortingBtn();
	await selection();
	if (hasPressedStop == true) {
		disableSpeedSlider();
	} else {
		enableSortingBtn();
		enableSizeSlider();
	}
	enableNewArrayBtn();
	disableStopSortingBtn();
});

const shellPseudoCodeString = `procedure shellSort()
   A : array of items 
	
   /* calculate interval*/
   while interval < A.length /3 do:
      interval = interval * 3 + 1	    
   end while
   
   while interval > 0 do:

      for outer = interval; outer < A.length; outer ++ do:

      /* select value to be inserted */
      valueToInsert = A[outer]
      inner = outer;

         /*shift element towards right*/
         while inner > interval -1 && A[inner - interval] >= valueToInsert do:
            A[inner] = A[inner - interval]
            inner = inner - interval
         end while

      /* insert the number at hole position */
      A[inner] = valueToInsert

      end for

   /* calculate interval*/
   interval = (interval -1) /3;	  

   end while
   
end procedure`;

async function shell() {
	document.getElementById("Description").classList.remove('hidden');
	document.getElementById("pseudocode").innerHTML = shellPseudoCodeString;
	document.getElementById("description_heading").innerHTML = "Shell Sort";
	document.getElementById("timeComplexity").innerHTML = "O(n*logn)";
	document.getElementById("description_details").innerHTML = "<b>Shell Sort</b> is mainly a variation of Insertion Sort. In insertion sort, we move elements only one position ahead. When an element has to be moved far ahead, many movements are involved. The idea of shellSort is to allow exchange of far items. In shellSort, we make the array h-sorted for a large value of h. We keep reducing the value of h until it becomes 1. An array is said to be h-sorted if all sublists of every h’th element is sorted.";
	arr = document.querySelectorAll(".bar");
	let n = arr.length;
	for (let gap = Math.floor(n / 2); gap > 0; gap = Math.floor(gap / 2)) {
		for (let i = gap; i < n; i += 1) {
			let temp = arr[i].style.width;
			let j;
			for (j = i; j >= gap && parseInt(arr[j - gap].style.width.replace('px', '')) > parseInt(temp.replace('px', '')); j -= gap) {
				if (hasPressedStop == true) {
					return;
				}
				arr[j].style.background = 'cyan';
				arr[j - gap].style.background = 'cyan';
				await delayTime(delay);

				arr[j].style.width = arr[j - gap].style.width;


				if (gap == 1) {
					arr[j].style.background = 'green';
					arr[j - gap].style.background = 'green';
				} else {
					arr[j].style.background = '#e43f5a';
					arr[j - gap].style.background = '#e43f5a';

				}
			}
			arr[j].style.width = temp;
			if (gap == 1) {
				arr[i].style.background = 'green';
			}
		}
	}
	arr[0].style.background = 'green';

}

const shellSortbtn = document.querySelector(".shellSort");
shellSortbtn.addEventListener('click', async function () {
	hasPressedStop = false;
	disableSortingBtn();
	disableSizeSlider();
	disableNewArrayBtn();
	enableStopSortingBtn();

	await shell();

	if (hasPressedStop == true) {
		disableSpeedSlider();
	} else {
		enableSortingBtn();
		enableSizeSlider();
	}
	enableNewArrayBtn();
	disableStopSortingBtn();
});

const heapPseudoCodeString = `Heapsort(A) {
    BuildHeap(A)
    for i <- length(A) downto 2 {
        exchange A[1] <-> A[i]
        heapsize <- heapsize -1
        Heapify(A, 1)
    }
    BuildHeap(A) {
        heapsize <- length(A)
        for i <- floor( length/2 ) downto 1
        Heapify(A, i)
    }
    Heapify(A, i) {
        le <- left(i)
        ri <- right(i)
        if (le<=heapsize) and (A[le]>A[i])
        largest <- le
        else
        largest <- i 
        if (ri<=heapsize) and (A[ri]>A[largest])
        largest <- ri
        if (largest != i) {
            exchange A[i] <-> A[largest]
            Heapify(A, largest)
    }
}`;

async function heapSort(arr, n) {
	document.getElementById("Description").classList.remove('hidden');
	document.getElementById("pseudocode").innerHTML = heapPseudoCodeString;
	document.getElementById("description_heading").innerHTML = "Heap Sort";
	document.getElementById("timeComplexity").innerHTML = "O(n*log n)";
	document.getElementById("description_details").innerHTML = "<b>Heap Sort</b> relies on the properties of a heap data structure to sort a data set. A heap is a partially ordered binary tree where every node is greater than or equal to both of its children, hence the largest value in the tree is always in the root node. A binary tree is mapped onto an array so that the node in position i is parent of the nodes in positions 2*i and (2*i + 1), if of course they exist.<br><br>Heapsort sorts an array by first converting the array into a heap so that it has the relational property described above. It then sorts the data in reverse by repeatedly placing the largest unsorted element into its correct place. It does so by repeatedly (1) removing the maximum value in the heap (the value in the root node), (2) putting that value into the sorted array, and (3) rebuilding the heap with one fewer elements. Note that heapsort does not need two separate arrays; it can use use the same array for the heap and the sorted array.";
	// Build heap (rearrange array)
	for (var i = Math.floor(n / 2 - 1); i >= 0; i--) {
		if (hasPressedStop == true) {
			return;
		}
		await heapify(arr, n, i);
	}

	for (var i = n - 1; i > 0; i--) {
		if (hasPressedStop == true) {
			return;
		}
		var temp = arr[0];
		arr[0] = arr[i];
		arr[i] = temp;
		arr[0].style.background = 'cyan';
		arr[i].style.background = 'green';
		swap(arr[0], arr[i]);
		await delayTime(delay);
		await heapify(arr, i, 0);
	}
}

async function heapify(arr, n, i) {
	if (hasPressedStop == true) {
		return;
	}
	var largest = i; 
	var l = 2 * i + 1; 
	var r = 2 * i + 2; 


	console.log(largest)
	console.log(arr)
	if (l < n && parseInt(arr[l].style.width) > parseInt(arr[largest].style.width)) {
		largest = l;
		swap(arr[largest], arr[l]);
	}


	if (r < n && parseInt(arr[r].style.width) > parseInt(arr[largest].style.width)) {
		largest = r;
		swap(arr[largest], arr[r]);
	}

	if (largest != i) {
		var temp = arr[i];
		arr[i] = arr[largest];
		arr[largest] = temp;
		swap(arr[i], arr[largest]);

		await heapify(arr, n, largest);
	}
}

const heapSortbtn = document.querySelector(".heapSort");
heapSortbtn.addEventListener("click", async function () {
	let arr = document.querySelectorAll('.bar');
	let n = arr.length;

	hasPressedStop = false;
	disableSortingBtn();
	disableSizeSlider();
	disableNewArrayBtn();
	enableStopSortingBtn();
	await heapSort(arr, n);
	arr[0].style.background = 'green';
	if (hasPressedStop == true) {
		disableSpeedSlider();
	} else {
		enableSortingBtn();
		enableSizeSlider();
	}
	enableNewArrayBtn();
	disableStopSortingBtn();
});


const radixPseudoCodeString = `Radix-Sort(A, d)
//It works same as counting sort for d number of passes.
//Each key in A[1..n] is a d-digit integer.
//(Digits are numbered 1 to d from right to left.)
    for j = 1 to d do
        //A[]-- Initial Array to Sort
        int count[10] = {0};
        //Store the count of "keys" in count[]
        //key- it is number at digit place j
        for i = 0 to n do
         count[key of(A[i]) in pass j]++
        for k = 1 to 10 do
         count[k] = count[k] + count[k-1]
        //Build the resulting array by checking
        //new position of A[i] from count[k]
        for i = n-1 downto 0 do
         result[ count[key of(A[i])] ] = A[j]
         count[key of(A[i])]--
        //Now main array A[] contains sorted numbers
        //according to current digit place
        for i=0 to n do
          A[i] = result[i]
    end for(j)
end func`;

async function getMax(arr, n) {
    let mx = arr[0].style.width;
    for (let i = 1; i < n; i++) {
        if (hasPressedStop == true)
            return;
        arr[i].style.background = 'cyan';
        if (parseInt(arr[i].style.width) > parseInt())
            mx = arr[i].style.width;
        await delayTime(delay);
        arr[i].style.background = '#e43f5a';
    }
    return mx;
}

async function countSort(arr, n, exp) {
    let output = new Array(n); 
    let i;
    let count = new Array(10);
    for (let i = 0; i < 10; i++) {
        if (hasPressedStop == true) {
            return;
        }
        count[i] = 0;
    }
    for (i = 0; i < n; i++) {
        if (hasPressedStop == true) {
            return;
        }
        count[Math.floor(parseInt(arr[i].style.width) / exp) % 10]++;
    }
    for (i = 1; i < 10; i++) {
        if (hasPressedStop == true) {
            return;
        }
        count[i] += count[i - 1];
    }
    for (i = n - 1; i >= 0; i--) {
        if (hasPressedStop == true) {
            return;
        }
        output[count[Math.floor(parseInt(arr[i].style.width) / exp) % 10] - 1] = arr[i].style.width;
        count[Math.floor(parseInt(arr[i].style.width) / exp) % 10]--;
    }

    for (i = 0; i < n; i++) {
        if (hasPressedStop == true) {
            return;
        }
        let p = 0;
        for (let k = 0; k < n; k++) {
            if (arr[k].style.width == output[i]) {
                p = k;
            }
        }
        arr[i].style.background = 'yellow';
        arr[p].style.background = 'blue';
        swap(arr[i], arr[p]);
        await delayTime(delay);

        if (exp == 100) {
            arr[p].style.background = '#eb34e8';
            arr[i].style.background = 'green';
        } else if (exp == 10) {
            arr[p].style.background = '#22c9b9';
            arr[i].style.background = '#eb34e8';
        } else {
            arr[p].style.background = '#e43f5a';
            arr[i].style.background = '#22c9b9';
        }
    }
}


async function radixSort(arr, n) {
    document.getElementById("Description").classList.remove('hidden');
    document.getElementById("pseudocode").innerHTML = radixPseudoCodeString;
    document.getElementById("description_heading").innerHTML = "Radix Sort";
    document.getElementById("timeComplexity").innerHTML = "O(nd)<sub class='text-sm'>where n is the size of array & d is the no.of digits in the largest number.</sub>";
    document.getElementById("description_details").innerHTML = "<b>Radix Sort</b> is one of the sorting algorithms used to sort a list of integer numbers in order. In radix sort algorithm, a list of integer numbers will be sorted based on the digits of individual numbers. Sorting is performed from least significant digit to the most significant digit.<br><br>Radix sort algorithm requires the number of passes which are equal to the number of digits present in the largest number among the list of numbers. For example, if the largest number is a 3 digit number then that list is sorted with 3 passes.";

    let m = await getMax(arr, n);
    for (let exp = 1; Math.floor(parseInt(m) / exp) > 0; exp *= 10) {
        await countSort(arr, n, exp);
        if (hasPressedStop == true) {
            return;
        }
    }
}
const radixSortbtn = document.querySelector(".radixSort");
radixSortbtn.addEventListener("click", async function() {
    let arr = document.querySelectorAll('.bar');
    let n = arr.length;

    hasPressedStop = false;
    disableSortingBtn();
    disableSizeSlider();
    disableNewArrayBtn();
    enableStopSortingBtn();
    await radixSort(arr, n);

    if (hasPressedStop == true) {
        disableSpeedSlider();
    } else {
        enableSortingBtn();
        enableSizeSlider();
    }
    enableNewArrayBtn();
    disableStopSortingBtn();
});