import { Outlet } from "react-router-dom";
import Profile from "./Profile";
import {Component} from "react";

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