import { Component, ElementRef, OnInit } from '@angular/core';

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html'
})
export class SidebarComponent implements OnInit {
  model: any[] = [];

  constructor(public el: ElementRef) { }

  ngOnInit() {
    this.model = [
      {
        label: 'Home',
        items: [
          { label: 'Dashboard', icon: 'pi pi-fw pi-home', routerLink: ['/'] }
        ]
      },
      {
        label: 'Character',
        items: [
          { label: 'Get all characters', icon: 'pi pi-fw pi-id-card', routerLink: ['/layout/character'] },
          { label: 'Get all episodes', icon: 'pi pi-fw pi-video', routerLink: ['/layout/episode'] },
          { label: 'Get all locations', icon: 'pi pi-fw pi-send', routerLink: ['/layout/location'] },
          // { label: 'PDF Viewer', icon: 'pi pi-fw pi-file-pdf', routerLink: ['/demo/pdf-viewer'] },
          // { label: 'Dynamic Form', icon: 'pi pi-fw pi-file-pdf', routerLink: ['/demo/dynamic-form'] },
          // { label: 'Input', icon: 'pi pi-fw pi-check-square', routerLink: ['/demo/uikit/input'] },
          // { label: 'Float Label', icon: 'pi pi-fw pi-bookmark', routerLink: ['/demo/uikit/floatlabel'] },
          // { label: 'Invalid State', icon: 'pi pi-fw pi-exclamation-circle', routerLink: ['/demo/uikit/invalidstate'] },
          // { label: 'Button', icon: 'pi pi-fw pi-mobile', routerLink: ['/demo/uikit/button'], class: 'rotated-icon' },
          // { label: 'Table', icon: 'pi pi-fw pi-table', routerLink: ['/demo/uikit/table'] },
          // { label: 'List', icon: 'pi pi-fw pi-list', routerLink: ['/demo/uikit/list'] },
          // { label: 'Tree', icon: 'pi pi-fw pi-share-alt', routerLink: ['/demo/uikit/tree'] },
          // { label: 'Panel', icon: 'pi pi-fw pi-tablet', routerLink: ['/demo/uikit/panel'] },
          // { label: 'Overlay', icon: 'pi pi-fw pi-clone', routerLink: ['/demo/uikit/overlay'] },
          // { label: 'Media', icon: 'pi pi-fw pi-image', routerLink: ['/demo/uikit/media'] },
          // { label: 'Menu', icon: 'pi pi-fw pi-bars', routerLink: ['/demo/uikit/menu'], preventExact: true },
          // { label: 'Message', icon: 'pi pi-fw pi-comment', routerLink: ['/demo/uikit/message'] },
          // { label: 'File', icon: 'pi pi-fw pi-file', routerLink: ['/demo/uikit/file'] },
          // { label: 'Misc', icon: 'pi pi-fw pi-circle', routerLink: ['/demo/uikit/misc'] }
        ]
      },
    ];
  }

}

