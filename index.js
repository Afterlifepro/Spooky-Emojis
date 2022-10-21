let input = document.getElementById("textbox")
let output = document.getElementById("text")
input.value = "🙂🙃😂🤣😀😅😛😭🙄😮😳🤯"

var emojis = {
    "🙂": "smile",
    "🙃": "sadSmile",
    "😂": "laugh",
    "🤣": "laughSide",
    "😀": "grin",
    "😅": "coldSweat",
    "😛": "toungeOut",
    "😭": "cry",
    "🙄": "eyeroll",
    "😮": "shocked",
    "😳": "eyeWide",
    "🤯": "explode",
}

function test () {
    htmlout = input.value
    for ( key in emojis ) {
        let value = emojis[key]
        htmlout = htmlout.replace ( key, "<img src='emojis/"+value+".svg' alt='"+key+"' style='height: 1em;'>" )
    }
    output.innerHTML = htmlout
}