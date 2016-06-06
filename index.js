var KEYS = {T: 84, SLASH: 191}
var slashDown = false

// If the user selects text, then holds down '/' and 't', say the selection out loud.
addEventListener('keydown', e => {
  if (slashDown) {
    var selectedText = getSelection().toString()
    if (e.keyCode === KEYS.T && selectedText.length > 0) {
      chrome.runtime.sendMessage({type: 'speak', text: selectedText})
    }
  } else if (e.keyCode === KEYS.SLASH) {
    slashDown = true
  }
})

addEventListener('keyup', e => {
  if (e.keyCode === KEYS.SLASH) {
    slashDown = false
  }
})
