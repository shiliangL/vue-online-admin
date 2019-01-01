import request from '@/utils/request'

export function loginByUsername (data) {
  return request({
    url: 'operator/login',
    method: 'post',
    data
  })
}

export function logout () {
  return request({
    url: 'operator/logout',
    method: 'get'
  })
}

export function getUserInfo (params) {
  return request({
    url: 'operator/getCurrentOperator',
    method: 'get',
    params
  })
}
