/* eslint-disable no-undef */
import App from '../src/app'

describe('App', () => {
  it('Can Run', async () => {
    const app = new App()
    expect(app.isRunning).toBe(true)
    app.stop()
    expect(app.isRunning).toBe(false)
  })
  it('Stops Idempotently', async () => {
    const app = new App()
    app.stop()
    app.stop()
    expect(app.isRunning).toBe(false)
  })
})
