<template>
 <div class="" style="
 margin-left: 10vw;
 width:80vw;
 border-radius: 8px;
 margin-top: 2vh;
 height: 99vh;
 max-height: 90vh;
 background:rgba(0,0,0,0.5); 
 backdrop-filter: blur('5px'); overflow-y: hidden;">
    <div class="w-100 row">
        <div class="col-12 d-flex" >
            <router-link to="/" class="bx bx-icon bxs-left-arrow-circle btnTB " style="margin-left: 8px;" />
            <router-link to="/" class="bx bx-icon bxs-home btnTB " style="margin-left: 8px;" />
            <input class="form-control m-2 w-50" style="font-size:12px;">
        </div>
    </div>
    <div class="g-2 row thinScroll m-3" style="min-height: 30vh;
    max-height: 100%;
    overflow-y: scroll;
    padding-bottom: 10vh;
    " v-if="notContent">
        <div class="col-3" v-for="(item,index) in items" v-bind:key="index">
            <div class="card citem "  style="min-height: 3vh;">
                <div class="card-body" style="font-size: 12px;">
                    {{ item.date }}
                </div>
                <div class="card-footer bTitle" :title="item.title"
                @click="open(index)"
                > 
                    {{ item.title }}
                </div>
            </div>
        </div>
    </div>
    <div class="g-2 row thinScroll m-3" style="min-height: 80%;
    max-height: 90%;
    overflow-y: scroll;
    padding-bottom: 10vh;
    background: rgba(255,255,255,0.8);
    color:black;
    " v-if="!notContent">
        <div class="m2 p2 text-start">
            <h2>{{ items[current].title }}</h2>
        </div>
        <div v-html="content"></div>
    </div>
 </div>
        <video autoplay muted loop style="width: 100vw; height: 100vh; margin-top: 0vh; object-fit: cover; position: fixed;top:0; left: 0;
        filter:blur(3px);   z-index: -1;">
            <source src="https://s3.ap-southeast-1.wasabisys.com/c360966/background.mp4" type="video/mp4">
            Your browser does not support the video tag.
        </video>
</template>
<script>
export default {
  name: 'MyBlog',
  data() {
    return {
      items: [],
      current:0,
      blogUrl: './blog.js',
      notContent:true,
    };
  },
  mounted() {
    import('../../public/blog.js')
      .then((result)=>{
        //console.log(result.default)
        this.items=result.default
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  },
  methods:{
    open(id){
        this.current = id;
        fetch(`https://raw.githubusercontent.com/zaidibnu/zaidflix/master/hosted/${this.items[id].id}.html`).then((result)=>{
            result.text().then((ctn)=>{
                this.content =ctn;
                        this.notContent = false 
                        console.log(id)
            })
        })
    }
  }
};
</script>
<style>
.bTitle{
    flex-wrap: nowrap;
  white-space: nowrap; /* Corrected property name */
  overflow: hidden;
  text-overflow: ellipsis;
  cursor: pointer;
  min-height: 7vh;
  font-size: 13px;
  &:hover{
    font-weight: 700;
  }
    
}
.citem{
    &:hover{
        opacity: .7;
        cursor: pointer;
        transition-property: opacity;
        transition-duration: .8s;
    }
}
</style>