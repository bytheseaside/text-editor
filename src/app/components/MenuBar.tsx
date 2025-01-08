'use client'

import React, { useMemo } from 'react'
import { useCurrentEditor } from '@tiptap/react'
import Box from '@mui/material/Box'
import MenuBarChip from './MenuBarChip'
import { BaseComponentPropType } from '../types/BaseComponentPropType'

const MenuBar: React.FC<BaseComponentPropType> = ({ sx }) => {
  const { editor } = useCurrentEditor()

  if (!editor) {
    return null
  }

  const options = useMemo(() => [
    {
      label: 'Bold',
      action: () => editor.chain().focus().toggleBold().run(),
      isDisabled: () => !editor.can().chain().focus().toggleBold().run(),
      isActive: () => editor.isActive('bold')
    },
    {
      label: 'Italic',
      action: () => editor.chain().focus().toggleItalic().run(),
      isDisabled: () => !editor.can().chain().focus().toggleItalic().run(),
      isActive: () => editor.isActive('italic')
    },
    {
      label: 'Strike',
      action: () => editor.chain().focus().toggleStrike().run(),
      isDisabled: () => !editor.can().chain().focus().toggleStrike().run(),
      isActive: () => editor.isActive('strike')
    },
    {
      label: 'Code',
      action: () => editor.chain().focus().toggleCode().run(),
      isDisabled: () => !editor.can().chain().focus().toggleCode().run(),
      isActive: () => editor.isActive('code')
    },
    {
      label: 'Clear marks',
      action: () => editor.chain().focus().unsetAllMarks().run(),
      isDisabled: () => !editor.can().chain().focus().unsetAllMarks().run(),
      isActive: () => false  // Clear marks is not active
    },
    {
      label: 'Clear nodes',
      action: () => editor.chain().focus().clearNodes().run(),
      isDisabled: () => !editor.can().chain().focus().clearNodes().run(),
      isActive: () => false  // Clear nodes is not active
    },
    {
      label: 'Paragraph',
      action: () => editor.chain().focus().setParagraph().run(),
      isDisabled: () => !editor.can().chain().focus().setParagraph().run(),
      isActive: () => editor.isActive('paragraph'),
    },
    {
      label: 'H1',
      action: () => editor.chain().focus().toggleHeading({ level: 1 }).run(),
      isDisabled: () => !editor.can().chain().focus().toggleHeading({ level: 1 }).run(),
      isActive: () => editor.isActive('heading', { level: 1 })
    },
    {
      label: 'H2',
      action: () => editor.chain().focus().toggleHeading({ level: 2 }).run(),
      isDisabled: () => !editor.can().chain().focus().toggleHeading({ level: 2 }).run(),
      isActive: () => editor.isActive('heading', { level: 2 })
    },
    {
      label: 'H3',
      action: () => editor.chain().focus().toggleHeading({ level: 3 }).run(),
      isDisabled: () => !editor.can().chain().focus().toggleHeading({ level: 3 }).run(),
      isActive: () => editor.isActive('heading', { level: 3 })
    },
    {
      label: 'H4',
      action: () => editor.chain().focus().toggleHeading({ level: 4 }).run(),
      isDisabled: () => !editor.can().chain().focus().toggleHeading({ level: 4 }).run(),
      isActive: () => editor.isActive('heading', { level: 4 })
    },
    {
      label: 'H5',
      action: () => editor.chain().focus().toggleHeading({ level: 5 }).run(),
      isDisabled: () => !editor.can().chain().focus().toggleHeading({ level: 5 }).run(),
      isActive: () => editor.isActive('heading', { level: 5 })
    },
    {
      label: 'H6',
      action: () => editor.chain().focus().toggleHeading({ level: 6 }).run(),
      isDisabled: () => !editor.can().chain().focus().toggleHeading({ level: 6 }).run(),
      isActive: () => editor.isActive('heading', { level: 6 })
    },
    {
      label: 'Bullet list',
      action: () => editor.chain().focus().toggleBulletList().run(),
      isDisabled: () => !editor.can().chain().focus().toggleBulletList().run(),
      isActive: () => editor.isActive('bulletList')
    },
    {
      label: 'Ordered list',
      action: () => editor.chain().focus().toggleOrderedList().run(),
      isDisabled: () => !editor.can().chain().focus().toggleOrderedList().run(),
      isActive: () => editor.isActive('orderedList')
    },
    {
      label: 'Code block',
      action: () => editor.chain().focus().toggleCodeBlock().run(),
      isDisabled: () => !editor.can().chain().focus().toggleCodeBlock().run(),
      isActive: () => editor.isActive('codeBlock')
    },
    {
      label: 'Horizontal rule',
      action: () => editor.chain().focus().setHorizontalRule().run(),
      isDisabled: () => !editor.can().chain().focus().setHorizontalRule().run(),
      isActive: () => false  // Horizontal rule is not active
    },
    {
      label: 'Hard break',
      action: () => editor.chain().focus().setHardBreak().run(),
      isDisabled: () => !editor.can().chain().focus().setHardBreak().run(),
      isActive: () => false  // Hard break is not active
    },
    {
      label: 'Undo',
      action: () => editor.chain().focus().undo().run(),
      isDisabled: () => !editor.can().chain().focus().undo().run(),
      isActive: () => false  // Undo is not active
    },
    {
      label: 'Redo',
      action: () => editor.chain().focus().redo().run(),
      isDisabled: () => !editor.can().chain().focus().redo().run(),
      isActive: () => false  // Redo is not active
    },
  ], [editor])

  return (
    <Box
      sx={[
        {
          display: 'flex',
          flexWrap: 'wrap',
          gap: 1,
          py: 1,
          my: 5,
          justifyContent: 'flex-start',
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
    >
      {
        options.map(({ label, action, isDisabled, isActive }) => (
          <MenuBarChip
            key={label}
            label={label}
            action={action}
            isDisabled={isDisabled}
            isActive={isActive}
          />
        ))
      }
    </Box>
  )
}

export default MenuBar
