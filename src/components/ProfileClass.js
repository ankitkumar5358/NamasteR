import React from "react";

class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userInfo: {
                name: "dummy name",
                location: "dummy location"
            },
        };

    }

    componentDidMount() {

    }
    componentDidUpdate() {
    }
    componentWillUnmount() {
        clearInterval();
    }

    render() {
        const { count } = this.state;
        return (
            <div>
                <h3> Profile Class Component</h3>;
                <img src={this.state.userInfo.avatar_url} />
                <h2> Name : {this.state.userInfo.name} </h2>
                <h3> Location : {this.state.userInfo.location} </h3>
            </div>
        )
    }
}

export default Profile;