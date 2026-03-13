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
  
  // Replace <Bird with <Butterfly
  content = content.replace(/<Bird /g, '<Butterfly ');
  
  // Remove Bird from lucide-react import
  content = content.replace(/Bird,\s*/g, '');
  content = content.replace(/,\s*Bird/g, '');
  content = content.replace(/import \{ Bird \} from 'lucide-react';\n?/g, '');
  
  // Add Butterfly import if not present
  if (!content.includes('import { Butterfly }')) {
    // Find the lucide-react import and add Butterfly import after it
    content = content.replace(
      /(import .* from 'lucide-react';)/,
      "$1\nimport { Butterfly } from '@/components/ui/butterfly';"
    );
  }
  
  fs.writeFileSync(file, content);
});
console.log('Fixed Butterfly icons.');
