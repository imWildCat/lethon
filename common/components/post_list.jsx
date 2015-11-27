PostList = React.createClass({
  mixins: [ReactMeteorData],
  getMeteorData() {
    const handle = Meteor.subscribe('posts');
    const data = {};
    if (handle.ready()) {
      data.posts = Posts.find({}, {sort: {_id: 1}}).fetch();
    }

    return data;
  },
  getList() {
    return <ul>
      {this.data.posts.map(task => {
        const path = FlowRouter.path('post', {_id: task._id})
        return <li key={task._id}><a href={path}>{task.title}</a></li>
        })}
    </ul>;
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
      <div>
        <ReactSlick {...settings} className="slick-slider-wrapper">
          <div><img src="http://ww1.sinaimg.cn/large/7deee1d1jw1eyftjd7kxzj21kw126b29.jpg" alt="city-1"/></div>
          <div><img src="http://ww4.sinaimg.cn/large/7deee1d1jw1eyfulfkypqj21kw11x14r.jpg" alt="school-1"/></div>
          <div><img src="http://ww3.sinaimg.cn/large/7deee1d1jw1eyfuqkb8xvj21kw0w2qed.jpg" alt="book-1"/></div>
          <div><img src="http://ww2.sinaimg.cn/large/7deee1d1jw1eyfuu25dfmj21kw11xwti.jpg" alt="student-1"/></div>
          <div><img src="http://ww2.sinaimg.cn/large/7deee1d1jw1eyfuswd46uj21kw11x4ev.jpg" alt="book-2"/></div>
        </ReactSlick>
        This is the post list1
        {(this.data.posts)? this.getList() : "loading..."}
      </div>
    );
  }
});

//<div><div className="bg city-1"></div></div>
//<div><div className="bg school-1"></div></div>
//  <div><div className="bg book-1"></div></div>
//  <div><div className="bg student-1"></div></div>
//  <div><div className="bg book-2"></div></div>