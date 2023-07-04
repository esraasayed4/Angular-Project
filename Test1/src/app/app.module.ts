import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ContainerComponent } from './container/container.component';
import { HeaderComponent } from './header/header.component';
import { NavComponent } from './nav/nav.component';
import { SearchComponent } from './search/search.component';
import { FilterComponent } from './filter/filter.component';
import { NotificationComponent } from './notification/notification.component';
import { ProductsComponent } from './products/products.component';
import { AboutComponent } from './about/about.component';
import { ProductAdditionComponent } from './product-addition/product-addition.component';
import{HttpClientModule} from '@angular/common/http';

const appRoute: Routes = [    //appRoute is array that defines the routes for different components in the application.
  {path:'', component:ContainerComponent},
  {path:'Home', component:ContainerComponent},
  {path:'About', component:AboutComponent},
  {path:'Products', component:ProductAdditionComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent,
    AboutComponent,
    HeaderComponent,
    NavComponent,
    SearchComponent,
    FilterComponent,
    NotificationComponent,
    ProductsComponent,
    ProductAdditionComponent
  ],
  imports:[
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoute)
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
