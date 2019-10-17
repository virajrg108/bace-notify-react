import { notification } from 'antd'

export const get = (url, cb) => {
  fetchAsync(url, 'GET', cb, 'application/json')
}

export const post = (url, obj, cb) => {
  fetchAsync(url, 'POST', cb, 'application/json', JSON.stringify(obj))
}

export const postFormData = (url, body, cb) => {
  fetchAsync(url, 'POST', cb, undefined, body)
}

export const put = (url, obj, cb) => {
  fetchAsync(url, 'PUT', cb, 'application/json', JSON.stringify(obj))
}

export const del = (url, cb) => {
  fetchAsync(url, 'DELETE', cb, 'application/json')
}

const fetchAsync = (url, method, cb, contentType, body) => {
  let options = {
    method: method, credentials: 'include'
  }
  if (contentType) options.headers = new Headers({'Content-Type': contentType})
  if (method === 'POST' || method === 'PUT') {
    options.body = body;
  }
  fetch(url, options)
  .then(response => {
    const status = response.status
    response.json().then(data => {
      if (cb) cb(status, data)
      if (data.notify) notification[data.notify.type]({ message: data.notify.title, description: data.notify.msg })
    }).catch(error => cb(0))
  }).catch(error => cb(0))
}
