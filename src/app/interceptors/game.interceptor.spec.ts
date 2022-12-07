import { TestBed } from '@angular/core/testing';

import { GameInterceptor } from './game.interceptor';

describe('GameInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      GameInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: GameInterceptor = TestBed.inject(GameInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
