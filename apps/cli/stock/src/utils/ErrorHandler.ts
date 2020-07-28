import { eventBus } from '@/main';

export default class ErrorHandler {

    static showError(error: any, beforeCallback: any = null) {
        if(typeof beforeCallback === "function") {
            beforeCallback();
        }

        if(error.response && error.response.data) {
            ErrorHandler.errorDialog(error.response.data.message);
            return;
        }
        if(error.message) {
            ErrorHandler.errorDialog(error.message);
            return;
        }
        console.log(error)
    }

    static errorDialog(message: string, id = 'request-failure') {
        eventBus.fire('top-alert', {
            id,
            message
        })
    }
}