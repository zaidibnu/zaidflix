<template>
  <SidePanel ref="SidePanel" :attr="sidePanelAttr"></SidePanel>
  <LayoutA :attr="{navbg:'bg-black'}">
      <template v-slot:navbar>
        <div class="col-6">
          <div class="text-start p-3">
            {{msg}}
          </div>
      </div>
      <div class="col-6">
          <div class="text-end w-100">
            <a class="bx bx-icon bxs-cog btnTB"></a>
            <a class="bx bx-icon bxs-grid btnTB" @click="this.openSidePanel()"></a>
          </div>
      </div>
      </template>
      <template v-slot:topContent>
        <div class="w-100 d-flex justify-content-center">
          <div class="myAvatar circle"></div> 
        </div>
        <div class="w-100 text-center">
          <div class="myName">Zaid Ibnu Awwal</div> 
        </div>
      </template>
      <template v-slot:bottomContent>
        <div  class="w-100 p-2">
        <div class="w-100" style="text-align: justify;">
          <div class="card-footer">
            <div class="row g-1">
              <div class="col-2">
                <router-link to="/about">
                  <div class="btn btn-sm btn-outline-success w-100">
                  <i class="bx bx-icon bx-user-circle"></i>
                  About
                </div>
                </router-link>
              </div>
              <div class="col-2">
                <router-link to="/contact">
                <div class="btn btn-sm btn-outline-primary w-100">
                  <i class="bx bx-icon bx-envelope"></i>
                  Contact
                </div>
                </router-link>
              </div>
              <div class="col-2">
                <div class="btn btn-sm btn-outline-primary w-100">
                  <i class="bx bx-icon bx-note"></i>
                  Blogs
                </div>
              </div>
            </div>
          </div>
        </div>
  </div>
      </template>
  </LayoutA>

</template>

<script>
import {ref} from 'vue'
import LayoutA from '../layouts/layoutA'
import SidePanel from '@/components/SidePanel/SidePanel.vue'
import xcom from '@/assets/components'
export default {
  name: 'HelloWorld',
  props: {
    msg:String,
  },
  data(){
    return {
      NewMessage:'',
      component_oc:null,
      sidePanelOpen:false,
      sidePanelAttr:{
        list:xcom
      },
      xwidth:ref(screen.width),
      xheight:ref(screen.height),
    }
  },
  async mounted(){
    try {
    const host = 'https://raw.githubusercontent.com/zaidibnu/zaidflix/master/hosted/dataserver.js?key=1';
    const result = await fetch(host);
    this.NewMessage = await result.json();
  } catch (error) {
    this.NewMessage = error;
  }
  },
  methods:{
    openSidePanel(){
      this.$refs.SidePanel.togglePanel();
    }
  },
  components:{LayoutA,SidePanel}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.circle{
  border-radius: 50%;
}
.myAvatar{
  height: 164px;
  width:164px;
  background: url('https://zaidflix.web.app/profile.jpg');
  background-position: center;
  background-size: cover;
  border:5px solid white;
  box-shadow: 1px 1px 13px 1px rgba(0,0,0,0.3);
}
.myName{
  color:#12e859;
  font-size: 48 px;
  font-weight: 700;
  word-spacing: 2pt;
  margin: 3px;
  &:hover{
    color:white;
    text-shadow: 1px 1px 1px 3 rgb(9, 243, 9);
    cursor: pointer;
    transition-property: color;
    transition-duration: 0.9s;
  }
}
.lt{
  background: rgba(255,255,255,0.1);
  min-height: 10vh;
  padding:2vh;
  border-radius: 8px;
  backdrop-filter: blur(3px);
  &:hover{
    transition-property: background;
    background:black;
    box-shadow: 0px 0px 4px 1px white;
    transition-duration: 1s;
  }
}
</style>
