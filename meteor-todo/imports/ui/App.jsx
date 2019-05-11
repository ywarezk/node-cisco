import React from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';
import { Tasks } from '../api/tasks';

const App = ({tasks}) => {
    const titleRef = React.createRef();
    const addTask = (event) => {
        Tasks.insert({title: titleRef.current.value});
        event.preventDefault();
    }
    return (
        <div>
            <ul>
                {
                    tasks.map((singleTask) => <li key={singleTask._id._str}>{singleTask.title}</li>)
                }
            </ul>
            <form onSubmit={addTask}>
                <input type="text" ref={titleRef} />
            </form>
        </div>
    );
}

App.propTypes = {
    tasks: PropTypes.array
}

App.defaultProps = {
    tasks: []
}

export default withTracker(() => {
    return {
        tasks: Tasks.find({}).fetch()
    }
})(App);
