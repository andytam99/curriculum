import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { BlogComponent } from './pages/blog/blog.component';
// import { BlogsComponent } from './pages/blogs/blogs.component';
import { InicioComponent } from './pages/inicio/inicio.component';

const routes: Routes = [
  { path: '', redirectTo: '/inicio', pathMatch: 'full' },
  {
    path: 'inicio',
    component: InicioComponent,
  },
  // {
  //   path: 'blog',
  //   component: BlogsComponent,
  // },
  // {
  //   path: 'blog/:slug',
  //   component: BlogComponent,
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
