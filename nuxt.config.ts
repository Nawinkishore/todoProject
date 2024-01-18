// https://nuxt.com/docs/api/configuration/nuxt-config
export default ({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss','@nuxt-alt/http'
  ],
  http:{
    baseUrl: 'https://localhost:5000',
    credentials :"omit",
    browserBaseUrl: 'http://localhost:5000',
  },
});
