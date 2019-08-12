import UrlHelper from "./url-helper";

const REACT_APP_BUNDLE_ID = "com.thekinapp.dev";
const REACT_APP_PACKAGE_NAME = "com.thekinapp.dev";
const REACT_APP_DYNAMIC_LINK_DOMAIN = "thekinapp.page.link";
const REACT_APP_IOS_APP_ID = "1437611153";

export function dynamicLinkBuilder(url: string): string {
    const isAndroid = url.indexOf('play.google.com') >= 0;
    let currentPage = window.location.href.replace("http://localhost:3000", "https://web.dev.thekinapp.com");
    currentPage = UrlHelper.appendQueryString(currentPage, "anid", getSegmentAnon());
    if (isAndroid) {
        url = UrlHelper.appendQueryString(url, "url", currentPage);
    }
    else {
        url = `https://${REACT_APP_DYNAMIC_LINK_DOMAIN}/`;
        url = UrlHelper.appendQueryString(url, "link", currentPage);
        url = UrlHelper.appendQueryString(url, "apn", REACT_APP_PACKAGE_NAME as string);
        url = UrlHelper.appendQueryString(url, "ibi", REACT_APP_BUNDLE_ID as string);
        url = UrlHelper.appendQueryString(url, "isi", REACT_APP_IOS_APP_ID as string);
        url = UrlHelper.appendQueryString(url, "efr", "1");

    }
    return url;
}

function safeReadCookie() {
    var cookie;
    try {
        cookie = document.cookie;
    }
    catch (err) {
        if (typeof console !== "undefined" &&
            typeof console.error === "function") {
            console.error(err.stack || err);
        }
        cookie = "";
    }
    return cookie;
}

function getSegmentAnon(): string | null {
    var cookie = safeReadCookie();
    const name = "ajs_anonymous_id";
    var value =
        cookie
            .split(";")
            .map(c => c.trim())
            .filter(cookie => {
                return cookie.substring(0, name.length + 1) === `${name}=`;
            })
            .map(cookie => {
                return decodeURIComponent(cookie.substring(name.length + 1));
            })[0].replace(/"/g, "") || null;
    return value;
}
