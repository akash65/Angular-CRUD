import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';


@Injectable()

export class ToasterNotification {

    constructor(private toastr: ToastrService) { }


    showSuccess(message, title) {
        this.toastr.success(message, title);
    }

    showSuccessWithTimeout(message, title, timespan) {
        this.toastr.success(message, title, {
            timeOut: timespan
        });
    }

    warningMessage(message, title) {
        this.toastr.warning(message, title);
    }

}
