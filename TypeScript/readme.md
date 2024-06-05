## Install 
```bash
npm init -y
npm install typescript --save-dev
npx tsc # check the version
```

## tsconfig.json
```bash
npx tsc --init
```
Add this into tsconfig.json
```json
{
  "include": ["src"], // Include the src folder
  // We need to add at least one .ts file to the src folder
  "compilerOptions": {
    "outDir": "./build"  // Output directory
  }
}
```

## Run
```bash
npx tsc
# This will compile the .ts files in the src folder and output the .js files in the build folder
```


<br><br><br>

# Modifiers
- In TypeScript, there are several modifiers that you can use to change the behavior of classes and their members.
Some of the most common modifiers are:
  

1. `readonly` This modifier can be used on properties of a class or an interface. A `readonly` property can be assigned a value only during initialization or within the constructor of the same class.
```typescript
class MyClass {
  readonly myReadonlyProp: number = 42;
}
```
1. `public`: This modifier allows a class member to be accessible everywhere. All members are `public` by default in TypeScript.
```typescript
class MyClass {
  public myPublicProp: number = 42;
}
```
1. `private`: This modifier restricts a class member to be accessible only within the class that contains it.
```typescript
class MyClass {
  private myPrivateProp: number = 42;
}
```
1. `protected`: This modifier allows a class member to be accessed within the class that contains it and by subclasses.
```typescript
class MyClass {
  protected myProtectedProp: number = 42;
}
```
1. `static`: This modifier allows a class member to be accessed without creating an instance of the class.
```typescript
class MyClass {
  static myStaticProp: number = 42;
}
```
1. `abstract`: This modifier can be used on classes and methods. An abstract class cannot be instantiated directly, and an abstract method must be implemented by a subclass.
```typescript
abstract class MyAbstractClass {
  abstract myAbstractMethod(): void;
}
```

And many more... 
- [More about modifiers](https://www.typescriptlang.org/docs/handbook/classes.html#modifiers)



# Interfaces
- An interface is a way to define a contract in your code. It defines the syntax for classes to follow. Classes that are derived from an interface must follow the structure provided by their interface.
- Interfaces are defined using the `interface` keyword.
- An interface can contain methods, properties, and events.
- An interface can inherit from one or more base interfaces.
- A class that implements an interface must implement all members of the interface.

```typescript
interface IEmployee {
  empCode: number;
  empName: string;
  getSalary: (number) => number; // Method
}

class Employee implements IEmployee {
  empCode: number;
  empName: string;

  constructor(code: number, name: string) {
    this.empCode = code;
    this.empName = name;
  }

  getSalary(empCode:number): number {
    // Implementation details...
    return 0;
  }
}
```