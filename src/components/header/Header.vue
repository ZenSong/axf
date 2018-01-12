<template>
<div class="header">
  <header class="header1">
    <div class="location">深圳市民中心 裕安二路
    </div>
    <i class="header_search"><br><span>搜索</span></i>
  </header>
</div>
</template>
<script>
export default {
  
}
</script>
<style lang="less" scoped>
  .header1 {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 4.5rem;
    background-color: #FFD600;
    z-index: 2221;
    .location {
        position: absolute;
        left: 6rem;
        right: 6rem;
        height: 100%;
        text-align: center;
        line-height: 4.5rem;
        font-weight: 800;
        font-size: 1.6rem;
    }
    .header_search {
        position: absolute;
        right: 0;
        color: #222;
        width: 4rem;
        height: 100%;  
        font-size: 2.5rem;
        line-height: 1.5rem;
        text-align: center;
        background: url('img/serach.png') no-repeat center 10%;
        background-size: 50% 50%;
            span {
                display: inline-block;
                font-size: 1.2rem;
                margin-top: 30%;
            }
    }
}
</style>

