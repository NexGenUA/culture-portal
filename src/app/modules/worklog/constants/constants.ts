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
    checked: true,
    score: 10
  },
  {
    title: 'Page with team members + page with worklog',
    checked: true,
    score: 10
  },
  {
    title: 'Page with list of authors contains search widget',
    checked: true,
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
    checked: true,
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
    checked: true,
    score: 10
  },
  {
    title: 'Author\'s page contains video overlay',
    checked: false,
    score: 10
  },
  {
    title: 'Author\'s page contains photo gallery',
    checked: true,
    score: 20
  },
  {
    title: 'Author\'s page contains map (geowidget)',
    checked: false,
    score: 10
  },
  {
    title: 'Design (typography, icons, colors, links + buttons + input, ui components are styled)',
    checked: true,
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
    checked: true,
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
export enum developersNames {
  ASADCHY = 'Pavel Asadchy',
  FRALTSOV = 'Alexander Fraltsov',
  RUDNIK = 'Mikita Rudnik',
  SIDOROV = 'Alexandr Sidorov',
  STEPOVENKO = 'Valentyn Stepovenko'
}
const developers: { [key: string]: developersNames } = {
  ASADCHY: developersNames.ASADCHY,
  FRALTSOV: developersNames.FRALTSOV,
  RUDNIK: developersNames.RUDNIK,
  SIDOROV: developersNames.SIDOROV,
  STEPOVENKO: developersNames.STEPOVENKO
};

const features = {
  ASADCHY: [
    {
      feature: 'Markup for search page & cards',
      timeSpent: 3,
      startDate: new Date('2020-09-23'),
      endDate: new Date('2020-09-24'),
    },
    {
      feature: 'Routing & services',
      timeSpent: 2,
      startDate: new Date('2020-09-23'),
      endDate: new Date('2020-09-24'),
    },
    {
      feature: 'Markup for detailed page, image gallery',
      timeSpent: 4,
      startDate: new Date('2020-09-24'),
      endDate: new Date('2020-09-25'),
    },
    {
      feature: 'Setup expansion panels, timeline',
      timeSpent: 4,
      startDate: new Date('2020-09-24'),
      endDate: new Date('2020-09-25'),
    },
  ],
  FRALTSOV: [
    {
      feature: 'Collect information about writers',
      timeSpent: 8,
      startDate: new Date('2020-09-19'),
      endDate: new Date('2020-09-21'),
    },
    {
      feature: 'Implement worklog page',
      timeSpent: 2.5,
      startDate: new Date('2020-09-21'),
      endDate: new Date('2020-09-21'),
    },
    {
      feature: 'Fix search page',
      timeSpent: 3,
      startDate: new Date('2020-09-24'),
      endDate: new Date('2020-09-26'),
    },
    {
      feature: 'Filling out worklog',
      timeSpent: 1,
      startDate: new Date('2020-09-22'),
      endDate: new Date('2020-09-26'),
    },
  ],
  RUDNIK: [
    {
      feature: 'Firebase connect',
      timeSpent: 2,
      startDate: new Date('2020-09-20'),
      endDate: new Date('2020-09-22'),
    },
    {
      feature: 'Implemented services',
      timeSpent: 4,
      startDate: new Date('2020-09-20'),
      endDate: new Date('2020-09-23'),
    },
  ],
  SIDOROV: [
    {
      feature: 'Imlemented design',
      timeSpent: 4,
      startDate: new Date('2020-09-19'),
      endDate: new Date('2020-09-22'),
    },
    {
      feature: 'Imlemented styleguide page',
      timeSpent: 1,
      startDate: new Date('2020-09-20'),
      endDate: new Date('2020-09-23'),
    },
  ],
  STEPOVENKO: [
    {
      feature: 'Set up project',
      timeSpent: 3,
      startDate: new Date('2020-09-19'),
      endDate: new Date('2020-09-21'),
    },
    {
      feature: 'Created initial structure',
      timeSpent: 3,
      startDate: new Date('2020-09-19'),
      endDate: new Date('2020-09-21'),
    },
    {
      feature: 'Implemented team page',
      timeSpent: 2,
      startDate: new Date('2020-09-24'),
      endDate: new Date('2020-09-27'),
    },
  ]
};

export const WORKLOG_DATA: {
  user: developersNames,
  features: IWorklogItem[]
}[] = ['ASADCHY', 'FRALTSOV', 'RUDNIK', 'SIDOROV', 'STEPOVENKO']
  .map( (name) => ({
    user: developers[name],
    features: features[name]
  }));
