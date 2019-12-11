export default class HttpError extends Error {
  constructor(response) {
    super(response.statusText);

    this.name = "HttpError";
    this.code = response.status;
    this.url = response.url;
  }
}
