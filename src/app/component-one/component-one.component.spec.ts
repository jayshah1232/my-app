import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { ComponentOneComponent } from './component-one.component';

describe('ComponentOneComponent', () => {
  let component: ComponentOneComponent;
  let fixture: ComponentFixture<ComponentOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentOneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('must have at least 1 paragraph', () => {
    let pElements = fixture.debugElement.queryAll(By.css('p'));
    expect(pElements.length).toBeGreaterThan(0);
  });

  it('The "greeting" must read: "Hello"',() => {
    let greetingElement = fixture.debugElement.query(By.css('p.greeting'));
    expect(greetingElement.nativeElement.textContent).toEqual('Hello');
  })

  it('Sets x to 1 when "myButton" is clicked', () => {
    let button = fixture.debugElement.query(By.css('button.myButton'));
    expect(button).toBeTruthy();

    button.nativeElement.click();

    fixture.whenStable().then(() => {
      expect(component.x).toBe(1);
    });
  });
});
