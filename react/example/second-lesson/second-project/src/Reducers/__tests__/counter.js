import counterReducer from "../counterReducer";
import expectExport from "expect";
import { actionCrease, actionMul } from "../../actions/counter";
// const expectExport = require("exoect");
describe('test something here', () => {
    it('counter', () => {
        const initialState = counterReducer();
        expectExport(initialState).toEqual({
            counter: 0
        })

    })
    it('increase counter',()=>{
        const initialState = counterReducer();
        const newState = counterReducer(initialState,actionCrease(5))
        expect(newState).toEqual({counter:5})
    })

    it('double counter',()=>{
        const initialState = counterReducer();

        const newstate1 = counterReducer({counter:5},actionMul());
        expect(newstate1).toEqual({counter:10})
    })

})