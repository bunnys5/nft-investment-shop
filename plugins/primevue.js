import PrimeVue from 'primevue/config'
import Button from 'primevue/button'
import InputText from 'primevue/inputtext'
import Toast from 'primevue/toast'
import ToastService from 'primevue/toastservice'
import Card from 'primevue/card';
import Carousel from 'primevue/carousel';
import TabMenu from 'primevue/tabmenu';
import DataView from 'primevue/dataview';
import DataViewLayoutOptions from 'primevue/dataviewlayoutoptions'



export default defineNuxtPlugin(nuxtApp => {
    nuxtApp.vueApp.use(PrimeVue, { ripple: true })
    nuxtApp.vueApp.use(ToastService)
    nuxtApp.vueApp.component('Button', Button)
    nuxtApp.vueApp.component('InputText', InputText)
    nuxtApp.vueApp.component('Toast', Toast)
    nuxtApp.vueApp.component('Card', Card);
    nuxtApp.vueApp.component('Carousel', Carousel);
    nuxtApp.vueApp.component('TabMenu', TabMenu);
    nuxtApp.vueApp.component('DataView', DataView);
    nuxtApp.vueApp.component('DataViewLayoutOptions', DataViewLayoutOptions);

    //other components that you need
})
