// Create the Faye client. 
// (All you need is the mount point for the Faye server you want to connect to)
 var client = new Faye.Client('/faye')
 
$(document).ready(function () {

  $("#submit-btn").click(function (evt) {
    evt.preventDefault()
    var newMessage = $("#new-message").val()
    // We PUBLISH our new message to a CHANNEL (/messages)
    // which is dynamically "created" *in situ*, if required
    client.publish('/messages', {
      text: newMessage
    })
  })
    
  // Now we setup the client to SUBSCRIBE (listen in)
  // for messages coming into the same CHANNEL (/messages)
  // (Note that, the client which publishes the message itself is also subscribed)
  client.subscribe('/messages', function(newMessage) {
    $("#messages-list").append("<li>" + newMessage.text + "</li>")
  });
    
})
