import { Component, AfterViewInit, ViewChildren, QueryList, ViewChild, ElementRef } from '@angular/core';
import { NewsService } from '../../services/news.service';
import { News } from '../../model/news.model';
import Flickity from 'flickity';

@Component({
  selector: 'app-page-slider',
  templateUrl: './page-slider.component.html',
  styleUrls: ['./page-slider.component.scss']
})

export class PageSliderComponent implements AfterViewInit {

  public news: Array<News>;
  public wide = false;
  public carousel: any;

  @ViewChildren('sliderItem') iteration: QueryList<any>;
  @ViewChild('item') cardimage: QueryList<any>;

  constructor(private newsService: NewsService) {
    this.load();
  }

  ngAfterViewInit() {
    this.iteration.changes.subscribe(last => {
      this.initCarousel();
    });
  }

  initCarousel() {
    this.carousel = new Flickity('.carousel', {
      contain: true, prevNextButtons: false, pageDots: false
    });
  }

  load() {
    this.newsService.getJSON().subscribe(data => {
      this.news = data;
    });
  }

}
