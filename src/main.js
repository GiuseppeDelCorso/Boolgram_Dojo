import { createApp } from 'vue';
import App from './App.vue';
import { library, dom } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons'; // Importa icone solid
import { far } from '@fortawesome/free-regular-svg-icons'; // Importa icone regular
import { fab } from '@fortawesome/free-brands-svg-icons'; // Importa icone brand
import * as bootstrap from 'bootstrap'; // Importa Bootstrap JS

library.add(fas); // Aggiunge icone solid
library.add(far); // Aggiunge icone regular
library.add(fab); // Aggiunge icone brand

dom.watch(); // Assicura l'aggiunta automatica degli stili

window.vue = {};
window.vue.App = createApp(App)
    .component('font-awesome-icon', FontAwesomeIcon)
    .mount('#app');
