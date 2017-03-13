const React = require('react'),
    Navigation = require('Navigation');

let Main;
Main = props => {
    "use strict";
    return (
        <div>
            <Navigation/>
            <div className="row">
                <div className="columns medium-6 large-4 small-centered">
                    {props.children}
                </div>
            </div>
        </div>
    );
};

module.exports = Main;