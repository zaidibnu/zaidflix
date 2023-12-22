<template>
    <div :style="panelSide" :class="isOpen">
      <div class="sidePanelHeader">
            <div class="w-100text-start d-flex justify-content-between">
                    <span class="sidePanelTitle" style="padding-left:6px;">Zaidflix</span>
            <a class="btn btn-sm" @click="this.togglePanel()">
                <i class="bx bx-icon bx-x m-2"></i>
            </a>
            </div>
            <div class="p-2">
                <input type="search" ref="searchQuery" class="w-100 searchQuery"  :placeholder="attr.searchPlaceHolder"/>
            </div>
      </div>
      <div class="sidePanelBody p-1">
        <div class="w-100 d-flex list_item" v-for="(item,index) in attr.list" v-bind:key="index">
            <div class="text-start">
                <i class="bx bx-icon" :class="item.icon"></i>
                {{ item.name }}
            </div>
        </div>

      </div>
    </div>
  </template>
  
  <script>
  import {ref} from 'vue';
  export default {
    name: 'SidePanel',
    data() {
      return {
        panelSide: {
          width: '0vw',
          height: '100vh',
          right: '-25vw',
          top: '0',
          zIndex: '19999',
          position: 'fixed',
          background: 'rgba(255,255,255,.8)',
          backdropFilter: 'blur(8px)',
          boxShadow:'1px 1px 5px 1px rgba(0,0,0,0.7)'
        },
        isOpen: '',
      };
    },
    methods: {
      togglePanel() {
        this.isOpen = this.isOpen === 'isOpen' ? '' : 'isOpen';
      },
      getPanelSize(){
        if(ref(screen.width).value < ref(screen.height).value){
            return '55vw'
        }
        else{
            return '30vw'
        }
      }
    },
    watch: {
      isOpen(newValue) {
        if (newValue === 'isOpen') {
          // Set the width and right properties to show the panel
          this.panelSide.width = this.getPanelSize();
          this.panelSide.right = '0vw';
        } else {
          // Reset the width and right properties to hide the panel
          this.panelSide.width = '0vw';
          this.panelSide.right = '-25vw';
        }
      },
    },
    computed:{
        content(){
            return `a`
        }
    },
    props:{
        attr:{
            type:Object,
            default:()=>{
                return {
                    searchPlaceHolder:'Search',
                    list:[]
                }
            }
        }
    }
  };
  </script>
  
  <style>
  .sidePanelTitle {
    font-weight: 800;
    font-size: 18px;
    text-align: left;
    margin: 2px;
    text-shadow: 1px 1px 1px white;
    cursor: pointer;
  }
  .sidePanelHeader{
    height:82px;
  }
  .sidePanelBody{
    height:calc(100vh - 82px);
    background:rgba(0,0,0,0.1);
  }
  .isOpen {
    transition: width 0.5s, right 0.6s; /* Combine transition properties */
  }
  .searchQuery{
    outline:none;
    border-radius:8px;
    font-weight:500;
    font-size:14px;
    padding:2px 2px 4px 12px;
    border:0px;
    box-shadow:1px 1px 2px 1px rgba(0,0,0,0.2);
  }
  .list_item{
    border-bottom:1px solid rgba(100,100,100,0.3);
    cursor:pointer;
    min-height:36px;
    padding-top:8px;
  }
  .list_item:hover{
    font-weight:600;
    color:black;
    transition-property:font-weight;
    transition-duration:0.1s;
    cursor:pointer;
  }
  </style>
  