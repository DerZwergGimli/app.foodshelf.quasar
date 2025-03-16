import { Notify } from 'quasar';
import { useGlobalStore } from 'stores/globalStore';

export interface SB_Response {
  status: 'OK' | 'ERROR';
  message: string;
}

export function sb_toast(result: SB_Response) {
  switch (result.status) {
    case 'OK':
      Notify.create({
        icon: 'las la-check-circle',
        type: 'positive',
        message: result.message,
      });
      useGlobalStore().show_login = false;
      break;
    case 'ERROR':
      Notify.create({
        icon: 'las la-exclamation-circle',
        type: 'negative',
        message: result.message,
      });
      break;
  }
}
