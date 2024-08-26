export default async function captureTheFlag(url) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.send();
    xhr.onload = () => {
      if (xhr.status === 200) {
        const res = xhr.responseText;
        resolve(res);
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