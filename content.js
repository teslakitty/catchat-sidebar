function removeCopilotAds() {
    // Target elements based on their classes, IDs, or other attributes.
    // You'll need to inspect GitHub's website to find the specific selectors.
  
    const copilotPromoBanner = document.querySelector('.js-copilot-promo'); // Example selector
    const specificAdElement = document.querySelector('#copilot-ad-container'); // Another example
  
    if (copilotPromoBanner) {
      copilotPromoBanner.remove();
      console.log("Gitmeow: Removed Copilot promo banner.");
    }
  
    if (specificAdElement) {
      specificAdElement.remove();
      console.log("Gitmeow: Removed specific Copilot ad container.");
    }
  
    // You might need to target other elements as well.
    const otherAds = document.querySelectorAll('.copilot-related-item'); // Example for multiple similar elements
    otherAds.forEach(ad => ad.remove());
    console.log("Gitmeow: Removed other Copilot related items.");
  
    // Mutation Observer (Optional but Recommended for Dynamic Content):
    // If the ads load dynamically after the initial page load, you'll need to use a Mutation Observer
    // to detect these changes and remove the elements when they appear.
  
    const observer = new MutationObserver(mutationsList => {
      for (const mutation of mutationsList) {
        if (mutation.type === 'childList') {
          removeCopilotAds(); // Re-run the removal function when new elements are added
        }
      }
    });
  
    observer.observe(document.body, { childList: true, subtree: true });
  }
  
  // Run the function when the page loads
  removeCopilotAds();


  function removeGitHubElements() {
    // Remove Copilot Ads (existing code)
    const copilotPromoBanner = document.querySelector('.js-copilot-promo');
    // ... (rest of your Copilot ad removal code)
  
    chrome.storage.sync.get('blockSuggestions', (data) => {
      if (data.blockSuggestions) {
        const suggestedRepos = document.querySelectorAll('[data-test-selector="dashboard-sidebar"] [aria-label="Explore"] ~ div > div'); // Example selector
        suggestedRepos.forEach(repo => repo.remove());
        console.log("Gitmeow: Removed suggested repositories.");
      }
    });
  
    // ... (Mutation Observer remains similar to before)
  }
  
  removeGitHubElements();