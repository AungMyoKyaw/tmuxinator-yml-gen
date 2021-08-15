#!/usr/bin/env node

import meow from 'meow';

import { Utilities } from './utilities.js';

const cli = meow(
  `
	Usage
	  $ mx-yml-gen
  Options
    --name
    --editor
	Examples
	  $ mx-yml-gen --name=amk --editor=vim
`,
  {
    importMeta: import.meta,
    flags: {
      name: {
        type: 'string',
        isRequired: true,
      },
      editor: {
        type: 'string',
        isRequired: true,
        default: 'nvim',
      },
      // copy2config: {
      //   type: 'boolean',
      //   isRequired: false,
      //   alias: 'cp',
      //   default: false,
      // },
    },
  }
);

Utilities.tmuxinatorYAMLgen(cli.flags);
