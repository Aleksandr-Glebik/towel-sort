
// You should implement your task here.

module.exports = function towelSort (matrix) {
    // console.log('matrix', matrix);
    if (matrix === undefined) {
        return []
    } else {
        let newArr = []
        for (let i = 0; i < matrix.length; i++) {
            if (i === 0) {
                newArr.push(matrix[i])
            } else if (i % 2 !== 0) {
                matrix[i].reverse()
                newArr.push(matrix[i])
            } else if (i % 2 === 0) {
                newArr.push(matrix[i])
            }
        }

        let concatArr = []
        newArr.forEach((item) => {
            for (i = 0; i < item.length; i ++) {
                concatArr.push(item[i])
            }
        })
        // console.log('concatArr', concatArr);
        return concatArr
    }

}
