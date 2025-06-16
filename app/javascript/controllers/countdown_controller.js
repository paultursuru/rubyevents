import { Controller } from '@hotwired/stimulus'

export default class extends Controller {
  static values = {
    startDate: String
  }

  connect () {
    this.updateCountdown()
    setInterval(() => {
      this.updateCountdown()
    }, 60000)
  }

  updateCountdown () {
    this.element.textContent = this.formatTime(this.timeLeft())
  }

  timeLeft () {
    const startDate = new Date(this.startDateValue)
    const now = new Date()
    const timeLeft = startDate - now
    return timeLeft
  }

  formatTime (time) {
    const days = Math.floor(time / (1000 * 60 * 60 * 24))
    const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    const minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60))
    return `${days}d ${hours}h ${minutes}m`
  }
}
