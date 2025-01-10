import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const { previousText } = await req.json();

    if (!previousText) {
      return NextResponse.json(
        { error: 'The previous text is required' },
        { status: 400 }
      );
    }

    const URL = 'https://backend.app.qanswer.ai/api/tasks/report-copilot/report-continuation';

    const apiResponse = await fetch(URL, {
      method: 'POST',
      body: JSON.stringify({
        username: "new_test", 
        dataset: "report",   
        text: previousText,
      }),
      headers: {
        Authorization: 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiI1NjQyIiwiaWF0IjoxNzM2MzUyNDgyLCJleHAiOjE3MzY5NTcyODJ9.DC_Kq_3TGkFcF8QIamIFRJQJJFVOehABwsvWbhEfM_njVlluxpMy47tmRrdx7uSZpu7-QYhJWuVRB0h8P59alQ', // Replace this token with the correct one
        'Content-Type': 'application/json',
      },
    });
    
    if (!apiResponse.ok) {
      console.error('Failed to fetch from external API');
      const errorDetails = await apiResponse.text();
      return NextResponse.json(
        { error: `Failed to fetch data: ${errorDetails}` },
        { status: 500 }
      );
    }

    const data = await apiResponse.json();

    if (!data.continuation) {
      return NextResponse.json(
        { error: 'No continuation returned from the external API' },
        { status: 500 }
      );
    }

    return NextResponse.json({ continuation: data.continuation });

  } catch (error) {
    console.error('Error processing the request:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
