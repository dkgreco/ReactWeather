const React = require('react');

let ErrorModal;
ErrorModal = React.createClass({
    componentDidMount: function() {
        "use strict";
        let modal = new Foundation.Reveal($('#error-modal'));
        modal.open();
    },
    render: function() {
        "use strict";
        return (
            <div id="error-modal" className="reveal tiny text-center" data-reveal="">
                <h4>
                    Error Title
                </h4>
                <p>
                    Error Message
                </p>
                <p>
                    <button className="button hollow" data-close="">
                        Okay
                    </button>
                </p>
            </div>
        )
    }
});

module.exports = ErrorModal;