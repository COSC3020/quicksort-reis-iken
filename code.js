function quicksort(array) {
    if (array.length <= 1) {
        return array; }
    let stack = [];
    stack.push(0);
    stack.push(array.length - 1);
    while (stack.length > 0) {
        let left = stack.pop();
        let right = stack.pop();
        let pivotIndex = createPivot(array, left, right);
        if (pivotIndex - 1 > left) {
            stack.push(left);
            stack.push(pivotIndex - 1);
        }
        if (pivotIndex + 1 < right) {
            stack.push(pivotIndex + 1);
            stack.push(right);
        }
    }
    return array;
}

function createPivot(array, left, right) {
    let pivot = array[right];
    let i = left - 1;
    for (let j = left; j < right; j++) {
        if (array[j] <= pivot) {
            i++;
            swap(array, i, j);
        }
    }
    swap(array, i + 1, right);
    return i + 1;
}

function swap(array, i, j) {
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
}
