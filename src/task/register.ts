import { Rule } from '@angular-devkit/schematics';
import { RunSchematicTask } from '@angular-devkit/schematics/tasks';
import path from 'path';
import debugLib from 'debug';

export type TaskFn = Rule;

const debug = debugLib('schematics-task:register');

export function newTask(taskFn: TaskFn): RunSchematicTask<TaskFn> {
  debug('new task', taskFn.name);
  return new RunSchematicTask<TaskFn>(path.join(__dirname, '../collection.json'), 'task', taskFn);
}

/**
 * add custom task like `yarn install`
 * @see https://github.com/angular/angular-cli/issues/12678#issuecomment-489175547
 */
export function addTask(taskFn: TaskFn): Rule {
  return function (tree, context) {
    context.addTask(newTask(taskFn));
    debug('add task', taskFn.name);
    return tree;
  };
}
