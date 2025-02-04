import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {NewsComponent} from './component/news/news.component';
import {Injector} from '@angular/core';
import {createCustomElement} from '@angular/elements';

@NgModule({
  declarations: [
    AppComponent,
    NewsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent, NewsComponent]
})
export class AppModule {
  constructor(private injector: Injector) {
    const el = createCustomElement(NewsComponent, { injector });
    customElements.define('news-widget', el);
  }
}
