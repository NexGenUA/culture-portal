import { IScopeItem } from '../models/scope-item.model';
import { IWorklogItem } from '../models/worklog-item.model';

export const enum SCOPES_TITLES {
  MIN = 'Min',
  NORMAL = 'Normal',
  EXTRA = 'Extra'
}

const MIN_SCOPE: IScopeItem[] = [
  {
    title: 'Main page + page with a list of authors + author\'s page (only pages with content without widgets)',
    checked: false,
    score: 10
  },
  {
    title: 'Page with team members + page with worklog',
    checked: false,
    score: 10
  },
  {
    title: 'Page with list of authors contains search widget',
    checked: false,
    score: 10
  },
  {
    title: 'Portal has two languages',
    checked: true,
    score: 20
  }
];

const NORMAL_SCOPE: IScopeItem[] = [
  {
    title: 'Portal has page with styleguide',
    checked: false,
    score: 20
  },
  {
    title: 'Mobile version is okey',
    checked: true,
    score: 10
  },
  {
    title: 'Ipad/tablet version is okey',
    checked: true,
    score: 10
  },
  {
    title: 'Author\'s page contains timeline',
    checked: false,
    score: 10
  },
  {
    title: 'Author\'s page contains video overlay',
    checked: false,
    score: 10
  },
  {
    title: 'Author\'s page contains photo gallery',
    checked: false,
    score: 20
  },
  {
    title: 'Author\'s page contains map (geowidget)',
    checked: false,
    score: 10
  },
  {
    title: 'Design (typography, icons, colors, links + buttons + input, ui components are styled)',
    checked: false,
    score: 20
  },
  {
    title: 'Material-ui / bootstrap is used',
    checked: true,
    score: 20
  },
  {
    title: 'Portal has third language',
    checked: true,
    score: 10
  }
];

const EXTRA_SCOPE: IScopeItem[] = [
  {
    title: 'Confidence of the project presentation',
    checked: true,
    score: 10
  },
  {
    title: 'Project is made using scully',
    checked: false,
    score: 10
  },
  {
    title: 'Contentful / netlify cms / other cms is used for content management',
    checked: false,
    score: 10
  },
  {
    title: 'Animations / special effects like paralax',
    checked: false,
    score: 20
  },
  {
    title: 'Outstanding design',
    checked: true,
    score: 20
  },
  {
    title: 'Storybook/angularplayground/compodoc/other angulaer styleguide/documentation tool usage for the page with styles',
    checked: false,
    score: 20
  }
];

export const SCOPES: {title: SCOPES_TITLES, items: IScopeItem[]}[] = [
  {
    title: SCOPES_TITLES.MIN,
    items: MIN_SCOPE
  },
  {
    title: SCOPES_TITLES.NORMAL,
    items: NORMAL_SCOPE
  },
  {
    title: SCOPES_TITLES.EXTRA,
    items: EXTRA_SCOPE
  }
];

export const ELEMENTS: IWorklogItem[] = [
  {
    feature: 'feature',
    timeSpent: 1,
    startDate: new Date('2020-09-20'),
    endDate: new Date('2020-09-20'),
  }
];

export const enum developers {
  ASADCHY = 'Pavel Asadchy',
  FRALTSOV = 'Alexander Fraltsov',
  RUDNIK = 'Mikita Rudnik',
  SIDOROV = 'Alexandr Sidorov',
  STEPOVENKO = 'Valentyn Stepovenko'
}

export const MOCK_DATA: {user: developers, features: IWorklogItem[]}[] = [
  {
    user: developers.ASADCHY,
    features: ELEMENTS
  },
  {
    user: developers.FRALTSOV,
    features: ELEMENTS
  },
  {
    user: developers.RUDNIK,
    features: ELEMENTS
  },
  {
    user: developers.SIDOROV,
    features: ELEMENTS
  },
  {
    user: developers.STEPOVENKO,
    features: ELEMENTS
  }
];
