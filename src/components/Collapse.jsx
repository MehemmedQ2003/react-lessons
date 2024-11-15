import PropTypes from 'prop-types';
import React from 'react';

class Collapse extends React.Component{

    constructor(){
        super();
        this.state = {
            showContent: false
        }

        // ******** 1 ******** \\
        // this.showMore = () =>{
        //     this.setState({showContent: true})
        //     console.log(this)
        // }

        // ******** 2 ******** \\
        // this.showMore = this.showMore.bind(this)
    }

    // ******** 2 ******** \\
    // showMore()){
    //     this.setState({showContent: true})
    // }


    showMore = () => {
        this.setState({showContent: !this.state.showContent})
    }

    render(){
        return (
            <div>
                <div>
                    <button className="btn btn-primary w-100" onClick={this.showMore}>
                        Link with href
                    </button>
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
