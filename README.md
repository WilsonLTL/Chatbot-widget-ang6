# Chat-bubble plugin
The easy plugin base on chat-bubble, as angular 6 version

## Source file
### app.component.html
The html of component, after create the element by your own, copy the code

### app.component.ts
The ts file of component, the "Styleurl" can set by your own,since the plugin css file was set in "Angular.json",that may affect the main css

### assets
Include 3 file : css, js and image

### css
Title: frame.css _> 116 -> .custom-nav label <br >
Nav bar: frame.css -> 106 -> .custom-nav <br >
Background-image : frame.css -> 97 -> .custom-border <br >
Say bubble : says.css -> 3 -> .bubble-typing <br >
Say bubble border : says.css -> 26 -> .bubble.say
Reply bubble : reply.css -> 23 -> .bubble.reply .bubble-content .bubble-button <br >
               reply.css -> 99 -> .bubble .bubble-content input <br >
Reply bubble button hover: reply.css -> 88<br >
Footer: input.css -> 5 ->.bubble-container .input-wrap <br >
Textarea : input.css -> 14 ->.bubble-container .input-wrap textarea <br >
Textarea placeholder: input.css -> 1 -> ::placeholder<br >

### js
send button: Bubbles.js -> 129


## anggular.json

```json
{
...

"styles": [
              "src/styles.css",
              "src/assets/plugin/css/frame.css",
              "src/assets/plugin/css/input.css",
              "src/assets/plugin/css/reply.css",
              "src/assets/plugin/css/says.css",
              "src/assets/plugin/css/setup.css",
              "src/assets/plugin/css/typing.css"
            ],
            "scripts": [
              "node_modules/axios/dist/axios.js",
              "src/assets/plugin/js/Script.js",
              "src/assets/plugin/js/Bubbles.js",
              "src/assets/plugin/js/config.js"
            ]
}
```


