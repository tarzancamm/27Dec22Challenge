// Complete the findNextSquare method that finds the next integral perfect square after the one passed as a parameter. Recall that an integral perfect square is an integer n such that sqrt(n) is also an integer.

// If the parameter is itself not a perfect square then -1 should be returned. You may assume the parameter is non-negative.

const findNextSquare = (sq) => {
    if (!Number.isInteger(Math.sqrt(sq))) {
        return -1
    }

    let nextNum = Math.floor(Math.sqrt(sq) + 1)
    return Math.pow(nextNum, 2)
}


console.log(findNextSquare(626))