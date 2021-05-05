/* Descrizione:
Rifare l’esercizio dello slider come fatto assieme in classe.
Bonus:
Applicare l’autoplay allo slider: ogni 3 secondi, cambia immagine automaticamente. */


const app = new Vue({

    el: '#app',

    data:{

        counter:0,

        image:[
            'assets/img/img_1.jpg',
            'assets/img/img_2.jpg',
            'assets/img/img_3.jpg',
            'assets/img/img_4.jpg'
        ],

    },

    methods:{

        nextPhoto(){
            this.counter++;
            if(this.counter === this.image.length) this.counter = 0;
        }, 

        prevPhoto(){
            this.counter--;
            if(this.counter < 0) this.counter = this.image.length -1;
        },

        timerPhoto(){
            this.counter = setInterval(()=>{
                this.counter++;

                if(this.counter === this.image.length) this.counter = 0;

            }, 3000);
            
        }
    }
});