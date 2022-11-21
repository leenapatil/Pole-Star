import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ProfileResolverResolver } from './resolver/profile-resolver.resolver';
import { ProfileComponent } from './components/profile/profile.component';
import { SearchStringPipe } from './pipe/search-string.pipe';
import { FilterDataPipe } from './pipe/filter-data.pipe';
import { SortDirective } from './directives/sort.directive';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    SearchStringPipe,
    FilterDataPipe,
    SortDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  exports: [
    SearchStringPipe,
    FilterDataPipe
  ],
  providers: [ProfileResolverResolver, SearchStringPipe, FilterDataPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
