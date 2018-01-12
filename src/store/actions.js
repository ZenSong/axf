import http from 'axios'
export default {
    setbannar ({commit}) {
        http.get('http://localhost:8081/bannar')
        .then((res)=>{
          commit('SET_BANNAR',res.data)
          return res.data
        })
      },
    setclassifys ({commit}) {
        http.get('http://localhost:8081/classifys')
        .then((res)=>{
          commit('SET_CLASSIFYS',res.data)
          return res.data
        })
      },
      //验证 是注册还是登录
      login ({commit},phone) {
       return http.get('http://localhost:8081/users?phone='+phone)
        .then(res => {
          if (res.data.length >0) {
            commit('LOGIN',res.data[0])
            http.get('http://localhost:8081/users/'+ res.data[0].id + '/sites')
             .then(res => {
                commit('SAVE_SITES',res.data)
             })
            http.get('http://localhost:8081/users/'+ res.data[0].id + '/carts')
             .then(res => {
               // 获取成功之后保存在购物车数组carts中
               commit('SAVE_CARTS',res.data)
                // 原始数据信息也要同步
               commit('UPDATE_CLASSIFYS', res.data)
             })
            return '登录成功'
          } else {
            let userObj = {
              phone: phone,
              level: 'V0',
              current_score: 0,
              dif_score: '距下一等级还需 30 成长值',
              selectedSite: {}
            }
            // 在数据库中存储,成为其中一个用户
           return http.post('http://localhost:8081/users',userObj)
            // 注册成功后 保存这个用户信息在 userinfo 中
            .then(res => {
            commit('LOGIN',res.data)
            return '注册成功'
            })
          }
        })
      },
      saveSite (store, addSite) {
       // 将新增的地址存进 地址数据库
       return http.post('http://localhost:8081/sites',addSite)
        .then(res => {
            // 将新增的地址添加进vuex 中的sites
            /* store.commit('SAVE_SITE',res.data) */
            store.commit('SAVE_SITE', res.data)
           // 1. 修改该用户数据库中的收货地址selectedSite, 先获取
           // 2.修改用户userinfo中的选中的收货地址 selectedSite
           http.get('http://localhost:8081/users/'+ store.state.userInfo.id)
            .then((res) => {
              if (res.data.id > 0) {
                // 获取成功,开始修改
                res.data.selectedSite = addSite
                http.put('http://localhost:8081/users/'+ store.state.userInfo.id,res.data)
              }
            })
            store.commit('CHANGE_SEHLECTED_SITE',addSite)
           return '保存成功'
        })
      },
      confirmSite (store,site) {
        let userinfoId = store.state.userInfo.id
         http.get('http://localhost:8081/users/'+userinfoId)
         .then(res=> {
           if (res.data.id > 0) {
            res.data.selectedSite = site
            return http.put('http://localhost:8081/users/'+userinfoId, res.data)
           }          
         })
          .then(res => {
            store.commit('CONFIRMSITE',res.data.selectedSite)
          })
      },
      addGoods (store,item) {
        let carts = store.state.carts
        let userInfo = store.state.userInfo
        // 该布尔值用来判断该对象是否已经存在在vuex的carts数组中
        let addBol = true 
        for(let i = 0; i< carts.length; i++){
          // 判断是否在购物车列表中存在
          if (Number(carts[i].product_id) === Number(item.product_id)) {
            addBol = false
            // 如果 购物车中该商品没有选中,添加的时候就让他选中 (修改数据库中的selected值)
            carts[i].selected = true
            // 改变数据库中carts 的num值 ,可根据vuex中carts的 id 来查找 数据库中对应的那个对象
           return http.get('http://localhost:8081/carts/' + carts[i].id)
              .then(res => {
                if (res.data.id) {
                 res.data.num++
                 // 如果 购物车中该商品没有选中,添加的时候就让他选中 (修改数据库中的selected值)
                 res.data.selected = true
                 return http.put('http://localhost:8081/carts/' + carts[i].id,res.data)
                }
              })
               .then(res => {
                  // 改变vuex中 carts 的num值 
                  carts[i].num++
                  return '更新成功'
               })
          }
        }
        if (addBol) {
          item.selected = true
          // 添加到数据库的carts中
          item.userId = userInfo.id
         return http.post('http://localhost:8081/carts',item)
           .then(res => {
             // 添加到vuex的carts中
             store.commit('ADDGOODS',res.data)
             return '添加成功'
           })
        }
      },
      addGoodsone (store, item) {
        // 改变数据库里carts 中的 num 值
        http.get('http://localhost:8081/carts/' + item.id)
         .then(res => {
           // 数值加加
           res.data.num++
           http.put('http://localhost:8081/carts/' + item.id,res.data)
            .then(res => {
              // 修改vuex中的num值
              store.commit('ADDGOODSONE',item)
              return '修改成功'
            })
         })
      },
      subGoods (store, item) {
        let carts = store.state.carts
        // 对数据库中的carts操作
        for(let i = 0; i < carts.length; i++) {
          if (carts[i].product_id === item.product_id) {
            http.get('http://localhost:8081/carts/'+ carts[i].id)
             .then(res => {
               res.data.num--
               http.put('http://localhost:8081/carts/'+ carts[i].id,res.data)
                .then(res => {
                  // 数据库中的num更改成功之后,对vuex中的num 进行更改
                  carts[i].num--
                  if (carts[i].num <= 0) {
                    http.delete('http://localhost:8081/carts/'+ carts[i].id)
                    .then(res => {
                       store.commit('SUBGOODS',carts[i])
                    })   
                  }                 
                })
             })
          }
        }  
      },
      subGoodsone (store, item) {
        // 对数据库中carts 进行修改
        http.get('http://localhost:8081/carts/' + item.id)
         .then(res => {
           res.data.num--
           http.put('http://localhost:8081/carts/' + item.id,res.data)
            .then(res => {
              item.num--
              if (item.num <= 0) {
                http.delete('http://localhost:8081/carts/' + item.id)
                .then(res => {
                  store.commit('SUBGOODSONE',item)
                })
              }
            })
         })
      },
          // 切换cartActive来实现购物车按钮的动画
      changeCartActive ({commit}) {
        commit('CHANGE_CARTACTIVE_TRUE')
        setTimeout(() => {
          commit('CHANGE_CARTACTIVE_FALSE')
        }, 300)
      },
      changeSelected (store,item) {
        // 修改数据库carts中 selected 的 布尔值
        http.get('http://localhost:8081/carts/' + item.id)
         .then(res => {
           res.data.selected = !res.data.selected
           http.put('http://localhost:8081/carts/' + item.id, res.data)
            .then(res => {
              return '修改成功'
            })
         })
      },
      AllchangeSelected (store,SelectAll) {
        http.get('http://localhost:8081/carts')
         .then(res => {
           for(let i = 0; i< res.data.length; i++) {
              if (SelectAll) {
                res.data[i].selected = false
                http.put('http://localhost:8081/carts/'+ res.data[i].id,res.data[i])
                .then(res => {
                  return '修改成功'
                })
              } else {
                res.data[i].selected = true
                http.put('http://localhost:8081/carts/'+ res.data[i].id,res.data[i])
                .then(res => {
                  return '修改成功'
                })
              }
           }
          
         })
      },
      selectTure (store, item) {
        // 修改数据库中selectd 值
        http.get('http://localhost:8081/carts/' + item.id)
         .then(res => {
           res.data.selected = true
           http.put('http://localhost:8081/carts/' + item.id,res.data)
            .then(res => {
              return '修改成功'
            })
         })
      },
      changeNumZoomActive (store) {
        store.commit('NUMZOOMACTIVE_TRUE')
        setTimeout(() => {
          store.commit('NUMZOOMACTIVE_FALSE')
        }, 300)
      }
  }