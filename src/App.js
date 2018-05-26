import React, { Component } from 'react';
import { Route, Switch } from 'react-router';
import { HashRouter } from 'react-router-dom';

import PostResume from "./pages/PostResume";
import Homepage from "./pages/Homepage";


class App extends Component {
    constructor(props) {
        super(props);

        // insert history
        const href = window.location.href;
        window.history.replaceState({}, '', './#');
        window.history.pushState({}, '', href);
    }
    componentDidMount() {
    }
    render() {
        return (
            <HashRouter onUpdate={(e) => {console.log(e)}}>
                <Switch>
                    <Route exact path={['/', '/homepage']} component={Homepage} />
                    <Route exact path="/post" component={PostResume} />
                </Switch>
            </HashRouter >
        )
    }
}

export default App;
