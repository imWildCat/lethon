AboutPage = React.createClass({
  mixins: [ReactMeteorData],

  getMeteorData() {
    return {};
  },

  render() {

    return (
      <div id="about-page">
        <h1>关于</h1>

      </div>
    );
  }
});