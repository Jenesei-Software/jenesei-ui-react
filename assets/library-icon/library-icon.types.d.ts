import { TJeneseiThemeSize } from '../../theme';

export type LibraryIconProps = {
    [icon in TLibraryIconNameString]: (props: LibraryIconItemProps) => JSX.Element;
};
export interface LibraryIconItemProps {
    className?: string;
    onClick?: () => void;
    size: TJeneseiThemeSize;
    color?: string;
}
export interface StyledLibraryIconItemProps {
    $size: LibraryIconItemProps['size'];
}
export declare enum LibraryIconName {
    HelpCircle = 0,
    ArrowLeft = 1,
    ChevronLeft = 2,
    AlertCircle = 3,
    Person = 4,
    Support = 5,
    GridCross = 6,
    Download = 7,
    FileText = 8,
    Delete = 9,
    Edit = 10,
    Globe = 11,
    Phone = 12,
    WiFi = 13,
    Coffee = 14,
    CreditCard = 15,
    Copy = 16,
    Plus = 17,
    MinPlus = 18,
    Menu = 19,
    Trash = 20
}
export type TLibraryIconNameString = keyof typeof LibraryIconName;
