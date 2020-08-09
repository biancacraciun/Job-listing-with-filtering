import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionTypes from '../../store/actions';
import { capitalize } from '../../functions/functions';

import '../../styles/activeStates.scss';

class ActiveStates extends Component {
    render() {
        return (
            <div className="active-state">
                <div className="tags">
                    {this.props.clickedTags.map(tag => {
                        return (
                            <span key={Math.random()}> 
                                {capitalize(tag)} 
                                <button 
                                    type="button"
                                    onClick={() => {
                                        let tags = this.props.clickedTags;
                                        tags.splice(tags.indexOf(tag), 1);
                                        this.props.onRemoveTag(tags)}
                                    }
                                    className="close"  
                                > X </button>
                            </span>
                        );
                    })}
                </div>

                <button type="button" id="clear" onClick={this.props.onClearActiveState}> Clear </button>
            </div>
        );
    }
};

const mapStateToProps = state => {
    return {
        clickedTags: state.tags,
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onRemoveTag: () => dispatch({ type: actionTypes.REMOVE_TAG }),
        onClearActiveState: () => dispatch({ type: actionTypes.CLEAR_ACTIVE_STATE })
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ActiveStates);