import { Component, Input, OnInit } from '@angular/core';

import { MomentService } from 'src/app/services/moment/moment.service';

import { Moment } from 'src/app/Moment';

import { environment } from 'src/environments/environment';

import { faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  allMyPosts: Moment[] = [];
  myposts: Moment[] = [];
  baseApiUrl = environment.baseApiUrl;

  searchTerm: string = '';
  faSearch = faSearch;

  constructor(private momentService: MomentService) {}

  ngOnInit(): void {
    this.momentService.getMyPosts().subscribe((items) => {
      const data = items.data;

      data.map((item) => {
        item.created_at = new Date(item.created_at!).toLocaleDateString(
          'pt-BR'
        );
      });

      this.allMyPosts = items.data;
      this.myposts = items.data;
    });
  }

  search(e: Event): void {
    const target = e.target as HTMLInputElement;
    const value = target.value;

    this.myposts = this.allMyPosts.filter((moment) =>
      moment.title.toLowerCase().includes(value)
    );
  }
}
