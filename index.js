// Function to perform insertion sort
function insertionSort(arr) {
    // Loop through each element starting from index 1
    for (let i = 1; i < arr.length; i++) {
        // Store the current element to be compared
        let current = arr[i];
        // Store the index of the previous element
        let j = i - 1;

        // Move elements of arr[0..i-1], that are greater than current, to one position ahead of their current position
        while (j >= 0 && arr[j] > current) {
            arr[j + 1] = arr[j];
            j = j - 1;
        }
        // Insert the current element at its correct position
        arr[j + 1] = current;
    }
    return arr;
}

// Example usage:
let array = [12, 11, 13, 5, 6];
console.log("Original Array:", array);
console.log("Sorted Array:", insertionSort(array));