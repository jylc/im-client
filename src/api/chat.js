import { request } from '@/utils/request'

export function sendMessage(data) {
  return request({
    method: 'POST',
    data: data,
    url: '/chat/send',
  })
}
