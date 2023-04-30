import React from "react";

class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userInfo : {
                name : "dummy name",
                location : "dummy location"
            },
        };

        console.log("child constructor" + this.props.name);
    }

    componentDidMount() {
        // place to make api calls = best
        // const data = await fetch("https://api.github.com/users/ankitkumar5358");
        // const json = await data.json();
        // console.log(json);
        // // this.setState = ({
        // //     userInfo : json,
        // // })
        // this.setState({
        //     userInfo : json,
        // });
        setInterval(()=>{
            console.log("child component did mount" + this.props.name);
        }, 1000)

    }
    componentDidUpdate() {
        console.log('componentDidUpdate');
    }
    componentWillUnmount() {
        clearInterval();
        console.log('componentWillUnmount');
    }
    
    render() {
        const {count} = this.state;
        console.log(" child render " + this.props.name);
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