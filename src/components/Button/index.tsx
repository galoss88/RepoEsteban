import { ButtonWrapper } from './style';

type TButtonSize = 'sm' | 'md';
type TVariant = 'black' | 'default';

export type ButtonProps = {
  value: string;
  onClick?: () => void;
  size?: TButtonSize;
  variant?: TVariant;
  isDisabled?: boolean;
};

export const defaultProps: ButtonProps = {
  value: 'Button',
  size: 'sm',
  variant: 'default',
  isDisabled: false,
};

const Button = ({ value, isDisabled, ...otherProps }: ButtonProps) => {
  return (
    <ButtonWrapper data-testid="button" {...otherProps} disabled={isDisabled}>
      {value}
    </ButtonWrapper>
  );
};

Button.defaultProps = defaultProps;

export default Button;
