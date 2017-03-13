const React = require('react');

let WeatherForm;
WeatherForm = React.createClass({
    onFormSubmit: function(e) {
        e.preventDefault();

        let city = this.refs.city.value;
        if(city.length > 0) {
            this.refs.city.value = '';
            this.props.onSearch(city);
        }

    },
    render: function() {
        return (
            <div>
                <h3>WeatherForm Component</h3>
                <form onSubmit={this.onFormSubmit}>
                    <input type="text" ref="city" placeholder="City"/>
                    <button type="submit" className="button hollow expanded">Fetch Weather</button>
                </form>
            </div>
        )
    }
});

module.exports = WeatherForm;