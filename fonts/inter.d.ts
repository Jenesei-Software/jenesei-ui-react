import { TJeneseiFontFamily } from '../theme';

export interface FontProps {
    $color?: string;
    $size: number;
    $textAlign?: 'center';
    $textWrap?: 'nowrap';
    $height?: number;
    $weight: 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;
    $family: TJeneseiFontFamily;
}
export declare const getFontStyles: (size: FontProps['$size'], weight: FontProps['$weight'], family: FontProps['$family'], height?: FontProps['$height']) => import('styled-components').RuleSet<object>;
export declare const SpanFont: import('styled-components/dist/types').IStyledComponentBase<"web", import('styled-components/dist/types').Substitute<import('../../node_modules/react').DetailedHTMLProps<import('../../node_modules/react').HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>, FontProps>> & string;
