import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { INIT } from '../../redux/constants';
import styles from './index.scss';

class Login extends Component {

    constructor() {
        super()
        this.state = {
            value: 456
        }
    }
    componentWillMount() {
        console.log(this.props)
        const { value } = this.state;
        this.props.dispatch({
            type: INIT,
            data: value
        })
        console.log(styles.div)
    }
    render() {
        return (
            <div className={styles.div + ' div'}>I am Login</div>
        )
    }
}

export default connect( state => {
    return {
        test: state.test
    }
} )(Login);