import APIRequest from "../utils/config/axios.config";

//clave acceso short.io: publica pk_fSQIFE8tIjCmqIpC privada sk_ChJD3PfQ4o4oxdVj

export function shortenLink(url) {
  const options = {
    method: 'POST',
    headers: {
      accept: 'application/json',
      'content-type': 'application/json',
      Authorization: 'pk_fSQIFE8tIjCmqIpC'
    },
    body: JSON.stringify({
      domain: 'ctjq.short.gy',
      allowDuplicates: true,
      originalURL: url
    })
  };

  return fetch('https://api.short.io/links/public', options)
}