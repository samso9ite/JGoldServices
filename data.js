var app = new Vue({ 
    el: '#app',
    data: {
        giftcards: []
    },

    methods: {
       async  getCrypto(){
            const response = await fetch('https://api.omowumiojo.com/api/giftcard/')
            this.giftcards = await response.json()
          
        }
    },
    mounted() {
        this.getCrypto()
    },
});

var crypto = new Vue({ 
    el: '#crypto',
    data: {
        cryptos: []
    },

    methods: {
       async  getCryptos(){
            const response = await fetch('https://api.omowumiojo.com/api/crypto/')
            this.cryptos = await response.json()
         
        }
    },
    mounted() {
        this.getCryptos()
    },
});


var testimonials_data = new Vue({ 
    el: '#testimonials_data',
    data: {
        testimonials: []
    },

    methods: {
       async  getTestimonials(){
            const response = await fetch('https://api.omowumiojo.com/api/testimonial/')
            this.testimonials = await response.json()
        }
    },
    mounted() {
        this.getTestimonials()
    },
});

var add_testimonial = new Vue({ 
    el: '#add_testimonial',
    data: {
        name: '',
        testimony: ''
    },

    methods: {
       async  createTestimonial(){
        fetch("https://api.omowumiojo.com/api/testimonial/", {
            method: "POST",
            body: JSON.stringify({
                name: this.name,
                testimony: this.testimony,
                approval_status: false
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
            })
            .then((response) => {
                response.json()
                this.name = ''
                this.testimony = ''
                alert('Testimonial Added Successfully')
            })
        }
    },
   
});
