import { default as ReactToggle } from 'react-toggle';
import { StyledToggleProps } from '.';
import { IJeneseiThemeSizeData } from '../../theme';

/****************************************** Size *************************************************/
export declare const StyledReactToggleSize: import('styled-components').RuleSet<StyledToggleProps>;
export declare const ToggleSizeConstructor: (props: IJeneseiThemeSizeData) => import('styled-components').RuleSet<object>;
export declare const StyledReactToggle: import('styled-components/dist/types').IStyledComponentBase<"web", import('styled-components/dist/types').Substitute<import('react-toggle').ToggleProps & import('../../../node_modules/react').RefAttributes<ReactToggle>, StyledToggleProps>> & string & Omit<typeof ReactToggle, keyof import('../../../node_modules/react').Component<any, {}, any>>;
