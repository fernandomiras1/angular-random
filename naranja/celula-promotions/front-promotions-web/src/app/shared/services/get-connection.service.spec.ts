import { of } from 'rxjs';
import { ConnectionService } from './get-connection.service';

describe('ConnectionService', () => {
  let connectionService: ConnectionService;

  beforeEach(() => {

    connectionService = new ConnectionService();
  });

  afterEach(() => connectionService = null);

  it('should be created', () => {
    expect(connectionService).toBeTruthy();
  });

  it('monitor() should return an Observable', () => {
    const res = connectionService.monitor();
    expect(res).toBeTruthy();
  });

  it('window offline event should emit monitor', (done) => {
    const monitor = connectionService.monitor();
    const offlineEvent = new Event('offline');
    monitor.subscribe((res) => {
      done();

    });
    window.dispatchEvent(offlineEvent);

  });

  it('window online event should emit monitor', (done) => {
    const monitor = connectionService.monitor();
    const onlineEvent = new Event('online');
    monitor.subscribe((res) => {
      done();

    });
    window.dispatchEvent(onlineEvent);
  });

});
