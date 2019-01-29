<template>
    <div id="loading" v-show="isShow==true">
    </div>
</template>
<script>
export default {
    name:'loading',
    props:{
        isShow:{
            type:Boolean,
            default:true
        }
    },
    data(){
        return{
            // isShow:true
        }
    },
}
</script>
<style lang="css">
#loading {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #fefefe;
    background: url('./image/load.gif') center center no-repeat;
    background-size: 200px 
    
}
</style>
