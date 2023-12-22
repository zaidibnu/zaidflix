<template>
    <div class="row">
        <div class="col-4 oLayout thinScroll" :style="attr.a.style" >
            <slot name="aPos"></slot>
        </div>
        <div class="col-8 oLayout"  >
            <slot name="bPos"></slot>
        </div>
    </div>
</template>
<script>
    export default{
        name:'LayoutB',
        props:{
            attr:Object
        }
    }
</script>
<style>
    .oLayout{
        height: 100vh;
        min-height: 100vh;
        overflow-x: hidden;
        overflow-y: scroll;
    }

</style>