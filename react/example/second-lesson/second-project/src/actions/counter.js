export const COUNTER_INCREASE = "COUNTER_INCREASE";
export const actionCrease = (step) => {
    return {
        type: COUNTER_INCREASE,
        payload: step
    }
}
export const COUNTER_DECREASE = 'COUNTER_DECREASE'
export const actionDecrease = (step) => {
    return {
        type: COUNTER_DECREASE,
        payload: step
    }
}

export const COUNTER_MUL = 'COUNTER_MUL'
export const actionMul= (step) => {
    return {
        type: COUNTER_MUL,
        payload: step
    }
}
