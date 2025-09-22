import { Component, signal } from '@angular/core';
import { RouterModule,RouterOutlet } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { Menu } from './menu/menu';
import { Hero } from './hero/hero';
import { Article } from './article/article';
import { Footer } from './footer/footer';
import { Homepage } from './homepage/homepage';
import { About } from './about/about';
import { Login } from './login/login';
import { P404 } from './p404/p404';
import { Breadcrumbs } from './breadcrumbs/breadcrumbs';
import { Contact } from './contact/contact';


@Component({
  selector: 'pb-root',
  imports: [Menu,Hero,Article,Footer,Homepage,About,Login,P404,RouterModule,RouterOutlet,HttpClientModule, Breadcrumbs,Contact ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('personal-budget');
}
