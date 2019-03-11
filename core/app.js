/**
 * @file entry
 * @author Ry-yuan(1094324110@qq.com)
 */

import Vue from 'vue';
import Meta from 'vue-meta';
import MuseUI from 'muse-ui';
import 'muse-ui/dist/muse-ui.css';

import {createRouter} from '@/.lavas/router';
import {createStore} from '@/.lavas/store';
import AppComponent from './App.vue';

Vue.use(Meta);
Vue.use(MuseUI);

Vue.config.productionTip = false;

export function createApp() {
    let router = createRouter();
    let store = createStore();
    let App = Vue.extend({
        router,
        store,
        ...AppComponent
    });
    return {App, router, store};
}

if (module.hot) {
    module.hot.accept();
}
