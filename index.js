import load from './loading.vue'

const loading={
    install:function(Vue){
        Vue.component('loading',load)
    }
}

export default loading;