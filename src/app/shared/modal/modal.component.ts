import {Component, Input, ElementRef, OnInit} from '@angular/core';
import {ModalService} from "../../services/modal.service";

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css',
  //providers: [ModalService]// 3rd way to register services
})
export class ModalComponent implements OnInit {

  @Input() modalId: string = ''

  constructor(public modalService: ModalService, public el: ElementRef) {
  }

  ngOnInit(): void {
    // el => host element app-modal
    // avoid css issues
    // teleportation
    document.body.appendChild(this.el.nativeElement);
  }

  public closeModal($event: Event) {
    $event.preventDefault()
    if (($event as MouseEvent) instanceof MouseEvent) this.modalService.toggleModal(this.modalId);
  }
}
