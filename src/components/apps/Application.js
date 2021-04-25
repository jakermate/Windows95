import {v4 as uuid} from 'uuid'
export default class Application{
    constructor(app_name, icon, application_title){
        this.app_name = app_name
        this.app_title = application_title
        this.id = uuid()
        this.icon = icon
        this.visibility = "windowed"
    }
    maximize(){
        this.visibility = "maximized"
    }
    minimize(){
        this.visibility = "minimized"
    }
    window(){
        this.visibility = "window"
    }
}