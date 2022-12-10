/* istanbul ignore file */
export interface IAuthState {
  token: string;
  status: 'idle' | 'loading' | 'failed' | 'authenticated' | 'recovered';
}

export interface IUser {
  name: string;
  email: string;
}

export type ISignInProps = {
  email: string;
  password: string;
};

export type IResetPasswordProps = {
  newPassword: string;
  newPasswordConfirmation: string;
  code: string;
};
