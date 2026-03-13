const fs = require('fs');
const files = [
  'src/components/sections/cta.tsx',
  'src/components/sections/hero.tsx',
  'src/components/sections/mission.tsx',
  'src/components/sections/team.tsx',
  'src/components/sections/vision.tsx',
  'src/components/ui/logo.tsx'
];

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  
  // Replace <Butterfly ... /> with <span ...>🦋</span>
  content = content.replace(/<Butterfly([^>]*)\/>/g, (match, p1) => {
    return `<span${p1}>🦋</span>`;
  });
  
  // Remove import
  content = content.replace(/import \{ Butterfly \} from '@\/components\/ui\/butterfly';\n?/g, '');
  
  fs.writeFileSync(file, content);
});
console.log('Replaced Butterfly SVG with emoji.');
