const app = Vue.createApp({
    data() {
        return {
            title: 'Improve your front-end skills by building projects',
            content: 'Scan the QR code to visit Frontend Mentor and take your coding skills to the next level',
            url: './images/image-qr-code.png',
            alt: 'qr code'
        }
    }
})

app.mount('#app')