import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonacoEditorExprComponent } from './monaco-editor-expr.component';

describe('MocacoEditorExprComponent', () => {
  let component: MonacoEditorExprComponent;
  let fixture: ComponentFixture<MonacoEditorExprComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MonacoEditorExprComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MonacoEditorExprComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
