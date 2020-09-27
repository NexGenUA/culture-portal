export enum constants {
  WHITE_THEME = 'mat-typography theme-light mat-app-background',
  DARK_THEME = 'mat-typography theme-dark mat-app-background',
  SEARCH_DEBOUNCE_TIME = 300,
}

export enum searchInstances {
  NAME = 'name',
  ADDRESS = 'address'
}

export const searchParametersArrays: {[key: string]: string[]} = {
  NAME: ['name', 'surname'],
  ADDRESS: ['city', 'country']
};

export const firebaseURL = 'https://writers-project-b9a49.firebaseio.com/';

export enum paths {
  WRITERS = 'writers',
  WRITER_ID = 'writerId',
  WORKLOG = 'worklog',
  TEAM = 'team',
  SEARCH = 'search',
  STYLEGUIDE = 'styleguide',
}
