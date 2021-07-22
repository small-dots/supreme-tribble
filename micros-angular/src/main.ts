import './public-path';
import { enableProdMode, NgModuleRef } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

let app: void | NgModuleRef<AppModule>;
async function render() {
  app = await platformBrowserDynamic()
    .bootstrapModule(AppModule)
    .catch((err) => console.error(err));
}
if (!(window as any).__POWERED_BY_QIANKUN__) {
  render();
}

// tslint:disable-next-line:ban-types
export async function bootstrap(props: Object) {
  console.log(props);
}
// tslint:disable-next-line:ban-types
export async function mount(props: Object) {
  storeTest(props);
  render();
}
// tslint:disable-next-line:ban-types
export async function unmount(props: Object) {
  console.log(props);
  // @ts-ignore
  app.destroy();
}
function storeTest(props) {
  // tslint:disable-next-line:no-unused-expression
  props.onGlobalStateChange &&
    props.onGlobalStateChange(
      (value, prev) =>
        console.log(`[onGlobalStateChange - ${props.name}]:`, value, prev),
      true
    );
  // 为了演示效果明显增加定时器
  setTimeout(() => {
    // tslint:disable-next-line:no-unused-expression
    props.setGlobalState &&
      props.setGlobalState({
        id: `${props.name}_子应用`,
      });
  }, 3000);
}
