const React = require('react'),
    {Link, IndexLink} = require('react-router');

let Navigation;
Navigation = React.createClass({
    onSearch: function(e) {
        "use strict";
        e.preventDefault();
        alert('Search not yet functional.');
    },
    render: function() {
        "use strict";
        return (
            <div className="top-bar">
                <div className="top-bar-left">
                    <ul className="menu">
                        <li className="menu-text">
                            React Weather App
                        </li>
                        <li>
                            <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>
                                Get Weather
                            </IndexLink>
                        </li>
                        <li>
                            <Link to="/about" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>
                                About
                            </Link>
                        </li>
                        <li>
                            <Link to="/examples" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>
                                Examples
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="top-bar-right">
                    <form onSubmit={this.onSearch}>
                        <ul className="menu">
                            <li>
                                <input type="Search" placeholder="Enter City"/>
                            </li>
                            <li>
                                <input type="Submit" className="button" value="Get Weather"/>
                            </li>
                        </ul>
                    </form>
                </div>
            </div>
        );
    }
});

module.exports = Navigation;

/*
 <div>
 <h2>Navigation Block</h2>
 <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Get Weather</IndexLink>
 <Link to="/about" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>About</Link>
 <Link to="/examples" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Examples</Link>
 </div>
 */