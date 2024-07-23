import { StyledButtonProps } from '.';
import { IJeneseiThemeSizeData } from '../../theme';

/****************************************** Size *************************************************/
export declare const ButtonSize: import('styled-components').RuleSet<StyledButtonProps>;
export declare const ButtonSizeConstructor: (props: IJeneseiThemeSizeData & {
    isFullSize?: boolean;
    $width?: string;
}) => import('styled-components').RuleSet<object>;
/****************************************** Styled *************************************************/
export declare const StyledButton: import('styled-components/dist/types').IStyledComponentBase<"web", import('styled-components/dist/types').Substitute<import('../../../node_modules/react').DetailedHTMLProps<import('../../../node_modules/react').ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, StyledButtonProps>> & string;
