<template>
  <div class="login">
    <header-gray headerTitle="验证手机" back="true"></header-gray>
    <div class="main">
      <div class="login">
        <div class="pic theme-bg" :class="{'pic-hide': picHide}">
          <p class="pic-word">为了方便您及时查询订单信息，鲜蜂侠需要验证您的手机号为查询帐号</p>
        </div>
        <div class="inputs">
          <div class="phone-padding spline-bottom">
            <input class="phone" type="tel" placeholder="手机号码" v-model="phone" @focus="picHidefocus()" @blur="picHideBlue()">
          </div>
        </div>
        <div class="theme-bg login-submit" @click="login()">确定</div>
      </div>
    </div>
  </div>
</template>
<script>
import HeaderGray from '../header-gray/Header-gray'
let timer
export default {
  data () {
    return {
      picHide: false,
      phone: ''
    }
  },
  methods: {
    // 当input聚焦的时候 ,直接让图片消失
    picHidefocus () {
      clearTimeout (timer)
      this.picHide = true
    },
    // 当input不聚焦的时候 让图片慢慢消失
    picHideBlue () {
     timer = setTimeout( () => {
      this.picHide = false
      }, 2000);
    },
    // 点击确定按钮 判断手机号码是否正确
    login () {
        if (!(/^1[3578]\d{9}$/.test(this.phone))) {
            this.$msg ('提示', '手机号码不正确')
        } else {
           // 手机验证成功
            this.$store.dispatch('login', this.phone)
            .then(res => {
              return this.$msg('提示', res)
            })
            .then(res => {
              this.$router.push('/shoppingcart')
            })
        }
    }
  },
  components: {
    HeaderGray
  }
}
</script>
<style lang="less" scoped>
.main{
  bottom: 0;
}
.pic{
  height: 6.9rem;
  background-image: url('img/pic.png');
  background-repeat: no-repeat;
  background-position: 1rem bottom;
  -webkit-background-size: auto 80%;
  background-size: auto 80%;
  position: relative;
  overflow: hidden;
  -webkit-transition: height .4s;
  -o-transition: height .4s;
  transition: height .4s;
}
.pic-word{
  position: absolute;
  top: 1.7rem;
  width: 62%;
  right: 0;
  font-size: 1.2rem;
  line-height: 1.5rem;
  color: #000;
}
.inputs{
  background-color: #fff;
}
.phone-padding{
  padding: 0 1.5rem;
}
.phone{
  font-size: 1.4rem;
  outline: none;
  height: 4rem;
  line-height: 4rem;
  width: 100%;
  border: 0;
}
.login-submit{
  margin: 2rem .6rem;
  height: 4rem;
  line-height: 4rem;
  text-align: center;
  font-size: 1.6rem;
}
.pic-hide{
  height: 0px !important;
}
.theme-bg {
    background-color: #ffd600;
}
</style>


