<template>
  <Layout :attr="{a:apos}">
    <template v-slot:aPos>
        <div class="w-100 d-flex justify-content-center p-2">
             <div class="myAvatar circle"></div>  
        </div>
        <div class="w-100 d-flex justify-content-center p-2">
                <div>
                    <router-link to="/"  class="btn btn-light">Back</router-link>  
                </div>
        </div>
    </template>
    <template v-slot:bPos>
        <div class="container" style="margin-top: 3vh; font-size: 18px;" >
        <h1 class="text-start">Hello there...</h1>
            <p class="text-start">Hello, I'm a passionate and dedicated individual with a diverse set of interests and experiences. My journey through life has been marked by a constant curiosity and a drive for continuous learning. Born and raised in [Your Hometown], I developed an early appreciation for [something unique about your hometown].
        </p>
        <p class="text-start">With a background in [Your Educational Background or Current Profession], I have honed my skills in [specific skills or expertise] and have had the opportunity to work on projects that have significantly contributed to my personal and professional growth. I thrive in dynamic environments and enjoy taking on challenges that allow me to think creatively and find innovative solutions.
        </p>
        <p class="text-start">Beyond my professional pursuits, I am an avid [Your Hobbies or Interests]. Whether it's [specific activities or hobbies], I find joy in the simple pleasures of life. My friends often describe me as [a personality trait or characteristic], and I believe in the importance of maintaining a positive outlook in all aspects of life.
        </p>
        <p class="text-start">In my free time, you can find me [what you enjoy doing during your free time]. I am also deeply committed to [any causes or community involvement], as I believe in giving back to the community that has played a crucial role in shaping who I am today.
        </p>
        <p class="text-start">Looking forward, I am excited about the prospect of [Your Future Aspirations or Goals], and I am eager to explore new opportunities that align with my values and aspirations. I believe that life is a continuous journey of self-discovery, and I am always open to new experiences and meaningful connections.
        </p>
        </div>
    </template>
  </Layout>
</template>
<script>
import Layout from '../layouts/layoutB.vue'
export default {
    name:'AboutVue',
    data(){
        return{ 
            apos:{
                style:{
                    background:'rgba(0,0,0,1)',
                    backdropFilter:'blur(8px)'
                }
            }
        }
    },
    components:{Layout}
}
</script>