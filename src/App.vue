<template>
    <router-view></router-view>
</template>
<script>
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

//import './main.css'
export default {
  name: 'App',
  components: {
  },
  data(){
    return {
      dbHost:'http://andromeda.s-net.id:5489/sql',
      imgHost:''
    }
  }
}
</script>

<style>
@import url("https://cdn.jsdelivr.net/npm/boxicons@2.1.0/css/boxicons.min.css");
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
  min-height: 100vh;
  max-height: 100vh;
  overflow: hidden;
}
.btnTB{
  width: 28px;
  height: 28px;
  font-size: 18px;
  text-align: center;
  overflow: hidden;
  margin: 1px;
  margin-top: 6px;
  text-decoration: none;
  color:white !important;
  border-radius: 6px;
  padding:5px;
  cursor: pointer;
  background-color: #2c3e50;
}
.btnTB:hover{
  transition-property: background, color,border;
  color:black !important;
  background: rgba(255,255,255,0.3);
  border: 1px solid white;
  transition-duration: .3s;
}
.thinScroll{
  /* Firefox */
* {
  scrollbar-width: thin;
  scrollbar-color: #C6C6C6 #DFE9EB;
}

/* Chrome, Edge and Safari */
&::-webkit-scrollbar {
  height: 7px;
  width: 7px;
}
&::-webkit-scrollbar-track {
  border-radius: 13px;
  background-color: #DFE9EB;
  border: 1px solid #FFFFFF;
}

&::-webkit-scrollbar-track:hover {
  background-color: #B8C0C2;
}

&::-webkit-scrollbar-track:active {
  background-color: #B8C0C2;
}

&::-webkit-scrollbar-thumb {
  border-radius: 13px;
  background-color: #C6C6C6;
}

&::-webkit-scrollbar-thumb:hover {
  background-color: #A6A9BC;
}

&::-webkit-scrollbar-thumb:active {
  background-color: #7FB4D5;
}

}
</style>
