import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Tic-Tac-Toe';

  constructor(private meta: Meta, private titleService: Title) {
    this.titleService.setTitle(this.title);
    this.meta.addTag({ name: 'description', content: 'This is a tic-tac-toe PWA application. It is made for learning purpose.' });
  }

}
