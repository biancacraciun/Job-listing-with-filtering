import React, {Component} from 'react';
import { connect } from 'react-redux';

import { addTag, error } from '../../store/actions';
import { capitalize } from '../../functions/functions';

import '../../styles/card.scss';

class Card extends Component {
    constructor(props) {
        super(props);
    };

    render() {
        return (
            <div className="container">
                <img src={this.props.logo} alt={this.props.company} name={this.props.company} />
                <div className="details">
                    <section className="company">
                        <ul>
                            <li>{this.props.company}</li>
                            <li id={this.props.new !== null ? "new" : null}>{this.props.new}</li>
                            <li id={this.props.featured !== null ? "featured" : null}>{this.props.featured}</li>
                        </ul>
                    </section>
    
                    <section className="job-title">
                        <h3>{this.props.position}</h3>
                        <div id="line"/>
                        <ul>
                            {this.props.tags.map((tag) => {
                                const capitalizedTag = capitalize(tag);
                                return <li class="tag" key={Math.random()} onClick={() => {
                                    let value = this.props.onAddTag(tag);
                                    let duplicate = this.props.clickedItems.indexOf(value.clickedTag) === -1;
                                    if(!duplicate) {
                                        this.props.onError();
                                    } 
                                    return [...this.props.clickedItems, value.clickedTag]
                                }}>{capitalizedTag}</li>
                            })}
                        </ul>
                    </section>
                    
                    <section className="position-details">
                        <ul>
                            <li>{this.props.posted}</li>
                            <li>{this.props.type}</li>
                            <li>{this.props.location}</li>
                        </ul>
                    </section>
                </div>
            </div>
        );
    }
};

const mapStateToProps = state => {
    return {
        clickedItems: state.tags,
        error: state.error
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onAddTag: (tagName) => dispatch(addTag(tagName)),
        onError: () => dispatch(error())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Card);