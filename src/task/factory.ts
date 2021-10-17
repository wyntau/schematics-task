import { Rule } from '@angular-devkit/schematics';
import { ITaskOptions } from './schema';

// You don't have to export the function as default. You can also have more than one rule factory
// per file.
export function runTask(taskFn: ITaskOptions): Rule {
  return taskFn;
}
