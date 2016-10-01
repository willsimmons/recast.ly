class App extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      video: exampleVideoData[0] || newVideos,
      videos: exampleVideoData || newVideos,
    };
    this.videoClick = this.videoClick.bind(this);
    this.searchClick = this.searchClick.bind(this);

  }

  videoClick(videoID) {
    this.setState({
      video: exampleVideoData[videoID]
    });
  }
    
  searchClick(data) {
    options[q] = data;
  }

  componentDidMount () {
    var newOptions = {
      key: window.YOUTUBE_API_KEY,
      query: 'cats',
      max: 5
    };
    searchYouTube(newOptions, (newVideos) => {
      this.props.setState({
        video: newVideos[0],
        videos: newVideos
      });
    });
  }

  render() {
    return (
      <div>
        <Nav searchClick={this.searchClick}/>
        <div className="col-md-7">
          <VideoPlayer video={this.state.video}/>
        </div>
        <div className="col-md-5">
          <VideoList videos={this.state.videos} videoClick={this.videoClick} />
        </div>
      </div>
    );
  }
}
// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
