import Axios from './request'

export function getWeather(city = '徐州') {
  return Axios.jsonp({
    url: `http://api.map.baidu.com/telematics/v3/weather?location=${encodeURIComponent(city)}&output=json&ak=3p49MVra6urFRGOT9s8UBWr2`
  })
}