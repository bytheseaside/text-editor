'use client'

import { useState } from "react";
import { EditorProvider, FloatingMenu, BubbleMenu } from '@tiptap/react'
import Box from '@mui/material/Box'
import StarterKit from "@tiptap/starter-kit";
import MenuBar from "./components/MenuBar";

const URL = 'https://backend.app.qanswer.ai/api/tasks/report-copilot/report-continuation'

export default function Home() {
  const [info, setInfo] = useState(`
    <h1>Editor Styles</h1>
    <p>Here you can test all the styles applied from the menu bar:</p>
    <h2>Heading 2</h2>
    <p>This is a <em>italicized</em> text, and here is a <strong>bold</strong> text.</p>
    <p>Here is a <code>console.log()</code> statement:</p>
    <pre><code>
      const foo = 'bar';
    </code></pre>
    <hr />
    <ul>
      <li>List item 1</li>
      <li>List item 2</li>
    </ul>
    <ol>
      <li>Ordered list item 1</li>
      <li>Ordered list item 2</li>
    </ol>
    <p><em>Emphasized</em> and <strong>strong</strong> text in paragraphs.</p>
`);

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
          <MenuBar
            sx={{
              // backgroundColor: 'background.default',
              // padding: 2,
            }}
          />
        }
        extensions={[StarterKit]} content={info} />
    </Box>
  );
}
