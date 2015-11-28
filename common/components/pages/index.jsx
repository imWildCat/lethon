IndexPage = React.createClass({
  mixins: [ReactMeteorData],

  getMeteorData() {
    return {};
  },

  render() {

    var settings = {
      dots: true,
      infinite: true,
      speed: 750,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 7000,
      centerMode: true,
      fade: true,
    };

    let aboutPath = FlowRouter.path('about', {});

    return (
      <div id="index-page">
        <ReactSlick {...settings} className="slick-slider-wrapper">
          <div>
            <div className="img"></div>
          </div>
          <div>
            <div className="img school-1"></div>
          </div>
          <div>
            <div className="img book-1"></div>
          </div>
          <div>
            <div className="img student-1"></div>
          </div>
          <div>
            <div className="img book-2"></div>
          </div>
        </ReactSlick>

        <div className="logo">
          <h1>滕州一中校友会</h1>
        </div>

        <div className="title-wrapper">
          <div className="container">
            <div className="inner-container">
              <h2 className="site-title">欢迎回家</h2>
              <h3 className="site-subtitle">我们致力于连接世界各地的一中校友</h3>
            </div>
          </div>
        </div>

        <div className="nav">
          <ul>
            <li><a href={aboutPath}>关于</a></li>
            <li>留言</li>
          </ul>
        </div>

      </div>
    );
  }
});