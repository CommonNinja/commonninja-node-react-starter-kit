function addTokenQuery(url) {
  const { searchParams } = new URL(window.location.href);
  const token = searchParams.get('token');
  let finalUrl = url;

  if (finalUrl.includes('?')) {
    finalUrl += `&token=${token}`
  } else {
    finalUrl += `?token=${token}`
  }

  return finalUrl;
}

export async function request(input = '', init) {
  const res = await fetch(addTokenQuery(input), init);
  const json = await res.json();

  return json;
}