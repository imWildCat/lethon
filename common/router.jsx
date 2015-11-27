FlowRouter.route("/", {
  name: "home",
  action() {
    ReactLayout.render(FrontPageLayout, {
      content: <IndexPage />
    });
  }
});

FlowRouter.route('/post/:_id', {
  name: 'post',
  action(params) {
    ReactLayout.render(FrontPageLayout, {
      content: <PostPage _id={params._id}/>
    });
  }
});