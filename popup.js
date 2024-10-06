document.getElementById('modify-btn').addEventListener('click', () => {
    chrome.tabs.executeScript({
        file: 'content-script.js'
    });
});