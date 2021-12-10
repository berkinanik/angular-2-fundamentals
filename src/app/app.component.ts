import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  twoWayBindingText: string = '';
  servers: Array<{
    type: string;
    name: string;
  }> = [
      {
        type: 'server',
        name: 'test server1'
      },
      {
        type: 'server',
        name: 'test server2'
      }
    ];

  onServerAdded(serverData: {serverName: string}) {
    this.servers.push({
      type: 'server',
      name: serverData.serverName
    });
  }

  onServerDeleted(serverName: string) {
    this.servers = this.servers.filter(server => server.name !== serverName);
  }
}
