import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipechildComponent } from './recipechild.component';

describe('RecipechildComponent', () => {
  let component: RecipechildComponent;
  let fixture: ComponentFixture<RecipechildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RecipechildComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RecipechildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
