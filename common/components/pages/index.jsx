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

    return (
      <div id="index-page">
        <ReactSlick {...settings} className="slick-slider-wrapper">
          <div><img src="http://ww1.sinaimg.cn/large/7deee1d1jw1eyftjd7kxzj21kw126b29.jpg" alt="city-1"/></div>
          <div><img src="http://ww4.sinaimg.cn/large/7deee1d1jw1eyfulfkypqj21kw11x14r.jpg" alt="school-1"/></div>
          <div><img src="http://ww3.sinaimg.cn/large/7deee1d1jw1eyfuqkb8xvj21kw0w2qed.jpg" alt="book-1"/></div>
          <div><img src="http://ww2.sinaimg.cn/large/7deee1d1jw1eyfuu25dfmj21kw11xwti.jpg" alt="student-1"/></div>
          <div><img src="http://ww2.sinaimg.cn/large/7deee1d1jw1eyfuswd46uj21kw11x4ev.jpg" alt="book-2"/></div>
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
      </div>
    );
  }
});