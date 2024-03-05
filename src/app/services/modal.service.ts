import { Injectable } from '@angular/core';

interface  IModal {
  id: string
  visible: boolean
}

/*
//1st way to register services
GLOBALLY AVAILABLE - WE ONLY NEED IN THE MODAL COMPONENT
@Injectable({
  providedIn: 'root'// where provide the service, in this case in the root injector
})
 */
//@Injectable() others ways - provideIn will be in another components or module

@Injectable( {
  providedIn: 'root'
})
export class ModalService {
  private visible = false
  private modals: IModal[] = []
  constructor() { }

  isModalOpen(modalId: string) {
    //return this.modals.find( m => m.id === modalId)?.visible ?? false;
    return !!this.modals.find( m => m.id === modalId)?.visible // shor-hand to convert a non-boolean value to a boolean
  }
  toggleModal(modalId: string)
  {
    this.modals.forEach(m => {
      if(m.id === modalId)
      {
        m.visible = !m.visible;
        return;
      }
    })
  }

  register(modalId: string)
  {
    if(this.modals.find( m => m.id === modalId) == undefined) {
      this.modals.push({ id: modalId, visible: false })
    }
  }

  unregister(modalId: string) {
    this.modals = this.modals.filter(m => m.id !== modalId)
  }
}
