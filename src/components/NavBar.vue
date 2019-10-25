<template>
  <div class="NavBar">
    <header class="mint-header is-fixed">
      <div class="mint-header-button is-left"></div> 
      <h1 class="mint-header-title">{{title}}</h1> 
      <div class="mint-header-button is-right"></div>
    </header>
  </div>
</template>

<script>
export default {
  name: 'NavBar',
  props: {
    title: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.mint-header {
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    background-color: rgb(59,159,235);
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    color: #fff;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    font-size: 18px;
    height: 40px;
    line-height: 1;
    padding: 0 10px;
    position: relative;
    text-align: center;
    white-space: nowrap;
}
.mint-header.is-fixed {
    top: 0;
    right: 0;
    left: 0;
    position: fixed;
    z-index: 1;
}


</style>
