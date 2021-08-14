#!/usr/bin/env node

import meow from 'meow';

import { Utilities } from './utilities.js';

const cli = meow(
  `
	Usage
	  $ tmuxinator-yml-gen
	Examples
	  $ tmuxinator-yml-gen
`,
  {
    importMeta: import.meta,
  }
);

Utilities.tmuxinatorYAMLgen();
