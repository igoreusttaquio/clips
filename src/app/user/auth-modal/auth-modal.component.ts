import {Component, OnInit, OnDestroy} from '@angular/core';
import {ModalService} from "../../services/modal.service";

@Component({
  selector: 'app-auth-modal',
  templateUrl: './auth-modal.component.html',
  styleUrl: './auth-modal.component.css'
})
export class AuthModalComponent implements OnInit, OnDestroy {
  constructor(public modalService: ModalService) {
  }

  ngOnDestroy(): void {
    //this.modalService.unregister("auth-modal")
  }

  ngOnInit(): void {
    this.modalService.register("auth-modal")
  }
}
