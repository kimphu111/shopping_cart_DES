import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Album1Component } from './album-1.component';

describe('Album1Component', () => {
  let component: Album1Component;
  let fixture: ComponentFixture<Album1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Album1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Album1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
