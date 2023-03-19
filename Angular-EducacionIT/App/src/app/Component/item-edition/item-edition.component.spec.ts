import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemEditionComponent } from './item-edition.component';

describe('ItemEditionComponent', () => {
  let component: ItemEditionComponent;
  let fixture: ComponentFixture<ItemEditionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemEditionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemEditionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
