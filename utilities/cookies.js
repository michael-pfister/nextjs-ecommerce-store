export class Cookies {
  getAllCookies() {
    return document.cookie
      .split(';')
      .map((cookie) => {
        return cookie.split('=');
      })
      .reduce((accumulator, [key, value]) => {
        return { ...accumulator, [key.trim()]: decodeURIComponent(value) };
      });
  }

  constructor() {
    this.cookies = document.cookie;
  }
}
