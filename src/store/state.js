export default {
  bannar: {} ,
  // 存储所有分类数据
  classifys: [],
  // 用户信息,登录的信息记录在里面
  userInfo: {},
  // 进入不同的页面,是否显示 tabbar 组件
  tabBarShow: true,
  // 存储该用户的地址列表
  sites: [],
  // 填地址的时候存储选择的城市
  selectCity: '',
  // 输入地图位置的时候选择的地址
  selectSite: '',
  // 所选地区的坐标 没有坐标百度地图就无法定位到你手动选的地区
  location: {},
  // (该用户)购物车数据
  carts: [],
   // 购物车的位置信息
  cartPos: {},
  // 购物车数量的动画
  numZoomActive: false
  }