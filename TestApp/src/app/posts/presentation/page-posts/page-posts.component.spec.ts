import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagePostsComponent } from './page-posts.component';

describe('PagePostsComponent', () => {
  let component: PagePostsComponent;
  let fixture: ComponentFixture<PagePostsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagePostsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PagePostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
