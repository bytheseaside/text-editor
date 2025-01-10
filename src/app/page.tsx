'use client'

import { marked } from 'marked';
import { EditorProvider } from '@tiptap/react'
import Box from '@mui/material/Box'
import StarterKit from "@tiptap/starter-kit";
import MenuBar from "./components/MenuBar";
import CustomFloatingMenu from './components/CustomFloatingMenu';

export default function Home() {
  const startText = '# How to sign up: step by step'
  
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
        '& ul': {
        paddingLeft: '20px',
        listStyleType: 'disc',
        marginBottom: '16px',
      },
      '& ol': {
        paddingLeft: '20px',
        listStyleType: 'decimal',
        marginBottom: '16px',
      },
      '& li': {
        marginBottom: '8px',
      },
      '& code': {
        backgroundColor: '#e0e0e0',
        padding: '2px 4px',
        borderRadius: '4px',
        fontFamily: "'Fira Code', monospace",
      },
      '& pre': {
        backgroundColor: '#1e1e1e',
        color: '#ffffff',
        padding: '16px',
        borderRadius: '8px',
        fontFamily: "'Fira Code', monospace",
        overflowX: 'auto',
      },
      '& pre code': {
        backgroundColor: 'transparent',
        color: 'inherit',
        padding: 0,
      },

      })}
    >
      <EditorProvider
        slotBefore={
          <MenuBar />
        }
        extensions={[StarterKit]}
        content={marked(startText)}
        editorContainerProps={{
          style: {
            padding: '24px', // General padding for the editor
            backgroundColor: '#ffffff', // Editor background color
            border: '1px solid #e0e0e0', // Border for the editor
            borderRadius: '8px', // Rounded corners
            lineHeight: '1.6', // Better readability
            fontFamily: 'Arial, sans-serif', // Editor font
            color: '#333333', // Text color
            overflowY: 'auto', // Scroll behavior if content overflows
            maxHeight: '600px', // Maximum height for the editor
          },
        }}
      >
        <CustomFloatingMenu/>
      </EditorProvider>
    </Box>
  );
}
