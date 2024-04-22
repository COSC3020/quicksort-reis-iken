function quicksort(array) {
    let stack = [];
    stack.push(0);
    stack.push(array.length - 1);
    while (stack.length > 0) {
        let high = stack.pop();
        let low = stack.pop();
        let pivotIndex = makePivot(array, low, high);
        if (pivotIndex - 1 > low) {
            stack.push(low);
            stack.push(pivotIndex - 1);
        }
        if (pivotIndex + 1 < high) {
            stack.push(pivotIndex + 1);
            stack.push(high);
        }
    }
    return array;
}

function makePivot(array, low, high) {
    let pivot = array[high];
    let i = low;
    for (let j = low; j < high; j++) {
        if (array[j] < pivot) {
            swapElements(array, i, j);
            i++;
        }
    }
    swapElements(array, i, high);
    return i;
}

function swapElements(array, i, j) {
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
}
