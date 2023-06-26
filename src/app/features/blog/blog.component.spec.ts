import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogComponent } from './blog.component';
import { provideMockStore } from "@ngrx/store/testing";
import { AppComponent } from "../../app.component";

describe('BlogComponent', () => {
  let component: BlogComponent;
  let fixture: ComponentFixture<BlogComponent>;

  const initialState = {};

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [ provideMockStore({ initialState })],
      declarations: [ BlogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render post title', () => {
    const fixture = TestBed.createComponent(BlogComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('#postTitle')?.textContent).toContain('Latest Posts');
  });

});
