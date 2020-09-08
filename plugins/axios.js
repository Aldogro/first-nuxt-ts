export default function({$axios, redirect}) {

  console.log($axios)
  $axios.onRequest(config => {
    console.log('Haciendo reques a ' + config.url)
  })

  $axios.onResponse(response => {
    console.warn(response.status)
  })

  $axios.onError( error => {
    console.error('ACA' + error);
  })
}