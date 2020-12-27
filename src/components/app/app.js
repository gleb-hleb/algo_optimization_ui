import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
// import PropTypes from 'prop-types';
import Header from '../header';
import NavigationBar from "../navigation_bar";

class App extends PureComponent {
    render() {
        return (
            <div>
                <Header/>
                <NavigationBar/>
            </div>
        );
    }
}

// App.propTypes = {

// };

const mapStateToProps = (state) => ({
    foo: state,
});

export default connect(mapStateToProps)(App);