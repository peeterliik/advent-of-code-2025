import fs from 'fs';
export function readFileContent(file) {
    return fs.readFileSync(file, 'utf8');
}