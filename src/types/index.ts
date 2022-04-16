export interface Person {
  id: string;
  jobTitle: string;
  emailAddress: string;
  firstNameLastName: string;
}

export type Action<R, P> = {
  type: string;
  onSuccessCallback?: (response: R) => void;
  payload?: P;
};

export enum NotificationType {
  success = "success",
  error = "error",
  info = "info",
}

export interface Notification {
  type: NotificationType;
  text: string;
  id: string;
  showTime: number;
}
