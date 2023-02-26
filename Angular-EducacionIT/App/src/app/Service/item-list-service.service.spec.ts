import { TestBed } from '@angular/core/testing';

import { ItemListServiceService } from './item-list-service.service';

describe('ItemListServiceService', () => {
  let service: ItemListServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ItemListServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
