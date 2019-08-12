/**
 * class to handle url
 *
 * @class UrlHelper
 */
class UrlHelper {

  static QUERYSTRING_KEY_APP = 'app';
  static QUERYSTRING_KEY_APP_RETURNTO = 'return_to';

  /**
   * Appends a query string value to a url
   *
   * @returns {string}
   * @memberof UrlHelper
   */
  static appendQueryString(uri: string, key: string, value: string| null): string {
    let seperator = '?';
    if (value == null || value.length === 0) return uri;
    if(uri.includes('?')) {
      seperator = '&';
    }
    return `${uri}${seperator}${key}=${encodeURI(value)}`;
  }

    /**
   * Gets the uri params related to integrated applications.
   *
   * @returns {any}
   * @memberof UrlHelper
   */
  static getAppParametersFromCurrentUrl(): { AppId: string | null; Redirect: string | null; } {
    const urlParams = new URLSearchParams(window.location.search);
    const appIdQueryString = urlParams.get(UrlHelper.QUERYSTRING_KEY_APP);
    const redirectQueryString = urlParams.get(UrlHelper.QUERYSTRING_KEY_APP_RETURNTO);

    return { AppId: appIdQueryString || null, Redirect: redirectQueryString || null }
  }
}

export default UrlHelper;