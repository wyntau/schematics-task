import { Rule } from '@angular-devkit/schematics';
import { TaskFn } from './register';
import debugLib from 'debug';

const debug = debugLib('schematics-task:runner');

type ITaskOptions = TaskFn;

// You don't have to export the function as default. You can also have more than one rule factory
// per file.
export function runTask(taskFn: ITaskOptions): Rule {
  debug('run task', taskFn.name);
  return taskFn;
}
