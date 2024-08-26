// Get the URL to the site where the flag. 
export default async function collateFlagUrl(url) {
  // Get the html.
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", url);
    xhr.send();
    // xhr.onreadystatechange = () => {
    xhr.onload = () => {
      if (xhr.status === 200) {
        const res = xhr.responseText;
        const parser = new DOMParser();
        const dom = parser.parseFromString(res, 'text/html');
        const codeElements = dom.querySelectorAll('code > div > span > i');
        const flagUrl = [...codeElements].map(element => element.getAttribute('value')).join('');    
        resolve(flagUrl);
      } else {
        reject(
          {
            status: xhr.status,
            message: xhr.statusText
          }
        )
      }
    }
  });
}
