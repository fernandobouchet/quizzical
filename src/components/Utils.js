export default function fixQuotes(string) {
  const result = string.replace(/(&quot;)/g, '"').replace(/(&#039;)/g, "'");
  return result;
}
