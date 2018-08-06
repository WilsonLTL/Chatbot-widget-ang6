let url = "https://nlp.asiabots.com/CareClub?Key=f9bbe5f386487c416d4153b9ba307ad7&SessionID=CareClubXXX&Location="

let nlp_noresponse_msg = '唔好意思,我唔知你噏乜😥'

let default_home_msg = ''

let default_reply_msg = {
  question: "Home",
  answer: "ice"
}

let data = {
  "system_id":12312,
  "agent_id":"26yjP",
  "text":""
}

let convo = {}

let initSetting = function () {
  return Promise.resolve(
    axios.get("https://api.ipify.org?format=json").then(function (res) {
      url += res.data.ip+"&Say="

      axios.get(url+"init").then(function (res) {
        console.log(res.data['Speech'])
        default_home_msg = res.data['Speech']

        convo = {
          ice: {
            says: [default_home_msg],
            reply: []
          },
          reply_message: {
            says: [default_home_msg],
            reply: [
              {
                question: "Home",
                answer: "ice"
              }
            ]
          }
        };

        initBubble()
        return true
      })
    })
  )
}
