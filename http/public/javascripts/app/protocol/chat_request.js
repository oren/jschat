var JsChatRequest = {
  get: function(url, callback) {
    new Ajax.Request(url, {
      method: 'get',
      parameters: { time: new Date().getTime(), room: currentRoom() },
      onFailure: function() {
        Display.add_message("Server error: couldn't access: #{url}".interpolate({ url: url }), 'server');
      },
      onComplete: callback
    });
  }
};
