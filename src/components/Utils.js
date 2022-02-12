export default function fixQuotes(string) {
  const result = string
    .replace(/(&quot;)|(&#039;)/g, '"')
    .replace(/(&rsquo;)/g, "'");
  return result;
}
