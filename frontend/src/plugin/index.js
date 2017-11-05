
import Confirm from './confirm';
import events from './eventbus';


/* eslint-disable no-param-reassign */
const confirma = {
  install(Vue) {
    if (this.installed) {
      return;
    }

    this.installed = true;

    Vue.component('modal', modal);
    Vue.prototype.$confirm = (params) => {
      events.$emit('vconfirm-open', params);
    };
  },
};

export default confirma;
