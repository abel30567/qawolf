import { FSWatcher, watch } from 'chokidar';
import Debug from 'debug';
import { readFile } from 'fs-extra';
import { JestHookSubscriber } from 'jest-watcher';
import { WatchServer } from './WatchServer';

const debug = Debug('qawolf:WatchPlugin');

export class WatchPlugin {
  _code: string;
  _server: WatchServer;
  _watcher: FSWatcher;
  _watchPath: string;

  constructor() {
    this._server = new WatchServer();

    this._server.on('codeupdate', (code) => {
      this._code = code;
    });

    this._server.on('stopwatch', () => this._stop());
  }

  async _onTestChange(testPath: string): Promise<void> {
    const newCode = await readFile(testPath, 'utf8');
    if (newCode === this._code) return;

    debug('test changed');
    this._code = newCode;
    this._server.stopTest();
  }

  async _prepareTest(testPath: string): Promise<void> {
    debug('prepare test %s', testPath);

    // Stop the previous test
    this._server.stopTest();

    // Set the environment so the WatchClient can connect.
    await this._server.setEnv(process.env);

    // Jest watch will not re-run a test in progress.
    // To workaround this, we manually watch the test.
    // When it changes we stop it, which triggers Jest to re-run it.
    await this._watch(testPath);
  }

  async _stop(): Promise<void> {
    this._watcher.close();

    await this._server.stopTest();

    process.exit();
  }

  async _watch(testPath: string): Promise<void> {
    if (this._watchPath === testPath) return;
    if (this._watcher) this._watcher.close();

    debug('watch %s', testPath);
    this._watchPath = testPath;

    this._watcher = watch(testPath, { atomic: 0 });

    this._code = await readFile(testPath, 'utf8');

    this._watcher.on('change', () => this._onTestChange(testPath));
  }

  public apply(hooks: JestHookSubscriber): void {
    hooks.shouldRunTestSuite(async (suite) => {
      await this._prepareTest(suite.testPath);
      return true;
    });
  }
}