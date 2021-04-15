import { deleteChatBtn, openPdfNewTab } from './ncom.utils';

describe('NcomUtils', () => {

  it('deleteChatBtn() should set attribute', () => {
    const res = deleteChatBtn();
    expect(res).toBeFalsy();
  });

  it('deleteChatBtn() should call set attribute', () => {
    const wrapper = {
      setAttribute: () => null,
    };
    const selector = {
      closest: () => wrapper,
    };
    spyOn(document, 'querySelector').and.returnValue(
            selector,
        );
    const res = deleteChatBtn();
    expect(res).toBeFalsy();
  });

  it('openPdfNewTab() should call set attribute', () => {
    const wrapper = {
      setAttribute: () => null,
    };
    const selector = {
      setAttribute: () => { },
    };
    spyOn(document, 'querySelectorAll').and.returnValue(
            [selector],
        );
    const res = openPdfNewTab();
    expect(res).toBeFalsy();
  });

  it('deleteChatBtn() should call set attribute', () => {
    const wrapper = {
      setAttribute: () => {},
    };
    const selector = {
      closest: () => wrapper,
    };
    spyOn(document, 'querySelector').and.returnValue(
            selector,
        );
    const res = deleteChatBtn();
    expect(res).toBeFalsy();
  });
});
