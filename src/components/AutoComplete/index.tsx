import { App } from 'vue';
import { SFCWithInstall } from '../utils/types';
import AutoComplete from './AutoComplete';

AutoComplete.install = (app: App) => {
  app.component(AutoComplete.name, AutoComplete);
};

export default AutoComplete as SFCWithInstall<typeof AutoComplete>;
