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
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import ColumnGroup from 'primevue/columngroup';   // optional
import Row from 'primevue/row';
import FileUpload from 'primevue/fileupload';
import Avatar from 'primevue/avatar';
import Galleria from 'primevue/galleria';
import Timeline from 'primevue/timeline';
import Checkbox from 'primevue/checkbox';
import Calendar from 'primevue/calendar';


export default defineNuxtPlugin(nuxtApp => {
    nuxtApp.vueApp.use(PrimeVue, { ripple: true })
    nuxtApp.vueApp.use(ToastService)
    nuxtApp.vueApp.component('Button', Button)
    nuxtApp.vueApp.component('InputText', InputText)
    nuxtApp.vueApp.component('Toast', Toast)
    nuxtApp.vueApp.component('Card', Card);
    nuxtApp.vueApp.component('Carousel', Carousel)
    nuxtApp.vueApp.component('TabMenu', TabMenu)
    nuxtApp.vueApp.component('DataView', DataView)
    nuxtApp.vueApp.component('DataViewLayoutOptions', DataViewLayoutOptions)
    nuxtApp.vueApp.component('Datatable', DataTable)
    nuxtApp.vueApp.component('Column', Column)
    nuxtApp.vueApp.component('ColumnGroup', ColumnGroup)
    nuxtApp.vueApp.component('Row', Row);
    nuxtApp.vueApp.component('fileupload', FileUpload)
    nuxtApp.vueApp.component('Avatar', Avatar)
    nuxtApp.vueApp.component('Galleria', Galleria)
    nuxtApp.vueApp.component('Timeline', Timeline)
    nuxtApp.vueApp.component('Checkbox', Checkbox)
    nuxtApp.vueApp.component('Calendar', Calendar)
    
    //other components that you need
})
