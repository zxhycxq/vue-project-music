import jsonp from 'common/js/jsonp';
import { commonParams } from './config';
import { commonParams, options } from './config';

export function getRecommend() {
  const url = 'https://c.y.qq.com/musichall'
  
  const data = Object.assign ({}, commonParams, {
    platform: 'h5',
    userInfo: 0,
    needNewCode: 1
  })
  return jsonp (url, data, options)
}
