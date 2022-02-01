const app = Vue.createApp({
    data(){
        return {
            inputs:[
                {
                     name: 'sf'
                }
            ]
        }
    },
    methods:{
        add(index) {
            this.inputs.push({ name: '' });
        },
        remove(index) {
            this.inputs.splice(index, 1);
        }
    }
})
app.mount('#app')