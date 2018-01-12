export default {
  SET_BANNAR (state, data) {
        state.bannar = data
    },
    // 获取全部分类的数据
    SET_CLASSIFYS (state,data) {
      state.classifys = data
    },
    LOGIN (state, data) {
      state.userInfo = data
    },
    CHANGE_CITY (state, data) {
      state.selectCity = data
    },
    CHAGNE_SITE (state, data) {
      state.selectSite = data
    },
    CHANGE_LOCATION (state, data) {
      state.location = data      
    },
    // 添加的收货地址
    SAVE_SITE (state, data) {
      state.sites.push(data)
    },
    CONFIRMSITE (state, site) {
      state.userInfo.selectedSite = site
    },
    // 登录时,拿出该用户已经保存的地址
    SAVE_SITES (state,data) {
      state.sites = data
    },
    CHANGE_SEHLECTED_SITE (state,data) {
      state.userInfo.selectedSite = data
    },
    // 将商品添加进购物车carts中
    ADDGOODS (state, data) {
      state.carts.push(data)
    },
    ADDGOODSONE (state, data) {
      data.num++
    },
    // 将该商品从数组carts中移除
    SUBGOODS (state, data) {
      state.carts.splice(state.carts.indexOf(data),1)
    },
    SUBGOODSONE (state, data) {
      state.carts.splice(state.carts.indexOf(data),1)
    },
    // 将登陆了的用户中的购物商品存到carts中
    SAVE_CARTS (state, data) {
      state.carts = data
    },
    UPDATE_CLASSIFYS (state, data) {
      let classifys = state.classifys
      for (let i = 0; i < data.length; i++) {
        for (let j = 0; j < classifys.length; j++) {
          let products = classifys[j].products
          for (let z = 0; z < products.length; z++) {
              products[z].num = 0
          }
        }
      }
      for(let i = 0; i < classifys.length; i++) {
        for(let j = 0; j < data.length; j++) {
          let s = classifys[i].products.filter(item => Number(data[j].product_id) === Number(item.product_id))
          if (s.length > 0) {
            s[0].num = data[j].num
          }
        }
      }
    },
    CHANGE_CARTACTIVE_TRUE (state) {
      state.cartActive = true
    },
    CHANGE_CARTACTIVE_FALSE (state) {
      state.cartActive = false
    },
    CART_POS (state, cartPos) {
      state.cartPos = cartPos
    },
    NUMZOOMACTIVE_TRUE(state) {
      state.numZoomActive = true
    },
    NUMZOOMACTIVE_FALSE(state) {
      state.numZoomActive = false
    }
  }