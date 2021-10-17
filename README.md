# schematics-task

add and run task like schematics's `NodePackageInstallTask`

## TaskFn
```ts
type Rule = (tree: Tree, context: SchematicContext) => Tree | Observable<Tree> | Rule | Promise<void | Rule> | void;
type TaskFn = Rule;
```

## Usage

### Use as a `Rule`
```ts
import { addTask } from 'schematics-task';
import { chain } from '@angular-devkit/schematics';

function foo(tree, context) {
  return chain([
    // ...
    addTask(async () => {
      // Let's run a shell script
      await execa('echo', ['hello', 'world'], {stdio: 'inherit'});
      // do whatever you want
    }),
  ]);
}
```

### Use as a utility function
```ts
import { newTask } from 'schematics-task';

function foo(_, context) {
  context.addTask(
    newTask(async () => {
      // Let's run a shell script
      await execa('echo', ['hello', 'world'], {stdio: 'inherit'});
      // do whatever you want
    })
  );
}
```

## License
MIT
