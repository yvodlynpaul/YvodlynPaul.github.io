
const app = Vue.createApp({
    data() {
        return {
            birthDate: null,
            result: '',
            d3: 0,
            m3: 0,
            y3: 0,
        };
    },
    methods: {
        calculateAge() {
            let birthDate = new Date(this.birthDate);

            let d1 = birthDate.getDate();
            let m1 = birthDate.getMonth() + 1;
            let y1 = birthDate.getFullYear();

            let today = new Date();

            let d2 = today.getDate();
            let m2 = today.getMonth() + 1;
            let y2 = today.getFullYear();

            this.y3 = y2 - y1;

            if (m2 >= m1) {
                this.m3 = m2 - m1;
            } else {
                this.y3--;
                this.m3 = 12 + m2 - m1;
            }

            if (d2 >= d1) {
                this.d3 = d2 - d1;
            } else {
                this.m3--;
                this.d3 = this.getDaysInMonth(y1, m1) + d2 - d1;
            }
            if (this.m3 < 0) {
                this.m3 = 11;
                this.y3--;
            }
        },
        getDaysInMonth(year, month) {
            return new Date(year, month, 0).getDate();
        }
    }
})

app.mount("#app");
