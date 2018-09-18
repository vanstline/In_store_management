import { fromJS } from 'immutable';
import { INIT } from '../constants';

const defaultState = fromJS({
    test: 0
})
export default ( state = defaultState, action ) => {

    switch(action.type) {
        case INIT:
            return state.set('test', action.data)
        default:
            return state
    }
}