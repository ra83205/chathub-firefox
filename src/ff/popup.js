console.log('popup.js is loaded') // Проверка загрузки скрипта

document.addEventListener('DOMContentLoaded', function () {
  console.log('Document is ready')

  const openAppButton = document.getElementById('openApp')

  if (openAppButton) {
    openAppButton.addEventListener('click', () => {
      browser.tabs.create({
        url: browser.runtime.getURL('app.html'),
      })
    })
  } else {
    console.error('Button not found')
  }
})
