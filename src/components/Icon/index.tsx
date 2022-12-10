import { ImgHTMLAttributes } from 'react';
import iconList from './iconList';
import { StyledIcon } from './styles';

export type IconProps = {
  name:
    | 'union'
    | 'caret'
    | 'watch'
    | 'calendar'
    | 'calendarInactive'
    | 'user'
    | 'users'
    | 'book'
    | 'account'
    | 'arrow'
    | 'bigFork'
    | 'fork'
    | 'forkInactive'
    | 'location'
    | 'phone'
    | 'coin'
    | 'warning'
    | 'camera'
    | 'plus'
    | 'check'
    | 'home'
    | 'homeInactive'
    | 'business'
    | 'businessActive'
    | 'iceCream'
    | 'iceCreamActive'
    | 'salad'
    | 'saladActive'
    | 'sidebarMenu'
    | 'bigCheckBox'
    | 'bigInfo'
    | 'bigCross'
    | 'wheel'
    | 'wheelActive'
    | 'success';
};

const Icon = ({ name, ...otherProps }: IconProps & ImgHTMLAttributes<unknown>) => {
  const cursor = otherProps.onClick ? 'pointer' : 'inherit';

  return <StyledIcon src={iconList[name]} cursor={cursor} {...otherProps} />;
};

export interface StyledIconProps {
  cursor: 'pointer' | 'default' | 'inherit';
}

export default Icon;
