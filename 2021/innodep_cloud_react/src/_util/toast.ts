import toastr from 'toastr';

class Toast {
  public static success(message: string, title?: string) {
    toastr.success(message, title, {
      positionClass: 'toast-bottom-right',
      closeButton: true,
      tapToDismiss: false,
      progressBar: true,
      timeOut: 5000,
    });
  }
}

export { Toast };
