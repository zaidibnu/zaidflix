<template>
    <div class="w-100" :class="this.isMobileTop">
        <div class="row xrownavbar" >
            <slot name="navbar"></slot>
        </div>
        <slot name="topContent" class="topContent">
        </slot>
        <video autoplay muted loop style="width: 100vw; height: 100vh; margin-top: 0vh; object-fit: cover; position: fixed;top:0; left: 0;
        filter:blur(3px);   z-index: -1;">
            <source src="https://s3.ap-southeast-1.wasabisys.com/c360966/background.mp4" type="video/mp4">
            Your browser does not support the video tag.
        </video>
    </div>
    <div class="w-100" :class="this.isMobileBottom">
        <slot name="bottomContent"> 

        </slot>
    </div>
</template>
<script>
import {ref} from 'vue'
export default{
    name:'LayoutA',
    data(){
        return {

        }
    },
    props:{
        attr:Object
    },
    computed:{
        isMobileTop:()=>{
            let xwidth = ref(screen.width).value;
            let xheight =ref(screen.height).value;
            let classTop ='desktopTop'
            if(xwidth < xheight){
                classTop = 'mobileTop'
            }
            return classTop
        },
        isMobileBottom:()=>{
            let xwidth = ref(screen.width).value;
            let xheight =ref(screen.height).value;
            let classTop ='desktopBottom'
            if(xwidth < xheight){
                classTop = 'mobileBottom'
            }
            return classTop
        }
    }
}
</script>
<style scoped>
.xrownavbar{
    height: 48px;
    width: 100vw;
    margin: 0px;
    left:0px;
    color:white
}
.mobileTop{
    height: 30vh;
    margin: 0;
    padding:0;
    background: rgba(0,0,0,0.5);
}
.mobileBottom{
    height: 70vh;
    margin: 0;
    padding:0;
    background: white;
}
.desktopTop{
    height: 100vh;
    margin: 0;
    padding:0;
    background:rgba(0,0,0,0.7);
}
.desktopBottom{
    height: 20vh;
    margin: 0;
    position:fixed;
    bottom:10vh;
    z-Index:999;
    padding:0;
    background:transparent;
    padding:20px
}
.topContent{
    height: calc(50vh - 48px);
    background: transparent;
}
</style>