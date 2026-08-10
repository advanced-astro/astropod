import { marked } from 'marked'

export function markdownToText(markdown: string, length: number): string {
  const html = marked.parse(markdown, { async: false })
  return html
    .replace(/<[^>]+>/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
    .slice(0, length)
}
