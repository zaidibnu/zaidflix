<template>
 <div class="" style="
 margin-left: 10vw;
 width:80vw;
 border-radius: 8px;
 margin-top: 2vh;
 height: 90vh;
 max-height: 90vh;
 background:rgba(0,0,0,0.5); 
 backdrop-filter: blur('5px'); overflow-y: hidden;">
    <router-link to="/">Back</router-link>
    <div class="g-2 row thinScroll m-3" style="min-height: 30vh;
    max-height: 100%;
    overflow-y: scroll;">
        <div class="col-3" v-for="(item,index) in items" v-bind:key="index">
            <div class="card "  style="min-height: 10vh;">
                <div class="card-body"></div>
                <div class="card-footer bTitle" :title="item.title"
                @click="open(item.id)"
                > 
                    {{ item.title }}
                </div>
            </div>
        </div>
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
      blogUrl: './blog.js'
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
        alert(id)
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
</style>