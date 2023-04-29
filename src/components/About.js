import { Outlet } from "react-router-dom";
import ProfileFunctionalComponent from "./Profile";
import Profile from "./ProfileClass";
import {Component} from "react";

class About extends Component {
    constructor(props) {
        super(props);
        
        console.log('parent constructor');
    }
    componentDidMount() {
        // place to make api calls = best
        console.log("parent - component did mount");
    }
    render() {
        console.log('parent render');
        return (
            <>
            <h2>About 2 Class Component</h2>
            <p>Namaste React Course Live</p>
            {/* <ProfileFunctionalComponent name={"Ankit"} /> */}
            <Profile name={"First Child"} xyz={"MERN"} />
            
            </>
        )
    }
}
// 12:16:00
export default About;