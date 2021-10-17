# schematics-task

add and run task like schematics's `NodePackageInstallTask`

## TaskFn
```ts
import { Rule } from '@angular-devkit/schematics';
type TaskFn = Rule;
```

`TaskFn` has no difference with a normal `Rule`.

## Export
- `addTask`, return a `Rule`, so you can use it like other `Rule` generators.
- `newTask`, task generate utility, then you can add the result to `context.addTask`

## Usage

### Use as a `Rule`
```ts
import { addTask } from 'schematics-task';
import { chain, Rule } from '@angular-devkit/schematics';

function foo(tree, context): Rule {
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
import { Tree, SchematicContext } from '@angular-devkit/schematics';
import execa from 'execa';

function foo(tree: Tree, context: SchematicContext) {
  context.addTask(
    newTask(async (_tree, _context) => {
      // you can also use tree & context here
      // Let's run a shell script
      await execa('echo', ['hello', 'world'], {stdio: 'inherit'});
      // do whatever you want
    })
  );
  return tree;
}
```

## License
MIT
