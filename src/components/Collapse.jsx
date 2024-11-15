import PropTypes from 'prop-types';
import React from 'react';

class Collapse extends React.Component{

    constructor(){
        super();
        this.state = {
            showContent: true
        }
    }

    render(){
        return (
            <div>
                <div>
                    <a className="btn btn-primary w-100">
                        Link with href
                    </a>
                    {
                        this.state.showContent ? (
                            <div className="collapse show">
                                {this.props.children}
                            </div>
                        ) : null
                    }
                </div>
            </div>
        )
    }
}

Collapse.propTypes = {
    href: PropTypes.string.isRequired,
    children: PropTypes.object.isRequired
};


export default Collapse
