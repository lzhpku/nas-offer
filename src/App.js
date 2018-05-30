import React, { Component } from 'react';
import { Route, Switch } from 'react-router';
import { HashRouter } from 'react-router-dom';

import PostResume from "./pages/PostResume";
import Homepage from "./pages/Homepage";
import PersonResume from "./pages/PersonResume";
import About from './pages/About';

import './app.css';


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
            <div>
                <div className="background" />
                <HashRouter onUpdate={(e) => {console.log(e)}}>
                    <Switch>
                        <Route exact path={['/', '/homepage']} component={Homepage} />
                        <Route exact path="/post" component={PostResume} />
                        <Route exact path="/resume/:resumeId" component={PersonResume} />
                        <Route exact path="/about" component={About} />
                    </Switch>
                </HashRouter >
            </div>
        )
    }
}

export default App;
