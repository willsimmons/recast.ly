class App extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      video: exampleVideoData[0],
      videos: exampleVideoData,
      query: null
    };
    this.videoClick = this.videoClick.bind(this);
    this.searchClick = this.searchClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  videoClick(videoID) {
    this.setState({
      video: this.state.videos[videoID]
    });
  }
   
  handleChange(event) {
    console.log(event.target.value);
    this.setState({
      query: event.target.value
    });
  }

  searchClick(data) {
    console.log(data);
    // this.setState({
    //   query: data
    // });
    var options = {
      key: window.YOUTUBE_API_KEY,
      query: this.state.query,
      max: 5
    };
    searchYouTube(options, (data) => {
      this.setState({
        video: data[0],
        videos: data
      });
    });
  }

  componentDidMount () {
    var options = {
      key: window.YOUTUBE_API_KEY,
      query: 'cats',
      max: 5
    };
    searchYouTube(options, (data) => {
      this.setState({
        video: data[0],
        videos: data
      });
      // console.log('new state, new videos', this.state);
    });
  }

  render() {
    return (
      <div>
        <Nav handleChange={this.handleChange} searchClick={this.searchClick}/>
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
