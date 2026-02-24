const targetDomains = ["office.com"];

async function deleteOfficeCookies() {
  try {
    // We have to search all cookie stores, because office may be logged
    // in a container other than default.
    const stores = await browser.cookies.getAllCookieStores();
    for (let store of stores) {
      console.log(`  Cookie store: ${store.id}`);
      console.debug(" ", store)
      //console.log("store:", store.id)
      // This function will only return cookies for which we have host
      // permission.  Anyway, we limit it to the target domain here.
      for (let targetDomain of targetDomains) {
        console.log(  "    targetDomain: ", targetDomain);
        let cookies = await browser.cookies.getAll({ domain: targetDomain, storeId: store.id, firstPartyDomain: null });
        console.debug("    ", cookies);
        for (let cookie of cookies) {
          // Construct the URL from cookie info
          console.info("      Cookie: ", cookie);
          let url =
            (cookie.secure ? "https://" : "http://") +
            cookie.domain.replace(/^\./, "") +
            cookie.path;

          await browser.cookies.remove({
            url,
            name: cookie.name,
            storeId: cookie.storeId
          });
          console.log(`      Deleted cookie: pk=${cookie.partitionKey} d=${cookie.domain} n=${cookie.name} p=${cookie.path} fpd=${cookie.firstPartyDomain}`);
        }
      }
    }

  } catch (error) {
    console.error("Failed to delete office.com cookies:", error);
  }
}

// Register click handler for the browser action
browser.action.onClicked.addListener(() => {
  console.log("Office cookie cleaner clicked.");
  deleteOfficeCookies();
});
