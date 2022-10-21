let input = document.getElementById("textbox")
let output = document.getElementById("text")
input.value = "🙂🙃😂🤣😀😅😛😭🙄😮😳🤯"

// Emojis to add:
// 🙂 Ghost     smile
// 🙃 Ghost     sadSmile
// 😂 Pumpkin   laugh
// 🤣 Pumpkin   laughSide
// 😀 Witch     grin
// 😅 Witch     coldSweat
// 😛 Witch     toungeOut
// 😭 Skeleton  cry
// 🙄 Zombie    
// 😮 Zombie    
// 😳 Zombie    
// 🤯 Zombie    

function test () {
    htmlout = input.value
    htmlout = makeEmoji ( htmlout, "🙂", "smile" )
    htmlout = makeEmoji ( htmlout, "🙃", "sadSmile" )
    htmlout = makeEmoji ( htmlout, "😂", "laugh" )
    htmlout = makeEmoji ( htmlout, "🤣", "laughSide" )
    htmlout = makeEmoji ( htmlout, "😀", "grin" )
    htmlout = makeEmoji ( htmlout, "😅", "coldSweat" )
    htmlout = makeEmoji ( htmlout, "😛", "toungeOut" )
    htmlout = makeEmoji ( htmlout, "😭", "cry" )
    output.innerHTML = htmlout
}

function makeEmoji ( text, emoji, name ) {
    return text.replace ( emoji, "<img src='emojis/"+name+".svg' alt='"+emoji+"'>" )
}