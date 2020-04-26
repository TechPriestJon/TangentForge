import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MainComponent } from './main.component';

describe('MainComponent', () => {
  let component: MainComponent;
  let fixture: ComponentFixture<MainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [ MainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should update the imgsrc when button is clicked'`, () => {
    const fixture = TestBed.createComponent(MainComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.imgSrc).toEqual('assets/cogspin1.png');
    expect(app.imgAltText).toEqual('spinning cog');
    expect(app.buttonImg).toEqual(false);
    app.setCentralImage('verdure');
    expect(app.imgSrc).toEqual('assets/verdureicon.png');
    expect(app.imgAltText).toEqual('spinning verdure icon');
    expect(app.buttonImg).toEqual(true);
  });    
});
