import { TestBed } from '@angular/core/testing';

import { promocaoService } from './promocao.service';

describe('PromoçãoService', () => {
  let service: promocaoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(promocaoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
