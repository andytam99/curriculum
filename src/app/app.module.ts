import { NgModule, SecurityContext } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatTabsModule } from '@angular/material/tabs';
import { MatExpansionModule } from '@angular/material/expansion';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { SwiperModule } from 'swiper/angular';

import { MessagesComponent } from './messages/messages.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeaderComponent } from './components/header/header.component';
import { SlideComponent } from './components/slide/slide.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { FormComponent } from './components/form/form.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { ValoresComponent } from './pages/valores/valores.component';
import { VoluntariadoComponent } from './pages/voluntariado/voluntariado.component';
import { MembresiaComponent } from './pages/membresia/membresia.component';
import { ContentfulService } from './services/contentful/contentful.service';
import { BlogComponent } from './pages/blog/blog.component';
import { MarkdownModule } from 'ngx-markdown';
import { BlogsComponent } from './pages/blogs/blogs.component';

@NgModule({
  declarations: [
    AppComponent,
    MessagesComponent,
    NavbarComponent,
    HeaderComponent,
    SlideComponent,
    CarouselComponent,
    FormComponent,
    InicioComponent,
    ValoresComponent,
    VoluntariadoComponent,
    MembresiaComponent,
    BlogComponent,
    BlogsComponent,
  ],
  imports: [
    MarkdownModule.forRoot({
      loader: HttpClient,
    }),
    SwiperModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatToolbarModule,
    MatExpansionModule,
    MatOptionModule,
    MatSelectModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatCheckboxModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [ContentfulService],
  bootstrap: [AppComponent],
})
export class AppModule {}
