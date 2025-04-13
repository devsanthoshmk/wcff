import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import PrimeVue from 'primevue/config';
import Button from 'primevue/button';
import Card from 'primevue/card';
import Menubar from 'primevue/menubar';

import 'primevue/resources/themes/lara-light-blue/theme.css';
import 'primeicons/primeicons.css';
import './style.css';

import AnimateOnScroll from 'primevue/animateonscroll';


const app = createApp(App);

app.use(router);
app.use(PrimeVue, { ripple: true });

app.directive('animateonscroll', AnimateOnScroll);

app.component('Button', Button);
app.component('Card', Card);
app.component('Menubar', Menubar);

app.mount('#app');