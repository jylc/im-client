import { request } from '@/utils/request'

export function sendMessage(url, data) {
  return request({
    method: 'POST',
    data: data,
    url: url,
  })
}
