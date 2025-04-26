chrome.action.onClicked.addListener(async (tab) => {
    try {
      await chrome.sidePanel.open({
        tabId: tab.id
      });
    } catch (error) {
      console.error("Error opening side panel:", error);
    }
  });
  
  console.log("Background service worker loaded.");