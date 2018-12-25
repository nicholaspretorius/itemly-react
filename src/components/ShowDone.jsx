import React from 'react';
import { connect } from 'react-redux';

const ShowDone = ({ showDone, toggleShowDone }) => (
    <div className="show-completed">
        <label>
            Show completed todos? 
            <input type="checkbox" checked={ showDone } onChange={ toggleShowDone }/>
        </label>
    </div>
);

const mapStateToProps = ({ showDone }) => ({ showDone });

const mapDispatchToProps = (dispatch) => ({
    toggleShowDone(e) {
        dispatch({ type: 'SHOW_DONE', showDone: e.target.checked });
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(ShowDone);