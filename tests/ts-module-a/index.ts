export * from './some';
export const works = (): boolean => true;

import * as b from '@test/ts-module-b';
export const moduleB = b;

export enum SomeEnum {
  Foo,
  Bar
}

export class SomeClass {
  someProperty = true;
  private somePrivateProperty = true;
  declare someDeclaredProperty: true;
}

declare global {
  interface Window {
    foo?: { bar?: string };
  }
}

export const foo = window.foo?.bar ?? 'foo';

export type { SomeType } from './types-only';
