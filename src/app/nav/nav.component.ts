import { Component } from '@angular/core';
import { ModalService } from "../services/modal.service";

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {
  constructor(public modalService: ModalService) {
  }

  public openModal($event: MouseEvent)
  {
    ($event as Event).preventDefault()
    this.modalService.toggleModal('auth-modal');
  }
}
