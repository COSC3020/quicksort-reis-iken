[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/ZLHpg3lN)
# Quicksort

Implement an iterative (no recursive calls) version of quicksort. Use the
template I've provided in `code.js`. Test your new function; I've provided some
basic testing code that uses [jsverify](https://jsverify.github.io/) in
`code.test.js`.

Hint: To make quicksort iterative, think about the part of the array each
recursive call considers.

## Runtime Analysis

Analyse the time complexity of your implementation and give a $\Theta$ bound for
its worst-case runtime. Add your answer, including your reasoning, to this
markdown file.


**MY ANSWER:**

$T(n) = T(n-1) + n + T(1)$ because T(n-1) represents partitioning the bigger sub-array which has a size of n - 1, the n represents the iterations of the partitioning, and T(1) represents partitioning the smaller partition (this is a constant).

So $T(n) = T(n-1) + n + T(1)$

$T(n-1) = T(n-2) + (n-1) + T(1)$

$T(n-2) = T(n-3) + (n-2) + T(1)$

To generalize:

$T(n) = (1 + 2 + ... + n) + n + T(1)$

We can simplify:

$T(n) = (n(n+1)/2) + n + T(1)$

$T(n) = n^2/2 + n + T(1)$

Obviously we only care about the dominant term, $n^2/2$

Thus, we can conclude that the $\Theta$ bound for the worst-case runtime is $\Theta(n^2)$
