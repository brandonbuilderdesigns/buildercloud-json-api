import axios from 'axios';
import { parseStringPromise } from 'xml2js';

export async function GET() {
  const xmlUrl = 'https://export.mybuildercloud.com/xml/feed/5cb366014db048256e98bc2b/634560aad6c4be8f7838715f';
  const username = 'bd_xml_S2kTZ3VVPZGLCn';
  const password = 'AEe895g7Z6Y4xDBnSTPHmfpA';

  try {
    const response = await axios.get(xmlUrl, {
      auth: {
        username,
        password,
      },
      headers: {
        'Content-Type': 'application/xml',
      },
    });

    const result = await parseStringPromise(response.data);
    return new Response(JSON.stringify(result, null, 2), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    console.error('Error fetching or parsing XML:', error);
    return new Response(JSON.stringify({ error: 'Failed to fetch data' }), {
      status: 500,
    });
  }
}