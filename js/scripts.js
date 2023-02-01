const { createApp } = Vue;

createApp ({

    data (){

        return{
            emailList: []
        }

    },

    methods: {

        generateEmail() {

            for(let i=0; i<10; i++) {

                axios
                .get('https://flynn.boolean.careers/exercises/api/random/mail')
                .then((resp) => {

                        console.log(i, resp.data.response);

                        this.emailList.push(resp.data.response)
                    }
                )
            }
        }

    }

}).mount('#app');

