import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Album2Component } from './album-2.component';

describe('Album2Component', () => {
  let component: Album2Component;
  let fixture: ComponentFixture<Album2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Album2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Album2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
