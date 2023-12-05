// 约定一个通用的域名
const INFO_KEY = 'hm_shopping_info'
const HISTROY_KEY = 'hm_histroy_list'
// 获取个人信息
export const getInfo = () => {
  const defaultObj = { token: '', userId: '' }
  const result = localStorage.getItem(INFO_KEY)
  return result ? JSON.parse(result) : defaultObj
}
// 设置个人信息
export const setInfo = (obj) => {
  localStorage.setItem(INFO_KEY, JSON.stringify(obj))
}
// 移除个人信息
export const removeInfo = () => {
  localStorage.removeItem(INFO_KEY)
}

// 获取搜索历史
export const getHistroyList = () => {
  const result = localStorage.getItem(HISTROY_KEY)
  return result ? JSON.parse(result) : []
}
// 设置搜索历史
export const setHistoryList = (arr) => {
  localStorage.setItem(HISTROY_KEY, JSON.stringify(arr))
}
