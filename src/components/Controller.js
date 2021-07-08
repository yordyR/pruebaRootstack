import React from 'react';
import {connect} from 'react-redux'


const Controller = () => {
    return (
        <div>
            <button>
                dispatch
            </button>
        </div>
    )
}

export default connect()(Controller)