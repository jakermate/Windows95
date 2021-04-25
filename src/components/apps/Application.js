import { v4 as uuid } from "uuid"
export default class Application {
  constructor(app_name, icon, application_title) {
    this.app_name = app_name
    this.app_title = application_title
    this.id = uuid()
    this.icon = icon
    this.minimized = false
    this.maximized = false
  }
  toggleMaximied() {
    this.maximized = !this.maximized
  }
  toggleMinimized() {
    this.minimized = !this.minimized

  }
}
