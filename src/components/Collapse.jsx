import PropTypes from 'prop-types';
import React from 'react';

class Collapse extends React.Component {

    state = { showContent: false };

    showMore = () => {
        this.setState({ showContent: !this.state.showContent })
    }

    // componentDidMount(){
    //     console.log("Component is created");
    // }

    // componentDidUpdate(){
    //     console.log("Component is updated");
    // }

    render() {
        return (
            <div>
                <div>
                    <button className="btn btn-primary w-100" onClick={this.showMore}>
                        {React.Children.map(this.props.children, children => children.props.text)}
                    </button>
                    {
                        this.state.showContent ? (
                            <div className="collapse show">
                                {React.Children.map(this.props.children, children => children)}
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
