export interface Person {
  id: string;
  jobTitle: string;
  emailAddress: string;
  firstNameLastName: string;
}

export type Action<R, P> = {
  type: string;
  payload?: P;
  onSuccessCallback?: (response: R) => void;
  onErrorCallback?: (response: R) => void;
};

export enum NotificationType {
  success = "success",
  error = "error",
}

export interface NotificationInfo {
  type: NotificationType;
  text: string;
  id: string;
  showTime: number;
}
