<template>
 <div class="w-100 p-2" style="height: 100vh;">
    <div class="row" style="min-height: 50vh;">
        <div class="col-4" v-for="(item,index) in items" v-bind:key="index">
            <div class="card"  style="min-height: 20vh;">
                {{ item }}
            </div>
        </div>
    </div>
 </div>
</template>
<script>
export default {
  name: 'MyBlog',
  data() {
    return {
      items: [],
      blogUrl: 'https://raw.githubusercontent.com/zaidibnu/zaidflix/master/hosted/blog.js'
    };
  },
  mounted() {
    import(this.blogUrl)
      .then((result)=>{
        console.log(result)
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }
};
</script>
<style>

</style>