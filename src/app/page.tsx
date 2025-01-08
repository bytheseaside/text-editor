'use client'

import { marked } from 'marked';
import { useState } from "react";
import { EditorProvider } from '@tiptap/react'
import Box from '@mui/material/Box'
import StarterKit from "@tiptap/starter-kit";
import MenuBar from "./components/MenuBar";
import CustomFloatingMenu from './components/CustomFloatingMenu';

const URL = 'https://backend.app.qanswer.ai/api/tasks/report-copilot/report-continuation'

export default async function Home() {
  const [info, setInfo] = useState('# Editor Styles \nHere you can test all the styles applied from the menu bar: \n## Heading 2 \nThis is an *italicized* text, and here is a **bold** text. \nHere is a `console.log()` statement: \n```\nconst foo = \'bar\';\n```\n---\n- List item 1\n- List item 2\n\n1. Ordered list item 1\n2. Ordered list item 2\n\n*Emphasized* and **strong** text in paragraphs.')

    const getNewText = async () => {
    try {
      const response = await fetch(URL, {
        method: 'POST',
        body: JSON.stringify({
          username: "new_test",
          dataset: "report",
          text: info, // Send the current content in the request
        }),
        headers: {
          Authorization: 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiI1NjQyIiwiaWF0IjoxNzM2MzUyNDgyLCJleHAiOjE3MzY5NTcyODJ9.DC_Kq_3TGkFcF8QIamIFRJQJJFVOehABwsvWbhEfM_njVlluxpMy47tmRrdx7uSZpu7-QYhJWuVRB0h8P59alQ',
          'Content-Type': 'application/json',
        },
      });

      const data = await response.json();

      setInfo(prev => prev +  marked(data.continuation));
      return marked(data.continuation);
    } catch (error) {
      console.error('Error fetching new text:', error);
      return ''; 
    }
  };

  console.log('info:', info);
  

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
      >
        <CustomFloatingMenu
          getNewText={getNewText}
        />
      </EditorProvider>
    </Box>
  );
}
