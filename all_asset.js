var crypto_all = new Vue({ 
    el: '#crypto_all',
    data: {
        cryptos_all: []
    },

    methods: {
       async getCryptos_all(){
            const response = await fetch('http://127.0.0.1:8000/api/crypto/')
            this.cryptos_all = await response.json()
            console.log(this.cryptos_all);
            // console.log("I ran ");
            // this.cryptos_all = localStorage.getItem('cryptos')
            // console.log(this.cryptos_all);
        }
    },
    mounted() {
        this.getCryptos_all()
    },
});