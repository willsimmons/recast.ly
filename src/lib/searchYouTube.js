var searchYouTube = (options, callback) => {
  var context = this;
  $.ajax({
    url: `https://www.googleapis.com/youtube/v3/search?type=video&part=snippet&q=${options.query}&key=${options.key}&maxResults=${options.max}`,
    success: (data) => {
      callback(data.items);
    },
    error: () => {
      callback(exampleVideoData);
      console.log('failed');
    }
  });
};

window.searchYouTube = searchYouTube;

