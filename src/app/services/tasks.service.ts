import { Injectable } from '@angular/core';

@Injectable()
export class TasksService {

  constructor() { }

  getTasks() {
    return [{
      id: 'Task 1',
      name: 'Redesign website',
      start: '2020-12-01',
      end: '2020-12-04',
      progress: 100,
      dependencies: '',
    },
    {
      id: 'Task 2',
      name: 'Version upgrade',
      start: '2020-12-07',
      end: '2020-12-11',
      progress: 75,
      dependencies: 'Task 1',
    },
    {
      id: 'Task 3',
      name: 'Translate texts',
      start: '2020-12-04',
      end: '2020-12-10',
      progress: 50,
      dependencies: '',
    },
    {
      id: 'Task 4',
      name: 'Auth0 integration',
      start: '2020-12-12',
      end: '2020-12-18',
      progress: 0,
      dependencies: 'Task 2',
    },
    {
      id: 'Task 5',
      name: 'Bug Fixing',
      start: '2020-12-14',
      end: '2020-12-23',
      progress: 0,
      dependencies: 'Task 4',
    },
    {
      id: 'Task 6',
      name: 'Deployment',
      start: '2021-01-04',
      end: '2021-01-05',
      progress: 0,
      dependencies: 'Task 5',
    }]
  }
}
