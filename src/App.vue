<template>
  <div id="app">
     <router-view></router-view>
  </div>
</template>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;

}
.logoout{
  position: fixed;
  z-index: 9111;
  bottom: 17vh;
  right: 20px;
  width: 14vw;
  height: 14vw;
  border-radius: 50%;
  background: #579fe9;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 2px 2px 5px #666;
}
.fback{
  width: 7vw;
  height: 3vh;
  position: fixed;
  top: 2vh;
  left: 2vw;
  z-index: 10;
}
.fback img{
  width: 100%;
  height: 100%;
}
.boxshadow{
  width: 100%;
  height: 100%;
  position: fixed;
  background: #666;
  background: rgba(0,0,0,0.4);
  top: 0;
  left: 0;
  z-index: 1110;
  display:flex;
  flex-direction:row;
  justify-content:center;
  align-items:center;
}
.autobox{
  background-color: #fff;
  z-index: 1111;
  width: 80vw;
  text-align: center;
  font-size: 20px;
}
</style>
