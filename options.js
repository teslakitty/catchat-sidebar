const blockSuggestionsCheckbox = document.getElementById('block-suggestions');
const saveButton = document.getElementById('save-options');
const statusDiv = document.getElementById('status');

function saveOptions() {
  chrome.storage.sync.set({ 'blockSuggestions': blockSuggestionsCheckbox.checked }, () => {
    statusDiv.textContent = 'Options saved.';
    setTimeout(() => {
      statusDiv.textContent = '';
    }, 750);
  });
}

function restoreOptions() {
  chrome.storage.sync.get('blockSuggestions', (data) => {
    blockSuggestionsCheckbox.checked = data.blockSuggestions || false; // Default to false
  });
}

document.addEventListener('DOMContentLoaded', restoreOptions);
saveButton.addEventListener('click', saveOptions);