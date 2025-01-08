'use client'
import React from 'react'
import Button from '@mui/material/Button'
import { blue } from '@mui/material/colors';

import { BaseComponentPropType } from '../types/BaseComponentPropType'


type Props = BaseComponentPropType & {
  label: string
  action: () => void
  isDisabled: () => boolean
  isActive: () => boolean
}

const MenuBarChip: React.FC<Props> = (
  {
    label,
    action,
    isDisabled,
    isActive,
    sx,
  }
) => (
  <Button
    variant="contained"
    color="primary"
    onClick={action}
    disabled={isDisabled()}
    sx={[
      {
        backgroundColor: blue[500], 
        '&:hover': {
          backgroundColor: blue[700],
          transform: 'scale(1.05)',
        },
        '&.Mui-disabled': {
          backgroundColor: '#B0B0B0',
          color: 'background.paper',
        },
        padding: { xs:'4px 12px', sm:'8px 16px' },
        minWidth: '90px',
        textTransform: 'none',
        ...(isActive() ? {
        backgroundColor: blue[900], 
        transform: 'scale(1.05)',
      }
    : {})
      },
      ...(Array.isArray(sx) ? sx : [sx]),
    ]}
  >
    {label}
  </Button>
)

export default MenuBarChip