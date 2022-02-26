import { Injectable } from '@angular/core';

interface IModal {
  modalType: string;
  visible: boolean;
}

@Injectable()
export class ModalService {
  private modals: IModal[] = [];

  constructor() {}

  register(type: string) {
    this.modals.push({
      modalType: type,
      visible: false,
    });
    console.log(this.modals);
  }

  unregister(type: string) {
    // removes the modal rom array, if there is a match
    this.modals = this.modals.filter((element) => element.modalType !== type);
  }

  isModalOpened(type: string): boolean {
    return Boolean(
      this.modals.find((element) => element.modalType === type)?.visible
    );
  }

  toggleModal(type: string) {
    const modal = this.modals.find((element) => element.modalType === type);
    if (modal) {
      modal.visible = !modal.visible;
    }
  }
}
