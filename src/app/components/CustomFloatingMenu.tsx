import React from 'react';
import { FloatingMenu, useCurrentEditor } from '@tiptap/react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TurndownService from 'turndown';
import { marked } from 'marked';

const CustomFloatingMenu: React.FC = () => {
  const { editor } = useCurrentEditor();

  if (!editor) {
    return null;
  }

  const fetchAndAddText = async () => {
    try {
      const htmlContent = editor.getHTML();
      
      const turndownService = new TurndownService();
      const markdownContent = turndownService.turndown(htmlContent);

      const response = await fetch('/api/getContinuation', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ previousText: markdownContent }),
      });

      if (!response.ok) {
        console.error('API response status:', response.status);
        const errorText = await response.text();
        console.error('Error response text:', errorText);
        throw new Error('Failed to fetch new text');
      }

      const data = await response.json();
      const continuationMarkdown = data.continuation;

      if (!continuationMarkdown) {
        console.error('API response did not contain continuation');
        return;
      }
      
      const continuationHTML = marked(
        continuationMarkdown.replace(/<sup[^>]*>[^<]*<\/sup>/g, '')
      );

      editor.commands.insertContent(continuationHTML);
    } catch (error) {
      console.error('Error fetching continuation:', error);
    }
  };

  return (
    <FloatingMenu editor={editor} tippyOptions={{ duration: 100 }}>
      <Box
        sx={{
          zIndex: 9999,
          left: -10,
          top: 10,
          pl: 2,
          borderLeft: '3px solid #e0e0e0',
        }}
      >
        <Button
          variant="contained"
          onClick={fetchAndAddText}
          sx={{
            width: '100%',
            minWidth: 200,
            backgroundColor: '#f5f5f5',
            color: '#000',
            '&:hover': {
              backgroundColor: '#e0e0e0',
            },
          }}
        >
          + TEXT
        </Button>
      </Box>
    </FloatingMenu>
  );
};

export default CustomFloatingMenu;
