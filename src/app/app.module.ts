import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { itemReducer } from './state/reducer/item.reducer';
import { ROOT_REDUCRES } from './state/app.state';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot(ROOT_REDUCRES),
    StoreDevtoolsModule.instrument({ name:'TEST' })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
