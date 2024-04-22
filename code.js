function quicksort(array, low, high) {
    let stack = [];
    stack.push({ low: low, high: high });
    while (stack.length > 0) {
        let { low, high } = stack.pop();
        let pivotIndex = makePivot(array, low, high);
        if (pivotIndex - 1 > low) {
            stack.push({ low: low, high: pi - 1 });
        }
        if (pivotIndex + 1 < high) {
            stack.push({ low: pi + 1, high: high });
        }
    }
}

function makePivot(array, low, high) {
    let pivot = array[high];
    let i = low - 1;
    for (let j = low; j <= high - 1; j++) {
        if (array[j] <= pivot) {
            i++;
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    [array[i + 1], array[high]] = [array[high], array[i + 1]];
    return i + 1;
}
