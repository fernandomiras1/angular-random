import { TestingModule } from './../../../../../../test/utils/utils';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ChatModalComponent } from './chat-modal.component';

describe('ChatModalComponent', () => {
  let component: ChatModalComponent;
  let fixture: ComponentFixture<ChatModalComponent>;

  beforeEach((() => {
    TestBed.configureTestingModule({
      imports: [
        TestingModule,
      ],
      providers: [
      ],
    });

    fixture = TestBed.createComponent(ChatModalComponent);
    component = fixture.componentInstance;
  }));

  afterEach(() => {
    fixture.destroy();
  });

  it('ChatModalComponent should be created ', () => {
    expect(component).toBeTruthy();
  });

  it('open() should set visible to true ', () => {
    component.open();
    expect(component.visible).toBeTruthy();
  });

  it('close() should set visible to false ', () => {
    component.close();
    expect(component.visible).toBeFalsy();
  });

});
