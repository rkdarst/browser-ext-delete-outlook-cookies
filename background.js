const targetDomain = "office.com";

async function deleteOfficeCookies() {
  try {
    const stores = await browser.cookies.getAllCookieStores();
    console.log(stores);

  for (let store of stores) {

      //console.log("store:", store.id)
    let cookies = await browser.cookies.getAll({ domain: targetDomain, storeId: store.id });

//    if (cookies.length === 0) {
//	console.log("No office.com cookies to delete from", store.id);
//     //return;
//    }

    for (let cookie of cookies) {
      // Construct the URL from cookie info
      let url =
        (cookie.secure ? "https://" : "http://") +
        cookie.domain.replace(/^\./, "") +
        cookie.path;

      await browser.cookies.remove({
        url,
        name: cookie.name,
        storeId: cookie.storeId
      });
      console.log(`Deleted cookie: ${cookie.name}`);
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
