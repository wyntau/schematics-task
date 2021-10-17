import { Rule } from '@angular-devkit/schematics';
import { ITaskOptions } from './schema';
import debugLib from 'debug';

const debug = debugLib('schematics-task:task');

// You don't have to export the function as default. You can also have more than one rule factory
// per file.
export function runTask(taskFn: ITaskOptions): Rule {
  debug('run task');
  return taskFn;
}
