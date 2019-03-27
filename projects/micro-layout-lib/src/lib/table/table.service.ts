import { Injectable } from '@angular/core';

@Injectable()
export class TableService {
  private tableOptions;

  constructor() { }

  setOptions(options) {
    this.tableOptions = options;
  }

  getOptions() {
    return this.tableOptions;
  }
}
