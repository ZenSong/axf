<template>
    <div class="home">
       <heade></heade>
       <div class="main">
          <div class="centre_img">
           <img v-lazy="bannar.img">
          </div>
          <ul class="main-title" >
            <!-- 循环四个 -->
            <li v-for="(item, index) in classifys" :key="item.id"
             v-if="index < 4">
              <div class="title">
                <div class="milk">
                    <span>{{item.classify_title}}</span>
                </div>
                <a href="###">
                    <div class="more">更多
                        <span class="glyphicon glyphicon-menu-right">></span>
                    </div>
                </a>
              </div>
              <img v-lazy="item.imgs.small" alt="" class="img1">
              <ul class="merchandise">
                <!-- v-if显示 循环三个 -->
                <router-link tag="li" v-for="(pro,ind) in item.products" :key="pro.product_id"
                to='/particulars'
                v-if="ind < 3">
                  <div class="milk-img">
                    <img v-lazy="pro.imgs.small" alt="">
                  </div>
                  <p class="product-name">{{pro.title}}</p>
                  <div class="product-operates">
                    <div class="product-operates-left">
                        <span>{{pro.unit}}ml</span> <br>
                        <span>￥{{pro.price}}</span>
                    </div>
                    <div class="product-operates-right">
                        <span class="add-item" @click.stop="addNum(index, pro)">+</span>
                    </div>
                  </div>
                </router-link>
              </ul>
            </li>
          </ul>
       </div>
    </div>
</template>
<script>
import Heade from '../header/header'
export default {
  data () {
    return {
  
    }
  },
  computed: {
    // 获取首页第一张大图片
    bannar () {
      return this.$store.state.bannar
    },
     // 提取全部分类
    classifys () {
     return this.$store.state.classifys
    }
  },
  methods: {
    addNum (index,item) {
        let userInfo = this.$store.state.userInfo 
        if (!userInfo.id) {
          this.$router.push('/login')  
        } else {
           item.num++
           this.$store.dispatch('addGoods',item)
           // 购物车里数量增加的动画
           this.$store.dispatch('changeNumZoomActive')
        }
      }
  },
  components: {
    Heade
  }
}
</script>
<style lang="less" scoped>
  .main {
    width: 100%;
    position: absolute;
    top: 4.5rem;
    .centre_img {
      height: 11.7rem;
    }
    .centre_img>img {
      width: 100%;
      height: 100%;
    }
    .main-title{
      width: 100%;
      height: 125rem;
      margin-bottom: 5rem;
       li{
         width: 100%;
          .title{
              height: 4rem;
                .milk {
                  float: left;
                  line-height: 1.2;
                  font-size: 1.3rem;
                  padding: 0 0 0 0.6rem;
                  margin: 1.3rem 0 0 3%;
                  border-left: .8rem solid;
                  font-weight: 700;
                }
                .more {
                  float: right;
                  line-height: 4rem;
                  padding-right: 1.5rem;
                  color: #999;
                  font-size: 1.2rem
                }
          }
          img{
            width: 94%;
            height: 7.5rem;
            margin: 0 3% 0.5rem 3%;
        }
        .merchandise {
          width: 100%;
          li {
            width: 33.33%;
            float: left;
            padding: 0 0.5rem;
            margin: 0.5rem 0;
            box-sizing: border-box;
            border-right: 1px solid #e0e0e0;
              .milk-img>img {
                width: 100%;
                height: 100%;
                margin: 0;
                vertical-align: middle;
              }
              .product-name {
                margin-bottom: 2rem;
                font-size: 1.25rem;
                overflow: hidden;
                white-space: nowrap;
                text-overflow: ellipsis;
              }
              .product-operates {
                width: 100%;
                height: 5rem;
                .product-operates-left {
                  width: 50%;
                  height: 100%;
                  line-height: 2rem;
                  float: left;
                     span:nth-of-type(1) {
                       color: #C5C5C5;
                    }
                     span:nth-of-type(2) {
                       color: #FF4300;
                  }
               }
               .product-operates-right {
                    box-sizing: border-box;
                    width: 50%;
                    height: 100%;
                    float: right;
                    padding: 1.167rem;
                  .add-item {
                      display: inline-block;
                      width: 2.666666rem;
                      height: 2.666666rem;
                      text-align: center;
                      line-height: 2.4rem;
                      border: 1px solid #EAE6E4;
                      border-radius: 50%;
                      color: #FF4300;
                      font-size: 2rem;
                  }
              }
             }
          } 
       }
    }
  } 
}
img[lazy=loading] {
  width: 200px;
  height: 200px;
  background-image: url('img/loading.gif'); 
  background-size: 50px 50px;
  background-repeat: no-repeat;
  background-position: center center;
}   
</style>
