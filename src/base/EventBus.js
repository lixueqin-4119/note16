import $ from 'jquery'

class EventBus {
  constructor() {
    this._eventBus = $(window)
  }

  on(eventName, fn) {
    return this._eventBus.on(eventName, fn)
  }

  trigger(eventName, data) {
    return this._eventBus.trigger(eventName, data)
  }

  off(eventName, fn) {
    return this._eventBus.off(eventName, fn)
  }
}

export default EventBus
© 2021 GitHub, Inc.
Terms
Privacy
Security
Status
Docs
Contact GitHub
Pricing
API
Training
Blog
About
