// App component - represents the whole app
App = React.createClass({

  // This mixin makes the getMeteorData method work
  mixins: [ReactMeteorData],

  render() {
    return (
      <div className="container">
        hi
      </div>
    );
  }
});
