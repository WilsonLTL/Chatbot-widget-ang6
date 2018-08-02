function initBubble () {
  axios.get("https://api.ipify.org?format=json").then(function (res) {
    url = "http://ec2-13-250-42-135.ap-southeast-1.compute.amazonaws.com/DemoGLSHK?Key=0bb18fb84259c567c723ba96188f47ac&"+res.data.ip+"&Say="
    console.log(url)
  })

  chatWindow = new Bubble(document.getElementById("chat"), "chatWindow", {
    inputCallbackFn: function(o) {

      let reply_message = {
        "msg":{
          says:[],
          reply: []
        }
      };

      let nlp = function(text) {
        console.log("text in Script.js:",text);
        data.text=text
        axios.get(url+text).then(function (res) {
            result = res.data;
          console.log(result);
          return_say = "";
          if (result["Speech"] !== ""){
            return_say = result["Speech"];
            if (result["ImageURL"] !== ""){
              return_say += "<br ><img style='width:100%;height:100%;margin: 10px 0px 0px 0px;' src="+result["ImageURL"]+"/>"
            }
            reply_message.msg.says.push(return_say);
            console.log("push reply:",reply_message.msg.reply)
          }else{
            reply_message.msg.says.push(nlp_noresponse_msg)
          }
          chatWindow.talk(reply_message,"msg",text)
        }, function (error) {
          console.log(error)
        })
      };

      // do this if answer found
      let match = function(key) {
        setTimeout(function() {
          chatWindow.talk(convo, key) // restart current convo from point found in the answer
        }, 600)
      };

      // sanitize text for search function
      let strip = function(text) {
        return text.toLowerCase().replace(/[\s.,\/#!$%\^&\*;:{}=\-_'"`~()]/g, "")
      };

      // search function
      let found = false;
      o.convo[o.standingAnswer].reply.forEach(function(e, i) {
        strip(e.question).includes(strip(o.input)) && o.input.length > 0
          ? (found = e.answer)
          : found ? null : (found = false)
      });
      console.log("found",found);
      console.log("input",o.input);
      found ? match(found) : nlp(o.input)
      // found ? match(found) : miss()
    }
  });
  console.log("chatWindow:",chatWindow)
  chatWindow.talk(convo);

  return chatWindow;
}

