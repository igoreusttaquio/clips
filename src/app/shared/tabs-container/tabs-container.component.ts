import {Component, ContentChildren, AfterContentInit, QueryList} from '@angular/core';
import {TabComponent} from "../tab/tab.component";

@Component({
  selector: 'app-tabs-container',
  templateUrl: './tabs-container.component.html',
  styleUrl: './tabs-container.component.css'
})
export class TabsContainerComponent implements AfterContentInit {
  @ContentChildren(TabComponent) tabs?: QueryList<TabComponent>

  ngAfterContentInit(): void {
    const activeTabs = this.tabs?.filter(tab => tab.active)

    if(!activeTabs || activeTabs.length === 0)
    {
      this.selectTab(this.tabs!.first)
    }
  }

  selectTab(tab: TabComponent)
  {
    this.tabs?.forEach(tab => {
      tab.active = false
    })

    tab.active = true

    // simple way to prevent default automatically  without pass event parameter fo the function
    return false // prevent default behavior automatically by angular
  }
}
