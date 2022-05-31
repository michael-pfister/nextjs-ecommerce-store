// only front-end
export class Cookies {
  constructor() {
    this.cookies = this.getAllCookies();
  }

  /* set cookies(value) {
    this.setAllCookies();
  } */

  getAllCookies() {
    return document.cookie
      .split(';')
      .map((cookie) => {
        return cookie.split('=');
      })
      .reduce((accumulator, [key, value]) => {
        return { ...accumulator, [key.trim()]: decodeURIComponent(value) };
      }, {});
  }

  setAllCookies() {
    console.log(JSON.stringify(this.cookies));
  }

  toStringFormat() {
    return JSON.stringify(this.cookies).replaceAll();
  }
}
