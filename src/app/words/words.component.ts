import { Component, OnInit } from '@angular/core';
import { worker } from 'cluster';

@Component({
  selector: 'app-words',
  templateUrl: './words.component.html',
  styleUrls: ['./words.component.css']
})
export class WordsComponent implements OnInit {
  filterStatus = 'XEM_TAT_CA';
  newEn = '';
  newVn = '';
  isShowForm = false;
  arrWords = [
    { id: 1, en: 'action', vn: 'hành động', memorized: true },
    { id: 2, en: 'actor', vn: 'diễn viên', memorized: false },
    { id: 3, en: 'activity', vn: 'hoạt động', memorized: true },
    { id: 4, en: 'active', vn: 'chủ động', memorized: true },
    { id: 5, en: 'bath', vn: 'tắm', memorized: false },
    { id: 6, en: 'bedroom', vn: 'phòng ngủ', memorized: true }
  ];
  constructor() { }

  ngOnInit(): void {
  }

  addWord() {
    this.arrWords.unshift({ //unshift : thêm vào đầu, push: thêm vào sau
      id : this.arrWords.length + 1,
      en : this.newEn,
      vn : this.newVn,
      memorized : false
    })
    this.newEn = '';
    this.newVn = '';
    this.isShowForm = false;
  }

  removeWord(id: number){
    const index = this.arrWords.findIndex(word => word.id === id);
    // findIndex : tìm ra phần tử có id trong mảng có id = với id truyền vào
    this.arrWords.splice(index,1);

  }

  getShowStatus(memorized: boolean) {
    const dkXemTatCa = this.filterStatus === 'XEM_TAT_CA';
    const dkXemDaNho = this.filterStatus === 'XEM_DA_NHO' && memorized;
    const dkXemChuaNho = this.filterStatus === 'XEM_CHUA_NHO' && !memorized;
    return dkXemTatCa || dkXemDaNho || dkXemChuaNho;
  }
}
