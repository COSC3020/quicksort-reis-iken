function quicksort(array) {
    if (array.length <= 1) {
        return array; }
    let stack = [{ left: 0, right: array.length - 1 }];
    while (stack.length > 0) {
        let { left, right } = stack.pop();
        let pivotIndex = createPivot(array, left, right);
        if (pivotIndex - 1 > left) {
            stack.push({ left: left, right: pivotIndex - 1 });
        }
        if (pivotIndex + 1 < right) {
            stack.push({ left: pivotIndex + 1, right: right });
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
