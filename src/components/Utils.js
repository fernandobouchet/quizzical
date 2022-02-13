export default function fixQuotes(string) {
  const result = string
    .replace(/(&quot;)/g, '"')
    .replace(/(&#039;)|(&rsquo;)/g, "'")
    .replace(/(&amp;)/g, "&");
  return result;
}
