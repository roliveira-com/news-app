import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.sass']
})
export class BannerComponent implements OnInit {

  @Input() imagem: string | Array<string>;

  constructor() { }

  ngOnInit() {
  }

}
