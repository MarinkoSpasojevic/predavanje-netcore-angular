import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-movie-table',
  templateUrl: './movie-table.component.html',
  styleUrls: ['./movie-table.component.css']
})
export class MovieTableComponent implements OnInit {
  @Input() public movies;
  @Output() public onUpdate = new EventEmitter();
  @Output() public onDelete = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  public update = (id: string) => {
    this.onUpdate.emit(id);
  }

  public delete = (id: string) => {
    this.onDelete.emit(id);
  }
}
