/* istanbul ignore file */
interface ICondition {
  regex: RegExp;
  errorMessage?: string;
}

interface IRules {
  required?: boolean;
  minLength?: number;
  maxLength?: number;
  max?: number;
  positive?: boolean;
  conditions?: ICondition;
}
interface Ifield {
  initialValue: string | number | boolean | [];
  rules?: IRules;
}

export type IFormSchema<T> = {
  [Property in keyof Required<T>]: Ifield;
};
