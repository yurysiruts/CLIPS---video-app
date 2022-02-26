import { Component, Input, OnInit, ElementRef } from '@angular/core';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {
  @Input() modalType: string = '';

  constructor(public modalService: ModalService, public elRef: ElementRef) {}

  ngOnInit(): void {
    document.body.appendChild(this.elRef.nativeElement);
  }

  closeModal() {
    this.modalService.toggleModal(this.modalType);
  }
}
