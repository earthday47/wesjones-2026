import { marked } from 'marked';

/**
 * Renders a single line of Markdown (bold, links) to inline HTML.
 */
export function inline(text: string): string {
  return marked.parseInline(text, { async: false });
}
