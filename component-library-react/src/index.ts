import { initialize } from 'component-library/components';

export * from './components';
export const setupComponentLibrary = () => {
  console.log('Calling setupComponentLibrary in component-library-react');
  initialize();
}