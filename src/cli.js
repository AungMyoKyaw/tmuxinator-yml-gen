#!/usr/bin/env node

import meow from 'meow';

import { Utilities } from './utilities.js';

const cli = meow(
  `
	Usage
	  $ mx-yml-gen
  Options
    --name
    --editor [use none if u don't want to open editor / default is nvim]
    --cp [copy to config]
    --mode
	Examples
	  $ mx-yml-gen --name=amk --editor=vim --cp=true --mode=amk
	  $ mx-yml-gen --name=amk --editor=none --cp=true --mode=amk
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
      copy2config: {
        type: 'boolean',
        isRequired: false,
        alias: 'cp',
        default: false,
      },
      mode: {
        type: 'string',
        default: 'default'
      },
    },
  }
);

Utilities.tmuxinatorYAMLgen(cli.flags);
