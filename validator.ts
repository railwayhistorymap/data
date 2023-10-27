import * as fs from 'fs'

const errors: String[] = [];
for (const filename of fs.readdirSync('.')) {
    if (filename.endsWith('.geojson')) {
        console.info(`validate file: ${filename}`);
        try {
            const content = fs.readFileSync(filename, { encoding: 'utf-8' });
            const json = JSON.parse(content);
            console.info(`success validation file: ${filename}`);
        } catch (error) {
            errors.push(`Ошибка проверки файла ${filename}: ${error}`);
        }
    }
}

if (errors.length > 0) {
    console.error('Ошибки проверки файлов:\n' + errors.map(e => `  ${e}`).join('\n'));
    
    throw Error('Возникли ошибки при проверке файлов!');
}
