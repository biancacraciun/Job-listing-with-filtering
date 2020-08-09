import React, { Component } from 'react';
import { connect } from 'react-redux';

import Card from './card';
import '../../styles/jobs.scss';
import { uppercase, exclamationMark, capitalize } from '../../functions/functions';
import ActiveStates from '../active/activeStates';
import { initJobs } from '../../store/actions';

class Jobs extends Component {

    componentDidMount() {
        this.props.onInitJobs();
    };

    render() {
        const jobs = this.props.jobsList;
        const activeTags = this.props.selectedTags;

        let activeTag = "";
        if(activeTags.length !== 0) {
            activeTags.map(tag => {
                activeTag = tag;
            })
        };

        let filtering = jobs.filter(job => {
            return job.tags.indexOf(activeTag) !== -1;
        });

        return (
            <div className="tablets">
                { this.props.selectedTags.length !== 0 ? 
                    <ActiveStates /> :
                    null
                }

                {
                    this.props.selectedTags.length === 0 ?
                    this.props.jobsList.map((job) => {
                        const upperCase = uppercase(job.featured);
                        const addExclamationMark = exclamationMark(job.new);
                        const jobTitle = capitalize(job.job);

                        return <Card 
                            key={Math.random()}
                            company={job.company}
                            new={addExclamationMark}
                            featured={upperCase}
                            position={jobTitle}
                            posted={job.date}
                            type={job.type}
                            location={job.location}
                            tags={job.tags}
                            logo={job.logo}
                        /> 
                        
                    }) :
                    filtering.map((job) => {
                        const upperCase = uppercase(job.featured);
                        const addExclamationMark = exclamationMark(job.new);
                        const jobTitle = capitalize(job.job);

                        return <Card 
                            key={Math.random()}
                            company={job.company}
                            new={addExclamationMark}
                            featured={upperCase}
                            position={jobTitle}
                            posted={job.date}
                            type={job.type}
                            location={job.location}
                            tags={job.tags}
                            logo={job.logo}
                        /> 
                        
                    })
                }
            </div>
        )
    }
};

const mapStateToProps = (state) => {
    return {
        jobsList: state.jobs,
        selectedTags: state.tags,
        show: state.show
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onInitJobs: () => dispatch(initJobs())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Jobs);