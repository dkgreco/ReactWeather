const React = require('react');
let {Link} = require('react-router');

let About;
About = () => {
    "use strict";
    return (
        <div>
            <h1 className="text-center">About</h1>
            <article>
                Welcome to this simple Weather Application built with React.js!<br/><br/>This application leverages the
                following technologies:
                React.js, Node.js, Foundation, Webpack, Heroku, Git & GitHub, as well as an API provided by
                openWeatherMap.<br/><br/>The purpose of the
                webapp is to demonstrate what can be done with React.js using a simple weather api call as an example.
            </article>
            <br/>
            <p>
                You may find the GitHub repository for this project
                <a href="https://github.com/dkgreco/ReactWeather" target="_blank"> here</a>.
            </p>
            <p>
                You may find more information about the openWeatherMap API
                <a href="http://openweathermap.org/" target="_blank"> here</a>.
            </p>
            <p>
                You may find more information about Foundation
                <a href="http://foundation.zurb.com/sites/docs/" target="_blank"> here</a>.
            </p>
        </div>
    );
};

module.exports = About;

/*
 <Link to="https://github.com/dkgreco/ReactWeather"> here</Link>.
 <Link to="http://openweathermap.org/"> here</Link>.
 <Link to="http://foundation.zurb.com/sites/docs/"> here</Link>.
 */