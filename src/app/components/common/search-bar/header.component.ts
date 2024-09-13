import { Component } from '@angular/core';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [IconFieldModule,InputIconModule,InputTextModule],
  templateUrl: './header.component..html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

}