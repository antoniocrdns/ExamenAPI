Vue.createApp({
    data() {
        return {
            localizador: [],
            localizadorData: null,
            loading: false,
            limite: 0
        }
    },
    mounted() {
        this.getlocalizado();
    },
    methods: {
        async getlocalizado() {
            this.localizador = []
            this.loading = true;

            for (let i = 1; i <= this.limite; i++) {

                const response = await fetch('https://rickandmortyapi.com/api/character/' + i, {
                    method: 'GET'
                });
                const data = await response.json();
                this.localizador.push(data);
            }
            this.loading = false;
        },
    }
}
).mount('#App')