import { Component, OnInit } from '@angular/core';
import { ModalService } from '../services/modal.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit {
  constructor(public modalService: ModalService) {}

  ngOnInit(): void {}

  openModal(e: Event) {
    e.preventDefault();
    this.modalService.toggleModal('auth');
  }
}
