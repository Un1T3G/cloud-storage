export const getExtensionFromFilename = (filename: string) => {
  return filename.split('.').pop()!
}

export const isImage = (ext: string) => {
  const exts = ['jpg', 'gif', 'png', 'webp', 'bmp']

  return exts.includes(ext)
}

export const sliceText = (text: string, maxSize: number) => {
  return text.slice(0, Math.min(maxSize, text.length))
}
