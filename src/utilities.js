import fs from 'fs-extra';
import os from 'os';
import path, { dirname } from 'path';
import yaml from 'js-yaml';
import { cwd } from 'process';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

class Utilities {
  static listDir() {
    const results = fs.readdirSync('./', { withFileTypes: true });
    const filterDir = results
      .filter((x) => {
        return x.isDirectory() && x.name != 'tmuxinator-yaml-files';
      })
      .map((x) => path.join(cwd(), x.name));

    return filterDir;
  }

  static templateJSON() {
    const doc = yaml.load(
      fs.readFileSync(path.join(__dirname, 'data/template.yml'), 'utf8')
    );
    return doc;
  }

  static windowNameGen(pathstr) {
    return pathstr.split('/').slice(-1)[0];
  }

  static writeyaml(dumpYAML, name) {
    const dirname = './tmuxinator-yaml-files';
    const dirExists = fs.existsSync(dirname);
    if (!dirExists) {
      fs.mkdirSync(dirname);
    }
    fs.writeFileSync(`${dirname}/${name}.yml`, dumpYAML, 'utf8');
    return `${dirname}/${name}.yml`;
  }

  static copyToConfFolder(filepath, name) {
    const homedir = os.homedir()
    const src = filepath;
    const dest = `${homedir}/.tmuxinator/${name}.yml`;
    const options = { dereference: true };
    fs.copySync(filepath, dest, options);
  }

  static showSuccessMessage(pathName) {
    const successMessage = `Generated yaml file will be placed on \n => ${pathName}`;
    console.log(successMessage);
  }

  static tmuxinatorYAMLgen(cliFlags) {
    const dirlist = this.listDir();
    const rawjson = this.templateJSON();
    const windowtemplatejson = rawjson['windows'][0]['window-name'];
    const { editor } = cliFlags;
    const tmuxinatorJSON = {
      name: cliFlags.name,
      windows: dirlist.map((dirname) => {
        const windowjson = { ...windowtemplatejson };
        windowjson['root'] = dirname;
        windowjson['panes'][0] = editor;
        const windowName = this.windowNameGen(dirname);
        const json = {
          [windowName]: windowjson,
        };
        return json;
      }),
    };
    const dumpYAML = yaml.dump(tmuxinatorJSON, {
      flowLevel: -1,
      noRefs: true,
      lineWidth: -1,
    });
    const ymlPath = this.writeyaml(dumpYAML, cliFlags.name);
    this.showSuccessMessage(ymlPath);
    if (cliFlags.copy2Config) {
      this.copyToConfFolder(ymlPath, cliFlags.name);
    }
  }
}

export { Utilities };
