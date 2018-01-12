<template>
  <div class="shopping-cart">
    <header class="header2">购物车</header>
    <div class="main-top">
        <div class="location1">
            <div class="left-location">
                <div>收&nbsp;&nbsp;货&nbsp;&nbsp;人</div>
                <div>电&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;话</div>
                <div>收货地址</div>
            </div>
            <div class="centre-location">
                <div>{{showSite.linkman}}&nbsp;&nbsp;&nbsp;{{showSite.sex?"女士":"先生"}}</div>
                <div>{{showSite.phone}}</div>
                <div>{{showSite.city}}{{showSite.site}}</div>
            </div>
            <div class="right-location" @click="amendSite()">
                修改 
            </div>
        </div>
        <div class="cart-group">
            <div class="theme-grayfont">
                闪送超市
                <span>凑单专区</span>
            </div>
            <p class="cart-group-p1">¥0起送，22:00前满¥30免运费，22:00后满¥50免运费</p>
            <p class="cart-group-p2">
                <span>收货时间</span>
                <span>{{time}}</span>
                <span>
                        可预定
                </span>
                <select name="" class="group-receive-select" v-model="time">
                    <optgroup label="今天">
                        <option  value="30分钟送达" data-dateid="0" data-time="30分钟送达" data-dateidstr="今天"
                                selected="">30分钟送达
                        </option>
                        <option value="12:00-13:00" data-dateid="0" data-time="12:00-13:00" data-dateidstr="今天">
                            12:00-13:00
                        </option>
                        <option value="13:00-14:00" data-dateid="0" data-time="13:00-14:00" data-dateidstr="今天">
                            13:00-14:00
                        </option>
                        <option value="14:00-15:00" data-dateid="0" data-time="14:00-15:00" data-dateidstr="今天">
                            14:00-15:00
                        </option>
                        <option value="15:00-16:00" data-dateid="0" data-time="15:00-16:00" data-dateidstr="今天">
                            15:00-16:00
                        </option>
                        <option value="16:00-17:00" data-dateid="0" data-time="16:00-17:00" data-dateidstr="今天">
                            16:00-17:00
                        </option>
                        <option value="17:00-18:00" data-dateid="0" data-time="17:00-18:00" data-dateidstr="今天">
                            17:00-18:00
                        </option>
                        <option value="18:00-19:00" data-dateid="0" data-time="18:00-19:00" data-dateidstr="今天">
                            18:00-19:00
                        </option>
                        <option value="19:00-20:00" data-dateid="0" data-time="19:00-20:00" data-dateidstr="今天">
                            19:00-20:00
                        </option>
                        <option value="20:00-21:00" data-dateid="0" data-time="20:00-21:00" data-dateidstr="今天">
                            20:00-21:00
                        </option>
                        <option value="21:00-22:00" data-dateid="0" data-time="21:00-22:00" data-dateidstr="今天">
                            21:00-22:00
                        </option>
                        <option value="22:00-23:00" data-dateid="0" data-time="22:00-23:00" data-dateidstr="今天">
                            22:00-23:00
                        </option>
                    </optgroup>
                    <optgroup label="明天">
                        <option value="明天 09:00-10:00" data-dateid="1" data-time="09:00-10:00" data-dateidstr="明天">
                            09:00-10:00
                        </option>
                        <option value="明天 10:00-11:00" data-dateid="1" data-time="10:00-11:00" data-dateidstr="明天">
                            10:00-11:00
                        </option>
                        <option value="明天 11:00-12:00" data-dateid="1" data-time="11:00-12:00" data-dateidstr="明天">
                            11:00-12:00
                        </option>
                        <option value="明天 12:00-13:00" data-dateid="1" data-time="12:00-13:00" data-dateidstr="明天">
                            12:00-13:00
                        </option>
                        <option value="明天 13:00-14:00" data-dateid="1" data-time="13:00-14:00" data-dateidstr="明天">
                            13:00-14:00
                        </option>
                        <option value="明天 14:00-15:00" data-dateid="1" data-time="14:00-15:00" data-dateidstr="明天">
                            14:00-15:00
                        </option>
                        <option value="明天 15:00-16:00" data-dateid="1" data-time="15:00-16:00" data-dateidstr="明天">
                            15:00-16:00
                        </option>
                        <option value="明天 16:00-17:00" data-dateid="1" data-time="16:00-17:00" data-dateidstr="明天">
                            16:00-17:00
                        </option>
                        <option value="明天 17:00-18:00" data-dateid="1" data-time="17:00-18:00" data-dateidstr="明天">
                            17:00-18:00
                        </option>
                        <option value="明天 18:00-19:00" data-dateid="1" data-time="18:00-19:00" data-dateidstr="明天">
                            18:00-19:00
                        </option>
                        <option value="明天 19:00-20:00" data-dateid="1" data-time="19:00-20:00" data-dateidstr="明天">
                            19:00-20:00
                        </option>
                        <option value="明天 20:00-21:00" data-dateid="1" data-time="20:00-21:00" data-dateidstr="明天">
                            20:00-21:00
                        </option>
                        <option value="明天 21:00-22:00" data-dateid="1" data-time="21:00-22:00" data-dateidstr="明天">
                            21:00-22:00
                        </option>
                        <option value="明天 22:00-23:00" data-dateid="1" data-time="22:00-23:00" data-dateidstr="明天">
                            22:00-23:00
                        </option>
                    </optgroup>
                    <optgroup label="后天">
                        <option value="后天 09:00-10:00" data-dateid="1" data-time="09:00-10:00" data-dateidstr="明天">
                            09:00-10:00
                        </option>
                        <option value="后天 10:00-11:00" data-dateid="1" data-time="10:00-11:00" data-dateidstr="明天">
                            10:00-11:00
                        </option>
                        <option value="后天 11:00-12:00" data-dateid="1" data-time="11:00-12:00" data-dateidstr="明天">
                            11:00-12:00
                        </option>
                        <option value="后天 12:00-13:00" data-dateid="1" data-time="12:00-13:00" data-dateidstr="明天">
                            12:00-13:00
                        </option>
                        <option value="后天 13:00-14:00" data-dateid="1" data-time="13:00-14:00" data-dateidstr="明天">
                            13:00-14:00
                        </option>
                        <option value="后天 14:00-15:00" data-dateid="1" data-time="14:00-15:00" data-dateidstr="明天">
                            14:00-15:00
                        </option>
                        <option value="后天 15:00-16:00" data-dateid="1" data-time="15:00-16:00" data-dateidstr="明天">
                            15:00-16:00
                        </option>
                        <option value="后天 16:00-17:00" data-dateid="1" data-time="16:00-17:00" data-dateidstr="明天">
                            16:00-17:00
                        </option>
                        <option value="后天 17:00-18:00" data-dateid="1" data-time="17:00-18:00" data-dateidstr="明天">
                            17:00-18:00
                        </option>
                        <option value="后天 18:00-19:00" data-dateid="1" data-time="18:00-19:00" data-dateidstr="明天">
                            18:00-19:00
                        </option>
                        <option value="后天 19:00-20:00" data-dateid="1" data-time="19:00-20:00" data-dateidstr="明天">
                            19:00-20:00
                        </option>
                        <option value="后天 20:00-21:00" data-dateid="1" data-time="20:00-21:00" data-dateidstr="明天">
                            20:00-21:00
                        </option>
                        <option value="后天 21:00-22:00" data-dateid="1" data-time="21:00-22:00" data-dateidstr="明天">
                            21:00-22:00
                        </option>
                        <option value="后天 22:00-23:00" data-dateid="1" data-time="22:00-23:00" data-dateidstr="明天">
                            22:00-23:00
                        </option>
                    </optgroup>
                </select>
            </p>
            <div class="group-comment">
                <span>收货备注</span>
                <input type="text" placeholder="可输入100字以内特殊要求内容">
            </div>
            <ul class="grocery-list">
                <!-- 购物车里的商品数组 -->
                <li v-for="(item, index) in carts" :key="item.id">
                    <div class="tap-action-left">
                        <span :class="{'check-all1': item.selected}" @click="changeSelected(item)"></span>
                    </div>
                    <div class="tap-action-right">
                         <img v-lazy="item.imgs.small">
                        <div class="tap-action-right-details">
                            <div class="tap-action-right-name">{{item.title}}</div>
                            <div class="tap-action-right-price">￥{{item.price}}</div>
                        </div>
                        <div class="product-operates1">
                            <span @click="subNum(index,item)">-</span>
                            <span>{{item.num}}</span>
                            <span @click="addNum(index,item)">+</span>
                        </div>
                    </div>
                </li>
                <div class="general-ledger">
                    <!-- check-all1 为全选的背景图片class -->
                    <span class="check-all" :class="{'check-all1':checkAll}"
                    @click="IsCheckAll()">全选&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;共 ：</span>
                    <span class="allMoney1">￥{{money}}</span>
                    <div class="chosen" v-show="!selectOK">
                        满￥0起送
                    </div>
                    <div class="chosen1" v-show="selectOK">
                        选好了
                    </div>
                </div>
            </ul>
        </div>
    </div>
  </div>
</template>
<script>
export default {
    created () {
      // 一进入购物车就判断是否登录状态
      if (!this.userInfo.id) {
      this.$router.push('/login')
      } else {
          if (!this.userInfo.selectedSite.id) {
             this.$router.push('/site')  
          }
          else {
             this.$router.push('/shoppingcart') 
          }
      }
    },
    data () {
        return {
            time: '30分钟送达',
            SelectAll: ''
        }
    },
    computed: {
        userInfo () {
            let userInfo = this.$store.state.userInfo
            if (userInfo.id) {
            return userInfo
            } else {
            userInfo.selectedSite = {}
            return userInfo
            }
        },
        // 显示收货地址
        showSite () {
            return this.$store.state.userInfo.selectedSite
        },
        // 购物车里的商品列表
        carts () {
            return this.$store.state.carts
        },
        // 是否全选状态
        checkAll () {
            let carts = this.carts
            let isCheckAll = true
            for(let i = 0; i< carts.length; i++) {
                if (carts[i].selected === false) {
                    isCheckAll = false
                    this.SelectAll = false
                    return false
                }
            }
            if (isCheckAll) {
                this.SelectAll = true
                return true
            }
        },
        // 总钱数
        money () {
            let carts = this.$store.state.carts
            let money = 0
            for(let i = 0; i< carts.length; i++){
                if (carts[i].selected) {
                    money += carts[i].price
                }
            }
            return money.toFixed(2)
        },
        // 是否选好商品
        selectOK () {
            let carts = this.$store.state.carts
            for(let i = 0; i< carts.length; i++){
                if (carts[i].selected) {
                    return true
                }
            }
            return false
        }
    },
    methods: {
        amendSite () {
            this.$router.push('/site')
        },
        // 点击加号,修改原数据中的num数值,这是购物车中的对象
        addNum (index,item) {
          let classifys = this.$store.state.classifys
          let  searchItem = []
          for(let i =0; i < classifys.length; i++){
            searchItem = this.$store.state.classifys[i].products.filter(pro => Number(pro.product_id) === Number(item.product_id))
           if (searchItem != undefined) {
               break
           }
          }
           searchItem[0].num++
           this.$store.dispatch('addGoodsone',item)
           // 点击加号的时候,如果商品之前没有被选中,就让他变为选中状态
           //修改vuex中carts selected值
           item.selected = true
           this.$store.dispatch('selectTure',item)
           this.$store.dispatch('changeNumZoomActive')
        },
        // 点击减号, 修改原数据中的num数值
        subNum (index,item) {
          let classifys = this.$store.state.classifys
          let  searchItem = []
          for(let i =0; i < classifys.length; i++){
            searchItem = this.$store.state.classifys[i].products.filter(pro => Number(pro.product_id) === Number(item.product_id))
           if (searchItem != undefined) {
               break
           }
          }
           searchItem[0].num--
           this.$store.dispatch('subGoodsone',item)
           this.$store.dispatch('changeNumZoomActive')
        },
        // 选择是否选中商品
        changeSelected (item) {
            this.$store.dispatch('changeSelected',item)
            item.selected = !item.selected
        },
        // 点击全选 
        IsCheckAll () {
            this.$store.dispatch('AllchangeSelected',this.SelectAll) 
            let carts = this.$store.state.carts
            if (this.SelectAll) {
                for(let i = 0; i < carts.length; i++) {
                    carts[i].selected = false
                }
                this.SelectAll = false
            } else {
                for(let i = 0; i < carts.length; i++) {
                    carts[i].selected = true
                }
                this.SelectAll = true
            }
        }
    }
}
</script>
<style lang="less" scoped>
.shopping-cart{
    .header2 {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 4.5rem;
        background-color: #F9FAFD;
        z-index: 2222;
        text-align: center;
        line-height: 4.5rem;
        font-size: 1.6666666rem;
        font-weight: 800;
    }
    .main-top {
        position: absolute;
        top: 4.5rem;
        left: 0;
        width: 100%;
        font-size: 16px;
        background-color: #EFEFEF;
        .location1 {
            width: 100%;
            height: 9.3333333rem;
            margin-bottom: 1rem;
            background-color: white;
            .left-location {
                float: left;
                width: 28%;
                height: 100%;
                line-height: 1.4rem;
                div {
                    padding: .7rem 1rem .7rem 1.5rem;
                    box-sizing: border-box;
                }
                div:nth-last-of-type(1) {
                    padding: .7rem 1rem .7rem 1.5rem;
                    box-sizing: border-box;
                }
            }
            .centre-location {
                float: left;
                height: 100%;
                line-height: 1.4rem;
                width: 55.2%;
                div {
                    padding: .7rem 0;
                    box-sizing: border-box;
                }
            }
            .right-location {
                float: left;
                width: 16.8%;
                height: 100%;
                line-height: 9.3333333rem;
                text-align: left;
                background: url('img/cart-more.png') no-repeat 3.2rem center;
                background-size: 55% 12%
            }
        }
        .cart-group {
            padding: .5rem 0 0 0;
            margin: 1rem 0;
            background-color: white;
            .theme-grayfont {
                height: 3rem;
                font-size: 1.2rem;
                padding-left: 1.2rem;
                background: 1.6rem top no-repeat;
                background-size: 2rem;
                line-height: 2rem;
                color: #999;
                position: relative;
                span {
                    position: absolute;
                    right: 1.4rem;
                    top: 0;
                    font-size: 1.2rem;
                    width: 7.2rem;
                    height: 2.4rem;
                    line-height: 2.4rem;
                    border-radius: 1.2rem;
                    border: 1px solid #E64F1A;
                    text-align: center;
                    color: #e64f1a;
                }
            }
            .theme-grayfont::before {
                content: '';
                display: inline-block;
                width: .4rem;
                height: 1.2rem;
                vertical-align: -.1rem;
                border-radius: .2rem;
                margin-right: .5rem;
                background-color: #ffd600;
            }
            .cart-group-p1 {
                font-size: 1.1rem;
                line-height: 2rem;
                padding-left: 1.2rem;
                color: #999;
                border-bottom: 1px solid #EEEEEE;
                margin: 0;
            }
            .cart-group-p2 {
                padding-left: 1.4rem;
                padding-right: 1.4rem;
                margin: 0;
                height: 5rem;
                line-height: 5rem;
                position: relative;
                border-bottom: 1px solid #EEEEEE;
                font-size: 1.4rem;
                .group-receive-select {
                    position: absolute;
                    top: 0;
                    left: 0;
                    height: 100%;
                    width: 100%;
                    border: 0;
                    background: 0 0;
                    opacity: 0;
                    outline: none;
                    -webkit-appearance: none;
                }
                span:nth-of-type(2) {
                    margin-left: 10px;
                    color: #e64f1a;
                    font-size: 16px;
                }
                 span:nth-of-type(3) {
                    position: absolute;
                    width: 5rem;
                    line-height: 5rem;
                    right: 20px;
                    background: url(img/cart-more.png) no-repeat 4.6rem center;
                    background-size: 1.8rem 1.1rem;
                }
            }
            .group-comment {
                width: 100%;
                height: 5rem;
                padding-left: 1.4rem;
                line-height: 5rem;
                font-size: 1.4rem;
                border-bottom: 1px solid #EEEEEE;
                box-sizing: border-box;
                input {
                    width: 67.89%;
                    height: 3.2rem;
                    border: solid 1px #cecece;
                    text-indent: 1.4rem;
                    border-radius: .5rem;
                    margin-left: 1.2rem;
                    outline: none;
                }
            }
            .grocery-list{
                margin-bottom: 5rem;
                li{
                    width: 100%;
                    height: 8rem;
                    position: relative;
                    border-bottom: 1px solid #EEEEEE;
                    .tap-action-left{
                        width: 16%;
                        height: 100%;
                        float: left;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        span{
                            display: block;
                            width: 1.8rem;
                            height: 1.8rem;
                            background: url('img/checkbox.png') no-repeat;
                            background-size: 1.8rem 1.8rem;;
                        }
                        .check-all1{
                        display: block;
                        width: 1.8rem;
                        height: 1.8rem;
                        background: url('img/checkbox-selectd.png') no-repeat;
                        background-size: 1.8rem 1.8rem;
                    }

                    }
                    .tap-action-right{
                        float: left;
                        width: 83%;
                        height: 100%;
                        img{
                            width: 5rem;
                            height: 100%;
                            padding: 1.5rem 0;
                            float: left;
                            box-sizing: border-box;
                        }
                        .tap-action-right-details{
                            float: left;
                            width: 79.86%;
                            height: 100%;
                            .tap-action-right-name,.tap-action-right-price{
                                padding-left: 1.4rem;
                                width: 100%;
                                height: 50%;
                                line-height: 4rem;
                                box-sizing: border-box;
                            }
                            .tap-action-right-price{
                                color: red;
                            }
                        }
                        .product-operates1{
                            position: absolute;
                            right: 0;
                            bottom: 0;
                            width: 9rem;
                            height: 5rem;
                            display: flex;
                            justify-content: space-around;
                            align-items: center;
                            span:nth-of-type(1),span:nth-of-type(3){
                                display: inline-block;
                                width: 2.666666rem;
                                height: 2.666666rem;
                                text-align: center;
                                line-height: 2.666666rem;
                                border: 1px solid #FF4300;
                                border-radius: 50%;
                                color: #FF4300;
                                font-size: 3rem;
                            }
                            span:nth-of-type(1){
                                height: 2.666666rem;
                                line-height: 2.2rem;
                                position: absolute;
                                left: 0;
                            }
                            span:nth-of-type(2){
                                position: absolute;
                                left: 34px;
                                width: 2.4rem;
                                height: 2.666666rem;
                                text-align: center;
                                line-height: 2.666666rem;
                            }
                            span:nth-of-type(3){
                                position: absolute;
                                right: 12px;
                            }
                        }
                    }
                }
                .general-ledger{
                    padding-left: 1.4rem;
                    width: 100%;
                    height: 5rem;
                    margin-top: 0;
                    line-height: 5rem;
                    position: relative;
                    box-sizing: border-box;
                    .check-all{
                        display: inline-block;
                        padding-left: 2.5rem;
                        background: url('img/checkbox.png') no-repeat;
                        background-size: 1.8rem 1.8rem;
                        background-position: 1px center;
                        box-sizing: border-box;
                    }
                    .check-all1{
                        background: url('img/checkbox-selectd.png') no-repeat;
                        background-size: 1.8rem 1.8rem;
                        background-position: 1px center;
                    }
                    .allMoney1{
                        color: #E64F1A;
                    }
                    .chosen{
                        width: 10rem;
                        height: 100%;
                        text-align: center;
                        background-color: gray;
                        position: absolute;
                        right: 0;
                        top: 0;
                    }
                    .chosen1{
                        width: 10rem;
                        height: 100%;
                        text-align: center;
                        background-color: #FFD600;
                        position: absolute;
                        right: 0;
                        top: 0;
                    }
                }
            }
        }
    }
}
</style>


