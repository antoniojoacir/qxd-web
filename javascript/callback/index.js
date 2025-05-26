const calc_callback = (numberOne, numberTwo, callback) => {
    const res = numberOne + numberTwo
    callback(res)
    return res
}

const show = (value) => {
    console.log(value)
}

calc_callback(4,5, show)