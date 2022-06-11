// Simple hello world entry point that waits for SIG INT to exit
export default class App {
  private readonly _waitTimer: NodeJS.Timer
  private _isRunning: boolean

  constructor() {
    this._waitTimer = setInterval(this.printWaitingMessage.bind(this), 10000)
    this.printWaitingMessage()
    this._isRunning = true;
  }

  private printWaitingMessage() {
    console.log('Waiting for SIGINT...')
  }

  public stop() {
    console.log('Goodbye world!')
    clearInterval(this._waitTimer)
    this._isRunning = false
  }

  public get isRunning(): boolean {
    return this._isRunning
  }
}

/**
 * Ignore coverage on this part as it is just to check if running directly and wait for ctrl-c
 * if this becomes more complex it should be refactored and covered by tests
 */
/* istanbul ignore next */
if (require.main === module) {
  const app = new App()
  process.on('SIGINT', () => {
    app.stop()
  })
}