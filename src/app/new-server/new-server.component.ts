import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-new-server',
  templateUrl: './new-server.component.html',
  styleUrls: ['./new-server.component.scss']
})
export class NewServerComponent {
  allowNewServer: boolean = false;
  newServerName: string = '';
  createServerStatus: string = 'No server has created!';
  @Output() serverCreated = new EventEmitter<{serverName: string}>();

  onCreateServer() {
    this.serverCreated.emit({
      serverName: this.newServerName
    });
    this.createServerStatus = `Server: "${this.newServerName}" has created!`;
    this.newServerName = '';
    this.allowNewServer = false;
  };

  onUpdateServerName(event: any) {
    this.newServerName = (<HTMLInputElement>event.target).value;
    this.allowNewServer = this.newServerName.trim() !== '';
  }
}
