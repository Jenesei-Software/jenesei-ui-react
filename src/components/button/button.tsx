import { FC, memo } from 'react'
import { useTheme } from 'styled-components'

import { LibraryIconCurved } from '@assets/library-icon-curved'

import { ModalLoading } from '@components/modal-loading'

import { ButtonProps, StyledButton } from '.'
import { Ripple } from 'react-ripple-click'

export const Button: FC<ButtonProps> = memo((props) => {
  const iconPosition = props.iconPosition || 'right'
  const loadingPosition = props.loadingPosition || 'right'
  const theme = useTheme()
  const IconComponent = props.icon && LibraryIconCurved[props.icon]
  return (
    <StyledButton
      id="jenesei-button"
      tabIndex={0}
      $isFullSize={props.isFullSize}
      $genre={props.genre}
      $width={props.width}
      $size={props.size}
      $isDisabled={props.isDisabled}
      $isRadius={props.isRadius}
      $isHidden={props.isHidden}
      $isPlaystationEffect={props.isPlaystationEffect}
      $customFontFamily={props.customFontFamily}
      $customFontSize={props.customFontSize}
      $customFontWeight={props.customFontWeight}
      $isHiddenBorder={props.isHiddenBorder || props.isPlaystationEffect}
      disabled={props.isDisabled}
      type={props.type}
      className={props.className}
      onClick={(event) =>
        !props.isLoading &&
        !props.isDisabled &&
        props.onClick &&
        props.onClick(event)
      }
      {...props.$styles}
    >
      {!props.isHidden && <Ripple />}
      {props.isOnlyLoading ? (
        props.isLoading ? (
          <ModalLoading
            size={props.size}
            color={theme.colors.button[props.genre].color.rest}
          />
        ) : (
          <>
            {IconComponent && iconPosition === 'left' && (
              <IconComponent size={props.size} />
            )}
            {props.children && props.children}
            {IconComponent && iconPosition === 'right' && (
              <IconComponent size={props.size} />
            )}
          </>
        )
      ) : (
        <>
          {props.isLoading && loadingPosition === 'left' && (
            <ModalLoading
              size={props.size}
              color={theme.colors.button[props.genre].color.rest}
            />
          )}
          {IconComponent && iconPosition === 'left' && (
            <IconComponent size={props.size} />
          )}
          {props.children && props.children}
          {IconComponent && iconPosition === 'right' && (
            <IconComponent size={props.size} />
          )}
          {props.isLoading && loadingPosition === 'right' && (
            <ModalLoading
              size={props.size}
              color={theme.colors.button[props.genre].color.rest}
            />
          )}
        </>
      )}
    </StyledButton>
  )
})
