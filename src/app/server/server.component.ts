import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.scss']
})
export class ServerComponent {
  @Input() server!: {type: string; name: string};
  @Output() serverDeleted = new EventEmitter<string>();
  serverStatus = 'offline';

  constructor() {
    this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
  }

  getServerStatus(): string {
    return this.serverStatus;
  };

  onDeleteServer() {
    this.serverDeleted.emit(this.server.name);
  }
};
