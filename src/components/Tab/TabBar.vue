<template>
  <div class="tab">
    <router-link to="/">
        <span class="span-1" :class="{'back-span-1 active': active === 1}" @click="selectActive(1)"></span>
        首页
    </router-link>
    <router-link to="/supermarket">
        <span class="span-2" :class="{'back-span-2 active': active === 2}" @click="selectActive(2)"></span>
        闪送超市
    </router-link>
    <router-link to="/shoppingcart" ref="cartEl">
        <span class="span-3" :class="{'back-span-3 active': active === 3}" @click="selectActive(3)"></span>
        <div class="navs-bubble-num" v-show="numZoomActive1"
        :class="{'result1':numZoomActive}">{{productNum}}</div>
        购物车
    </router-link>
    <router-link to="/mine">
        <span class="span-4" :class="{'back-span-4 active': active === 4}" @click="selectActive(4)"></span>
        我的
    </router-link>
  </div>
</template>
<script>
export default {
  mounted () {
    // 获取cart标签的位置
    let cartPos = this.$refs.cartEl.$el.getBoundingClientRect()
    this.$store.commit('CART_POS', cartPos)
  },
  data () {
      return {
          active: 1,
          number: 0
      }
  },
  methods: {
      selectActive (num) {
        if(num === 1) {
            this.active = 1
        } else if (num === 2) {
            this.active = 2
        } else if (num === 3) {
            this.active = 3
        } else {
            this.active = 4
        }
      }
  },
  computed: {
    numZoomActive () {
        return this.$store.state.numZoomActive
    },
    numZoomActive1 () {
        if (this.number > 0) {
            return true
        } else {
            return false
        }
    },
    productNum () {
       this.number = 0
       let carts = this.$store.state.carts
       for(let i = 0; i < carts.length; i++) {
           this.number += carts[i].num
       }
       return this.number
    }
  }
}
</script>
<style lang="less" scoped>
 .tab{
        display: flex;
        justify-content: center;
        position: fixed;
        z-index: 150;
        left: 0;
        right: 0;
        bottom: 0;
        height: 5rem;
        background-color: rgba(246,246,246,.95);
    a {
        font-size: 1.2rem;
        width: 25%;
        text-align: center;
        color: #777;
        padding-top: 3rem;
        text-decoration: none;
        position: relative;
        background-color: transparent;
        span{
            display: inline-block;
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
        }
        .span-1{
            background: url("./img/Tabimg/home.png") no-repeat center 20%;
            background-size: auto 2rem;
        }
        .span-2{
            background: url("./img/Tabimg/current.png") no-repeat center 20%;
            background-size: auto 2rem;
        }
        .span-3{
            background: url("./img/Tabimg/cart.png") no-repeat center 20%;
            background-size: auto 2rem;
        }
        .span-4{
            background: url("./img/Tabimg/mine.png") no-repeat center 20%;
            background-size: auto 2rem;
        }
        .active {
            animation: mymove 1s;
        }
        .back-span-1{
            background: url("./img/Tabimg/home-active.png") no-repeat center 20%;
            background-size: auto 2rem;
        }
        .back-span-2{
            background: url("./img/Tabimg/current-active.png") no-repeat center 20%;
            background-size: auto 2rem;
        }
        .back-span-3{
            background: url("./img/Tabimg/cart-active.png") no-repeat center 20%;
            background-size: auto 2rem;
        }
        .back-span-4{
            background: url("./img/Tabimg/mine-active.png") no-repeat center 20%;
            background-size: auto 2rem;
        }
    } 
 }
.navs-bubble-num{
    position: absolute;
    background-color: #f40;
    color: #fff;
    line-height: 1.8rem;
    width: 1.8rem;
    height: 1.8rem;
    text-align: center;
    font-size: 1rem;
    border-radius: 50%;
    left: 53%;
    top: .5rem;
    margin-left: 1rem;
}
 @keyframes mymove {
    0%{
        -webkit-background-size: auto .6rem;
        background-size: auto .6rem;
    }
    20%{
        -webkit-background-size: auto 2.2rem;
        background-size: auto 2.2rem;
    }
    40%{
        -webkit-background-size: auto 1.8rem;
        background-size: auto 1.8rem;
    }
    60%{
        -webkit-background-size: auto 2.06rem;
        background-size: auto 2.06rem;
    }
    80%{
        -webkit-background-size: auto 1.94rem;
        background-size: auto 1.94rem;
    }
    100%{
        -webkit-background-size: auto 2rem;
        background-size: auto 2rem;
    }
}
.result1{
    animation: mymove1 .5s ;
}
@keyframes mymove1 {
    0% {
        transform: scale(1)
    }
    50% {
        transform: scale(1.5)
    }
    100% {
        transform: scale(1)
    }
}
</style>

