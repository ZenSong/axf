<template>
  <div class="supermarket">
      <heade></heade>
        <ul class="left-content">
        <li v-for="(item, index) in classifys" :key="item.classify_id"
        @click="selectClassifys(item.classify_id)">
            <span :class="{'left-border': activeClassifysId === item.classify_id}"></span>
            {{item.classify_title}}
        </li>
    </ul>
    <div class="right-content">
        <ul class="ul-1">
            <li  @click="changeShowClassification()">
                <span>{{classificationName}}</span>
                <i class="glyphicon glyphicon-menu-down" :class="{'rotate1':showClassification,'rotate2':!showClassification}"></i>
            </li>

            <li @click="changeshowSort()">
                <span>{{sortName}}</span>
                <i class="glyphicon glyphicon-menu-down" :class="{'rotate1':showSort,'rotate2':!showSort}"></i>
            </li>
        </ul>
        <!-- 各种分类 -->
        <div class="div-ul-3" v-show="showClassification">
             <ul class="ul-3">
                  <li @click.stop="changeCids('all','全部分类')">全部分类</li>
                  <li v-for="(item, index) in activeClassifysProduct.cids" :key="item.id"
                  @click.stop="changeCids(index,item.name)">{{item.name}}</li>
             </ul>
        </div>
        <!-- 综合排序的内容 -->
        <div class="div-ul-4" v-show="showSort">
            <ul class="ul-4">
                <li v-for="(item, index) in rankingList" :key="index"
                @click="changeSortIndex(index)">{{item}}</li>
            </ul>
        </div>
        <ul class="ul-2">
            <!-- 各种商品信息 -->
            <li v-for="(item, index) in filterClassifysProduct" :key="item.product_id">
                <div class="details-left">
                    <img v-lazy="item.imgs.small" :ref="'item'+index">
                </div>
                <div class="details-right">
                    <div class="details-character">
                        <div>{{item.title}}</div>
                        <div></div>
                        <div>{{item.unit}}ml</div>
                        <div>￥{{item.price}}</div>
                        <div>
                            <span v-show="item.num>0" @click.stop="subNum(index,item)">-</span>
                            <span v-show="item.num>0">{{item.num}}</span>
                            <span @click.stop="addNum(index, item)">+</span>
                        </div>
                    </div>
                </div>
            </li>
        </ul>
    </div>
  </div>
</template>
<script>
import Heade from '../header/header'
export default {
  created () {
    let cartPos = this.$store.state.cartPos
    this.cartPos = cartPos
  },
  data () {
      return {
          // 激活的分类id
          activeClassifysId: 1,
          // 显示分类的栏
          showClassification: false,
          // 显示综合排序栏
          showSort: false,
          // 默认的排序方式
          rankingList: ['综合排序', '价格最低', '价格最高'],
          // 全部分类栏名字
          classificationName: '全部分类',
          // 综合排序栏名字
          sortName: '综合排序',
          // 激活的分类下标
          allCategoriesIndex: 'all',
          // 激活的综合排序
          allSortIndex: 0,
          cartPos: {}
      }
  },
  components: {
    Heade
  },
  computed: {
      // 获取所有的分类数据
      classifys () {
          return this.$store.state.classifys
      },
      // 获取激活的分类数据
      activeClassifysProduct () {
          if (this.classifys.length > 0){
             return this.classifys.filter(item =>  Number(item.classify_id) === this.activeClassifysId)[0]
          }
          return {}
      },
      // 通过allCategoriesIndex来筛选数据 显示到列表中
      filterClassifysProduct () {
          // 数据是异步获取的，刚开始可能没有数据，所以判断一下，防止错误
          if (this.classifys.length > 0){
            if (this.allCategoriesIndex === 'all') {
                // 直接对原数组进行升降序会改变原数组,进行复制操作,不对原数组操作
               var  products = this.activeClassifysProduct.products.slice(0,this.activeClassifysProduct.products.length)
               if (this.allSortIndex === 0) {
                    return products
               } else if (this.allSortIndex === 1) {
                   // vue 框架已经把 排序 方法删除 ,我们利用数组的排序方法sort 进行排序
                   return products.sort((a,b)=> a.price - b.price)
               } else {
                   return products.sort((a,b)=> b.price - a.price)
               }
          
            } else {
              var  products = this.activeClassifysProduct.products.filter(item => Number(item.cids) === this.allCategoriesIndex)
              if (this.allSortIndex === 0) {
                return products
              }
              else if (this.allSortIndex === 1) {
                return products.sort((a,b)=> a.price - b.price)
              }
              else {
                   return products.sort((a,b)=> b.price - a.price)
              }
            }
          } 
          return {}
      }
  },
  methods: {
      // 点击选中分类
      selectClassifys (classify_id) {
          this.activeClassifysId = classify_id
          this.showClassification = false
          this.showSort = false
          //初始化 
          this.allCategoriesIndex = 'all'
          this.allSortIndex = 0
          this.classificationName = '全部分类'
          this.sortName = this.rankingList[0]
      },
      // 点击显示和隐藏分类栏
      changeShowClassification () {
          this.showClassification = !this.showClassification
          this.showSort = false
      },
      // 点击显示和隐藏综合排序
      changeshowSort () {
          this.showSort = !this.showSort
          this.showClassification = false
      },
      // 点击全部分类栏里的选项,筛选数据
      changeCids (index, name) {
          this.allCategoriesIndex = index
          // 选择分类栏里的项目之后 隐藏分类栏 
          this.showClassification = false
          // 改变 全部分类栏里的名字
          this.classificationName = name
      },
       // 点击综合排序栏里的选项,筛选数据
      changeSortIndex (index) {
          this.allSortIndex = index
           // 选择分类栏里的项目之后 隐藏分类栏 
          this.showSort = false
          // 改变 全部分类栏里的名字
          this.sortName = this.rankingList[index]
      },
      // 点击添加按钮 ,添加到购物车中,并增加数量
      addNum (index,item) {
        let userInfo = this.$store.state.userInfo 
        if (!userInfo.id) {
          this.$router.push('/login')  
        } else {
           item.num++
           this.$store.dispatch('addGoods',item)
           
          // 获取点击对象
            let imgObj = this.$refs['item' + index][0]
            let pos = imgObj.getBoundingClientRect()
            let cartPos = this.cartPos
            this.$addCart({
            src: item.imgs.small,
            width: pos.width,
            height: pos.height,
            start: {
                left: pos.left,
                top: pos.top
            },
            end: {
                left: cartPos.left,
                top: cartPos.top
            }
            })
            // tabBar中的购物车按钮动画
            this.$store.dispatch('changeNumZoomActive')
            }
      },
      // 点击减号按钮 ,减少该商品的数量
      subNum (index,item) {
        item.num--
        this.$store.dispatch('subGoods',item)
        this.$store.dispatch('changeNumZoomActive')
      }
  }
}
</script>
<style lang="less" scoped>
  .supermarket {
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 4.5rem;
    border-color: #e0e0e0;
    .left-content {
        float: left;
        height: 100%;
        position: fixed;
        width: 23.75%;
        font-size: 1.4rem;
        background-color: #f8f8f8;
        color: #6d6d6d;
         li {
            font-size: 1.2rem;
            height: 4.083rem;
            text-align: center;
            line-height: 4.083rem;
            border-bottom: 1px solid #e0e0e0;
            position: relative;
             span {
                display: inline-block;
                position: absolute;
                left: 0;
                width: 6px;
                height: 2.8rem;
                margin-top: .62rem;
             }
            
         }
    }
    .right-content {
        float: right;
        height: 100%;
        width: 75%;
        box-sizing: border-box;
        .ul-1  {
        width: 75%;
        position: fixed;
        font-size: 1.2rem;
        color: #777;
        border-bottom: 1px solid #e0e0e0;
        margin: 0;
        z-index: 22222;
        background-color: #FFFFFF;
        opacity: .9;
        li {
            float: left;
            width: 50%;
            height: 4.083rem;
            text-align: center;
            line-height: 4.083rem;
            display: flex;
            justify-content: center;
            i {
                display: inline-block;
                width: 1.2rem;
                height: 4rem;
                margin-left: .5rem;
                font-size: 12px;
                 text-align: center;
                background: url(img/icon-down.png) no-repeat left center;
                background-size: 1.2rem .5rem;
            }
            .rotate1{
                animation: Myrotate .2s forwards;
            }
            @keyframes Myrotate {
                0%{transform: rotateZ(0deg)}
                100%{transform: rotateZ(-180deg)}
            }
            .rotate2{
                animation: Myrotate1 .2s forwards;
            }
            @keyframes Myrotate1 {
                0%{transform: rotateZ(-180deg)}
                100%{transform: rotateZ(0deg)}
            }
          }
    }
        .div-ul-3,.div-ul-4{
        position: fixed;
        width: 75%;
        top: 8.683rem;
        right: 0;
        z-index:333333333;
        height: 75.3%;
        background-color: rgba(0,0,0,.18);
        .ul-3,.ul-4{
            width: 100%;
            position: absolute;
            background-color: #FDFDFD;
            padding-bottom: 1rem;
            margin: 0;
            li:nth-of-type(1),li:nth-of-type(1){
                border-color: #ffd600;
                background-color: #fff9d9;
            }
            li,li{
                float: left;
                border: solid 1px #e0e0e0;
                padding: .4rem .8rem;
                margin-left: .8rem;
                margin-top: .8rem;
                border-radius: .5rem;
            }
        }
    }
        .ul-2 {
            width: 75%;
            position: absolute;
            top: 4.083rem;
            li {
                width: 100%;
                padding: .5rem;
                height: 9.08333333rem;
                box-sizing: border-box;
                border-bottom: 1px solid #e0e0e0;
                  .details-left {
                     float: left;
                     width:42.1%;
                     img {
                        width: 100%;
                        height: 8rem;
                    }
                  }
                  .details-right {
                     float: left;
                     margin-left: 8px;
                     position: relative;
                     width: 54.38%;
                     .details-character {
                         div {
                             width: 90%;
                             height: 2rem;
                         }
                         div:nth-of-type(3) {
                             color: #999;
                        }
                         div:nth-of-type(4) {
                             color: #FF3800;
                        }
                        div:nth-of-type(5) {
                             position: absolute;
                             right: 0;
                             bottom: 0;
                             width: 68%;
                             height: 5rem;
                             display: flex;
                             justify-content: space-around;
                             align-items: center;
                        }
                        div:nth-of-type(5) > span:nth-of-type(1),
                        div:nth-of-type(5) > span:nth-of-type(3) {
                             display: inline-block;
                             width: 32.16%;
                             height: 2.5rem;
                             text-align: center;
                             line-height: 2.4rem;
                             border: 1px solid #FF4300;;
                             border-radius: 50%;
                             color: #FF4300;
                             font-size: 2.6rem;
                        }
                        div:nth-of-type(5) > span:nth-of-type(1){
                             height: 2.5rem;
                             line-height: 2.2rem;
                             position: absolute;
                             left: 6%;
                        }
                        div:nth-of-type(5) > span:nth-of-type(3){
                             position: absolute;
                             right: 3%;
                        }
                        div:nth-of-type(5) > span:nth-of-type(2){
                             position: absolute;
                             left: 40%;
                             width: 1.666666rem;
                             height: 2.3rem;
                             text-align: center;
                             line-height: 2.666666rem;
                        }
                     }
                  } 
                }
            li:nth-last-of-type(1) {
                margin-bottom: 5rem;
            }
        }
    } 
}
.left-border {
    border-left: 5px solid #FFD600;
}
</style>

