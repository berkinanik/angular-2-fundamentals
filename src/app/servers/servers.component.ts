import { Component } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.scss']
})
export class ServersComponent {
  allowNewServer: boolean = false;
  newServerName: string = '';
  createServerStatus: string = 'No server has created!';
  twoWayBindingText: string = '';
  servers: Array<string> = ['Testserver 1', 'Testserver 2'];

  onCreateServer() {
    this.createServerStatus = `Server: "${this.newServerName}" has created!`;
    this.newServerName = '';
    this.servers.push(this.newServerName);
    setTimeout(() => {
      this.createServerStatus = 'No server has created!';
      this.allowNewServer = true;
    }, 2000);
  };

  onUpdateServerName(event: any) {
    this.newServerName = (<HTMLInputElement>event.target).value.trim();
    this.allowNewServer = this.newServerName !== '';
  }
}
