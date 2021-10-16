import { SchematicContext, Tree } from '@angular-devkit/schematics';

export type TaskFn = (tree: Tree, context: SchematicContext) => any;
export type ITaskOptions = TaskFn;
