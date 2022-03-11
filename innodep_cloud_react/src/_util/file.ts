export function downloadFile(file: ArrayBuffer, type: string, name: string) {
  const blob = new Blob([file], {
    type,
  });

  const element = document.createElement('a');
  element.setAttribute('href', window.URL.createObjectURL(blob));
  element.setAttribute('target', '_self');
  element.setAttribute('download', name);
  element.style.display = 'none';
  document.body.appendChild(element);
  element.click();
  // window.URL.revokeObjectURL(element);
  document.body.removeChild(element);
}
