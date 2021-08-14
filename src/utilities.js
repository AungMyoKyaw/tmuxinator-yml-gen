import fs from 'fs';
import path from 'path';
import { cwd } from 'process';

class Utilities {
  static listDir() {
    const results = fs.readdirSync('./', { withFileTypes: true });
    const filterDir = results
      .filter((x) => x.isDirectory())
      .map((x) => path.join(cwd(), x.name));
    return filterDir;
  }
  static tmuxinatorYAMLgen() {
    const dirlist = this.listDir();
    console.log(dirlist);
  }
}

export { Utilities };
