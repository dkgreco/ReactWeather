const React = require('react');
let {Link} = require('react-router');

let Examples = () => {
  "use strict";
  return (
      <div>
          <h1 className="text-center">Examples</h1>
          <p>Here are a few examples to try:</p>
          <ol>
              <li>
                  <Link to="/?city=Broomfield">Broomfield, CO</Link>
              </li>
              <li>
                  <Link to="/?city=Pheonix">Pheonix, AZ</Link>
              </li>
              <li>
                  <Link to="/?city=Mission%20Viejo">Mission Viejo, CA</Link>
              </li>
          </ol>
      </div>
  );
};

module.exports = Examples;