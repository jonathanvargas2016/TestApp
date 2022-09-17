import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageAlbumsComponent } from './page-albums.component';

describe('PageAlbumsComponent', () => {
  let component: PageAlbumsComponent;
  let fixture: ComponentFixture<PageAlbumsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageAlbumsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageAlbumsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
