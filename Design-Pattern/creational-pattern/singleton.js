'use strict';

class RoundRobin {
  constructor() {
    if (RoundRobin.instance) {
      return RoundRobin.instance;
    }
    RoundRobin.instance = this;
    this.server = [];
    this.index = 0;
  }

  // add server
  addServer(server) {
    this.server.push(server);
  }

  // get next server
  getNextServer() {
    if (!this.server.length) {
      throw new Error('No server available!');
    }

    const server = this.server[this.index];
    // modulo algorithm
    this.index = (this.index + 1) % this.server.length;
    return server;
  }
}

const loadBalancer = new RoundRobin();
const loadBalancer1 = new RoundRobin();
console.log(loadBalancer === loadBalancer1);

loadBalancer.addServer('server 01');
loadBalancer.addServer('server 02');
loadBalancer.addServer('server 03');

console.log(loadBalancer.getNextServer());
console.log(loadBalancer.getNextServer());
console.log(loadBalancer.getNextServer());
console.log(loadBalancer.getNextServer());
