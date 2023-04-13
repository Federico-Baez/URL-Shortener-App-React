import APIRequest from "../utils/config/axios.config";


export function shortenLink(url) {
  return APIRequest.get(`/shorten?url=${url}`); // https://api.shrtco.de/v2/
}