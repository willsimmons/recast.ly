var searchYouTube = (options, callback) => {
  $.ajax({
    type: 'GET',
    url: 'https://www.googleapis.com/youtube/v3/search',
    data: {
      'key': options[key],
      'q': 'cats',
      'videoEmbeddable': true,
      'type': 'video',
      'maxResults': 5,
      'part': 'snippet'
    },
    success: (data) => {
      console.log(data);
    },
    error: (error) => {
      console.error(error);
    }
  });
};

window.searchYouTube = searchYouTube;
