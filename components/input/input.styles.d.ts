import { PatternFormat } from 'react-number-format';
import { IJeneseiThemeSizeData } from '../../theme';
import { InputChildrenProps, StyledInputProps, StyledInputWrapperProps } from './input.types';

/****************************************** Wrapper *************************************************/
export declare const StyledInputWrapper: import('styled-components/dist/types').IStyledComponentBase<"web", import('styled-components/dist/types').Substitute<import('../../../node_modules/react').DetailedHTMLProps<import('../../../node_modules/react').HTMLAttributes<HTMLDivElement>, HTMLDivElement>, StyledInputWrapperProps>> & string;
/****************************************** Error *************************************************/
export declare const InputErrorMessage: import('styled-components/dist/types').IStyledComponentBase<"web", import('styled-components').FastOmit<import('../../../node_modules/react').DetailedHTMLProps<import('../../../node_modules/react').HTMLAttributes<HTMLDivElement>, HTMLDivElement>, never>> & string;
export declare const InputIsErrorBorder: import('styled-components').RuleSet<StyledInputProps>;
/****************************************** Placeholder *************************************************/
export declare const InputPlaceholder: import('styled-components').RuleSet<StyledInputProps>;
/****************************************** Size *************************************************/
export declare const InputSize: import('styled-components').RuleSet<StyledInputProps>;
export declare const InputSizeConstructor: (props: IJeneseiThemeSizeData) => import('styled-components').RuleSet<object>;
/****************************************** Default *************************************************/
export declare const StyledInputCSS: import('styled-components').RuleSet<StyledInputProps>;
export declare const StyledInput: import('styled-components/dist/types').IStyledComponentBase<"web", import('styled-components/dist/types').Substitute<import('../../../node_modules/react').DetailedHTMLProps<import('../../../node_modules/react').InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, StyledInputProps>> & string;
export declare const StyledInputFormat: import('styled-components/dist/types').IStyledComponentBase<"web", import('styled-components/dist/types').Substitute<import('react-number-format/types/types').InternalNumberFormatBase & {
    format: string;
    mask?: string | string[] | undefined;
    allowEmptyFormatting?: boolean | undefined;
    patternChar?: string | undefined;
} & Omit<import('react-number-format').InputAttributes, never> & Omit<unknown, "ref" | "defaultValue" | "inputMode" | "onFocus" | "onBlur" | "onChange" | "onKeyDown" | "onMouseUp" | "type" | "format" | "mask" | "value" | "displayType" | "renderText" | "getInputRef" | "valueIsNumericString" | "onValueChange" | "isAllowed" | "isCharacterSame" | "allowEmptyFormatting" | "patternChar"> & {
    customInput?: import('../../../node_modules/react').ComponentType<unknown> | undefined;
}, StyledInputProps>> & string & Omit<typeof PatternFormat, keyof import('../../../node_modules/react').Component<any, {}, any>>;
/****************************************** Children *************************************************/
export declare const InputPrefixChildren: import('styled-components/dist/types').IStyledComponentBase<"web", import('styled-components/dist/types').Substitute<import('../../../node_modules/react').DetailedHTMLProps<import('../../../node_modules/react').HTMLAttributes<HTMLDivElement>, HTMLDivElement>, InputChildrenProps>> & string;
export declare const InputPostfixChildren: import('styled-components/dist/types').IStyledComponentBase<"web", import('styled-components/dist/types').Substitute<import('../../../node_modules/react').DetailedHTMLProps<import('../../../node_modules/react').HTMLAttributes<HTMLDivElement>, HTMLDivElement>, InputChildrenProps>> & string;
/****************************************** ModalLoading *************************************************/
export declare const InputStyledModalLoading: import('styled-components/dist/types').IStyledComponentBase<"web", import('styled-components/dist/types').Substitute<import('../modal-loading').ModalLoadingProps, StyledInputProps>> & string & Omit<import('../../../node_modules/react').FC<import('../modal-loading').ModalLoadingProps>, keyof import('../../../node_modules/react').Component<any, {}, any>>;
