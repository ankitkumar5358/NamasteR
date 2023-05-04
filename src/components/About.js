import { Outlet } from "react-router-dom";
import ProfileFunctionalComponent from "./Profile";
import Profile from "./ProfileClass";
import {Component} from "react";
import "./css/About.css"

class About extends Component {
    constructor(props) {
        super(props);        
    }
    componentDidMount() {
    }
    render() {
        return (
            <div className="main">
            <h2 className="heading" >About 2 Class Component</h2>
            <p className="sub-heading">Namaste React Course Live</p>
            <Profile name={"First Child"} xyz={"MERN"} />
            </div>
        )
    }
}
export default About;