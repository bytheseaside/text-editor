'use client'

import { marked } from 'marked';
import { useState } from "react";
import { EditorProvider } from '@tiptap/react'
import Box from '@mui/material/Box'
import StarterKit from "@tiptap/starter-kit";
import MenuBar from "./components/MenuBar";
import CustomFloatingMenu from './components/CustomFloatingMenu';

// const URL = 'https://backend.app.qanswer.ai/api/tasks/report-copilot/report-continuation'

export default function Home() {
  const [info, setInfo] = useState('# Editor Styles \nHere you can test all the styles applied from the menu bar: \n## Heading 2 \nThis is an *italicized* text, and here is a **bold** text. \nHere is a `console.log()` statement: \n```\nconst foo = \'bar\';\n```\n---\n- List item 1\n- List item 2\n\n1. Ordered list item 1\n2. Ordered list item 2\n\n*Emphasized* and **strong** text in paragraphs.')

  return (
    <Box
      sx={(theme) => ({
        background: 'background.default',
        width: '100%',
        minWidth: '320px',
        maxWidth: '1800px',
        margin: '0 auto',
        [theme.breakpoints.only('xs')]: {
          paddingLeft: theme.spacing(4),
          paddingRight: theme.spacing(4),
        },
        [theme.breakpoints.only('sm')]: {
          paddingLeft: theme.spacing(6),
          paddingRight: theme.spacing(6),
        },
        [theme.breakpoints.only('md')]: {
          paddingLeft: theme.spacing(8),
          paddingRight: theme.spacing(8),
        },
        [theme.breakpoints.only('lg')]: {
          width: `calc(100% - ${theme.spacing(56)})`,
        },
        [theme.breakpoints.only('xl')]: {
          width: `calc(100% - ${theme.spacing(65)})`,
        },
      })}
    >
      <EditorProvider
        slotBefore={
          <MenuBar />
        }
        extensions={[StarterKit]}
        content={marked(info)}
      />
    </Box>
  );
}
