import React from 'react'
import { FloatingMenu, useCurrentEditor } from '@tiptap/react'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import { BaseComponentPropType } from '../types/BaseComponentPropType'

type Props = BaseComponentPropType & {
  // string containing the HTML of the new text to be inserted
  getNewText: () => Promise<string>;
}

const CustomFloatingMenu: React.FC<Props> = ({ getNewText }) => {
  const { editor } = useCurrentEditor()
  
  if (!editor) {
    return null
  }
  
  return (
    <FloatingMenu editor={editor} tippyOptions={{ duration: 100 }}>
      <Box
        sx={{
          zIndex: 9999,
          left: -10,
          top: 10,
          pl: 2,
          borderLeft: '3px solid #e0e0e0',
        }}>
        <Button
          variant="contained"
          onClick={() => {
            getNewText()
              .then(n => editor.commands.insertContent(n))
          }}
          sx={{
            width: '100%', 
            minWidth: 200, // Remove the minimum width
            backgroundColor: '#f5f5f5',
            color: '#000', 
            '&:hover': {
              backgroundColor: '#e0e0e0',
            },
            
          }}
        >
          Get more text
        </Button>
      </Box>
    </FloatingMenu>
  )
}

export default CustomFloatingMenu
