import { TJeneseiThemeSize } from '../../theme';

export type LibraryCheckboxesProps = {
    [icon in LibraryCheckboxesNameString]: (props: LibraryCheckboxesItemProps) => JSX.Element;
};
export interface LibraryCheckboxesItemProps {
    className?: string;
    size: TJeneseiThemeSize;
}
export interface StyledLibraryCheckboxesItemProps {
    $size: LibraryCheckboxesItemProps['size'];
}
export declare enum LibraryCheckboxesName {
    Radio = 0,
    Square = 1
}
export type LibraryCheckboxesNameString = keyof typeof LibraryCheckboxesName;
