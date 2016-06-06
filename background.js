chrome.runtime.onMessage.addListener((request, sender, response) => {
  if (request.type === 'speak') {
    chrome.tts.speak(request.text, {voiceName: 'Google 日本語'})
  }
})
