import axios from 'axios'
export const EMPLOYEE_UPDATE = 'EMPLOYEE_UPDATE'

export const actionUpdateEmployee = (step) => {
    return {
        type: EMPLOYEE_UPDATE,
        payload: step
    }
}
// async action
export const requestEmployee = function (url) {
    return function (dispatch, getState) {
        axios({
            url,
            method: "GET",
            responseType: "json",
        }).then(result => {
            if (result.status === 200) {
                const data = result.data;
                const actionUpdate = actionUpdateEmployee(data);
                dispatch(actionUpdate);
            }
        })
        .catch(eror=>console.log(eror));
    }
}