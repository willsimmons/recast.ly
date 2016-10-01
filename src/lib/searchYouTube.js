var searchYouTube = (options, callback) => {
  fetch(`https://www.googleapis.com/youtube/v3/search?type=video&part=snippet&q=${options.query}&key=${options.key}&maxResults=${options.max}`).then(r => r.json())
    .then(data => callback(data.items))
    .catch(e => {
      console.log('Booo');
      callback(exampleVideoData);
    });
};

window.searchYouTube = searchYouTube;

  // $.ajax({
  //   url: `https://www.googleapis.com/youtube/v3/search?type=video&part=snippet&q=${options.query}&key=${options.key}&maxResults=${options.max}`,
  //   success: (data) => {
  //     callback(data.items);
  //   },
  //   error: () => {
  //     callback(exampleVideoData);
  //     console.log('failed');
  //   }
  // });

