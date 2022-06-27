export async function request(path) {
  const { searchParams } = new URL(window.location.href);
  const token = searchParams.get('token');

  const res = await fetch(`${path}?token=${token}`);
  const json = await res.json();

  return json;
}