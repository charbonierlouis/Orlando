interface Params {
  id: string;
} 

export async function GET(request: Request, { params }: { params: Params }) {
  const data = await fetch(
    `https://queue-times.com/parks/${params.id}/queue_times.json`
  ).then((res) => res.json());
  return new Response(JSON.stringify(data), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
}
