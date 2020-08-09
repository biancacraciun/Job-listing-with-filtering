import React, { Component } from 'react';
import { connect } from 'react-redux';
import { closeError } from '../../store/actions';

import '../../styles/error/error.scss';

class Error extends Component {
    render() {
        const message = "You selected it once! Try another one tag!"
        return (
            <div class="error">
                {
                    this.props.error ? 
                    <p class="show-error">{message} </p>:
                    null
                }
                <button type="button" onClick={() => this.props.onCloseError()}>Close</button>
            </div>
        )
    }
};

const mapStateToProps = (state) => {
    return {
        error: state.error
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onCloseError: () => dispatch(closeError())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Error);