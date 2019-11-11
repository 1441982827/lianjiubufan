export default {
  get: ({
    url
  }) => {
    return fetch(url)
      .then(response => response.json())
      .then(result => result)
      .catch(z => false)
  },
  post: ({
    url
  }) => {
    return fetch(url, {
      method: 'POST'
    })
      .then(response => response.json())
      .then(result => result)
  }
}
