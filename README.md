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
```
Title: frame.css _> 116 -> .custom-nav label 
Nav bar: frame.css -> 106 -> .custom-nav 
Background-image : frame.css -> 97 -> .custom-border 
Say bubble : says.css -> 3 -> .bubble-typing 
Say bubble border : says.css -> 26 -> .bubble.say
Reply bubble : reply.css -> 23 -> .bubble.reply .bubble-content .bubble-button 
               reply.css -> 99 -> .bubble .bubble-content input 
Reply bubble button hover: reply.css -> 88
Footer: input.css -> 5 ->.bubble-container .input-wrap 
Textarea : input.css -> 14 ->.bubble-container .input-wrap textarea 
Textarea placeholder: input.css -> 1 -> ::placeholder
```

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

## Remark version 3.4.0 for Hailey:
<ul>
<li>Update the new NLP version, please view "PS:1"</li>
<li>Update of css, please view "PS:2"</li
</ul>


### PS1
```
Script.js -> line 2 - 5
```

### PS2
```
Bubbles.js -> line 126 - 131
```


### After update (Left = new, Right = old):
<img src="https://i.imgur.com/WERXrxj.jpg">

