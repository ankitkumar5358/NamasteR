import { render } from "@testing-library/react";
import Header from "../components/Header";
import { Provider } from "react-redux";
import store from "../utils/store";
import {StaticRouter} from "react-router-dom/server"

test("logo should load on header render", () => {
    // logo loader
    const header = render(
    <StaticRouter>
        <Provider store={store}><Header/></Provider>
    </StaticRouter>
    );
    console.log(header);
    //check if logo is loaded


});