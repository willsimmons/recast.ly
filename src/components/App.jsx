class App extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      video: exampleVideoData[0],
      videos: exampleVideoData
    };
    this.onListItemClick = this.onListItemClick.bind(this);
  }

  onListItemClick(video) {
    console.log(this);
    this.setState({
      video: exampleVideoData[video]
    });
  }

  render(props) {
    return (
      <div>
        <Nav />
        <div className="col-md-7">
          <VideoPlayer video={this.state.video}/>
        </div>
        <div className="col-md-5">
          <VideoList videos={this.state.videos}/>
        </div>
      </div>
    );
  }
}
// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
