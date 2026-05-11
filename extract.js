const fs = require('fs');
const content = fs.readFileSync('printwork_strings.txt', 'utf8');
const strings = content.match(/(["'])(?:(?=(\\?))\2.)*?\1/g);
if (strings) {
  const filtered = strings
    .map(s => s.slice(1, -1))
    .filter(s => s.length > 10 && !s.includes('{') && !s.includes('/>') && /^[a-zA-Z]/.test(s));
  const unique = Array.from(new Set(filtered));
  fs.writeFileSync('extracted.txt', unique.join('\n'));
}
