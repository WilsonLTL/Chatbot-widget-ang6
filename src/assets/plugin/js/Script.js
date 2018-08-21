function initBubble () {
  widget_status = true;

  chatWindow = new Bubble(document.getElementById("chat"), "chatWindow", {
    inputCallbackFn: function(o) {

      let reply_message = {
        "msg":{
          says:[],
          reply: []
        }
      };

      let nlp = function(text) {
        widget_status = false;

        console.log("text in Script.js:",text);
        data.text=text
        console.log(url+text)
        axios.get(url+text).then(function (res) {
            result = res.data;
          console.log(result);
          return_say = "";
          if ("Speech" in result && result["Speech"] !== ""){
            return_say = result["Speech"];
            if (result["ImageURL"] !== ""){
              if (result["URL"] !== ""){
                return_say += "<a href='http://localhost:4200/shop/e17ec560-922f-11e8-8069-b956dd8dfd0d'><img style='width:100%;height:100%;margin: 10px 0px 0px 0px;' src="+result["ImageURL"]+"/> <br >" + result["Speech"]
              }else{
                return_say += "<img style='width:100%;height:100%;margin: 10px 0px 0px 0px;' src="+result["ImageURL"]+"/>"
              }
            }

            // testing only
            // if (result["Name"] === "活動服務 - 醫療網路 - 牙醫"){
            //   console.log("牙醫")
            //   return_say += "<a href='http://localhost:4200/shop/e17ec560-922f-11e8-8069-b956dd8dfd0d'><img style='width:100%;height:100%;margin: 10px 0px 0px 0px;' src='../assets/plugin/image/ICON_Dispensers_6a65d8.svg'/> <br >"
            // }else if(result["Name"] === "活動服務 - 健康網路 - 瑜伽") {
            //   console.log("瑜珈")
            //   return_say += "<a href='http://localhost:4200/shop/4e757110-9572-11e8-a355-8903f7a7fe56'><img style='width:100%;height:100%;margin: 10px 0px 0px 0px;' src='../assets/plugin/image/icon_YOGA.svg'/></a> <br >"
            // }
            console.log(return_say)
            reply_message.msg.says.push(return_say);
            console.log("push reply:",reply_message.msg.reply);
          }else{
            console.log("No res")
            reply_message.msg.says.push(nlp_noresponse_msg);
          }
          chatWindow.talk(reply_message,"msg",text);

          widget_status = true;
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

