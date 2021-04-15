import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginatorComponent } from './paginator.component';
import { SharedModule } from '@shared/shared.module';
import { TestingModule } from '@testing/utils/utils';

describe('PaginatorComponent', () => {
  let component: PaginatorComponent;
  let fixture: ComponentFixture<PaginatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        SharedModule,
        TestingModule,
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('ngOnChanges should call renderGroupOfPagesFromCurrentPageNumber()', () => {
    const spy = spyOn(component, 'renderGroupOfPagesFromCurrentPageNumber');
    component.ngOnChanges({});
    expect(spy).toHaveBeenCalled();
  });

  it('ngOnChanges should set pages', () => {
    const spy = spyOn(component, 'renderGroupOfPagesFromCurrentPageNumber');
    const chn: any = {
      lastPageNumber:
      {
        currentValue: 5,
      },
    };
    component.ngOnChanges(chn);
    expect(component.middlePagesToBeRendered.length).toBeTruthy();
  });

  it('ngOnChanges should set pages with currentValue == null', () => {
    const spy = spyOn(component, 'renderGroupOfPagesFromCurrentPageNumber');
    const chn: any = {
      lastPageNumber: {
        currentValue: 'test',
      },
    };
    component.ngOnChanges(chn);
    expect(component.middlePagesToBeRendered.length).toEqual(0);
  });

  it('onPageClicked should emit pageNumber', () => {
    component.loadPageNumberRequested.subscribe(res => expect(res).toEqual(5));
    component.onPageClicked(5);
  });

  it('pageIsCurrentPage should return true', () => {
    component.currentPageNumber = 5;
    const res = component.pageIsCurrentPage(5);
    expect(res).toBeTruthy();
  });

  it('pageIsCurrentPage should return false', () => {
    component.currentPageNumber = 6;
    const res = component.pageIsCurrentPage(5);
    expect(res).toBeFalsy();
  });

  it('currentPageIsFirstPage should return true', () => {
    component.currentPageNumber = 1;
    const res = component.currentPageIsFirstPage();
    expect(res).toBeTruthy();
  });

  it('currentPageIsFirstPage should return false', () => {
    component.currentPageNumber = 2;
    const res = component.currentPageIsFirstPage();
    expect(res).toBeFalsy();
  });

  it('currentPageIsLastPage should return true', () => {
    component.lastPageNumber = 10;
    component.currentPageNumber = 10;
    const res = component.currentPageIsLastPage();
    expect(res).toBeTruthy();
  });

  it('currentPageIsLastPage should return false', () => {
    component.lastPageNumber = 10;
    component.currentPageNumber = 5;
    const res = component.currentPageIsLastPage();
    expect(res).toBeFalsy();
  });

  it('onLeftArrowClicked should emit getPreviousPageNumber() ', () => {
    const spy = spyOn(component, 'getPreviousPageNumber').and.returnValue(5);
    component.loadPageNumberRequested.subscribe(res => expect(res).toEqual(5));
    component.onLeftArrowClicked();
  });

  it('onRightArrowClicked should emit getNextPageNumber() ', () => {
    const spy = spyOn(component, 'getNextPageNumber').and.returnValue(5);
    component.loadPageNumberRequested.subscribe(res => expect(res).toEqual(5));
    component.onRightArrowClicked();
  });

  it('getPreviousPageNumber should return currentPage -1', () => {
    component.currentPageNumber = 5;
    const res = component.getPreviousPageNumber();
    expect(res).toEqual(component.currentPageNumber - 1);
  });

  it('getPreviousPageNumber should throw error', () => {
    component.currentPageNumber = 1;
    expect(() => component.getPreviousPageNumber()).toThrow(Error('Illegal State: Cannot go back from first page!'));
  });

  it('getNextPageNumber should return currentPage + 1', () => {
    component.currentPageNumber = 5;
    component.lastPageNumber = 100;
    const res = component.getNextPageNumber();
    expect(res).toEqual(component.currentPageNumber + 1);
  });

  it('getNextPageNumber should throw error', () => {
    component.currentPageNumber = 5;
    component.lastPageNumber = 5;
    expect(() => component.getNextPageNumber()).toThrow(Error('Illegal State: Cannot go forward from last page!'));
  });

  it('currentPageIsLastPageOfRenderedGroup  return true', () => {
    component.currentPageNumber = 5;
    component.pagesCurrentlyRendered = [5];
    const res = component.currentPageIsLastPageOfRenderedGroup();
    expect(res).toBeTruthy();
  });

  it('currentPageIsLastPageOfRenderedGroup  return false', () => {
    component.currentPageNumber = 5;
    component.pagesCurrentlyRendered = [5, 6];
    const res = component.currentPageIsLastPageOfRenderedGroup();
    expect(res).toBeFalsy();
  });

  it('getFirstRenderedItemLabel should return ellipsis ', () => {
    const res = component.getFirstRenderedItemLabel(5);
    expect(res).toEqual('...');
  });

  it('getFirstRenderedItemLabel should return page number 2 ', () => {
    const res = component.getFirstRenderedItemLabel(2);
    expect(res).toEqual('2');
  });

  it('getLastRenderedItemLabel should return ellipsis ', () => {
    component.middlePagesToBeRendered = [5, 6];
    const res = component.getLastRenderedItemLabel(5);
    expect(res).toEqual('...');
  });

  it('getLastRenderedItemLabel should return page number ', () => {
    component.middlePagesToBeRendered = [5];
    const res = component.getLastRenderedItemLabel(5);
    expect(res).toEqual('5');
  });

  it('shouldDisplayEllipsis should call getFirstRenderedItemLabel ', () => {
    const spy = spyOn(component, 'getFirstRenderedItemLabel');
    component.shouldDisplayEllipsis(5, 0);
    expect(spy).toHaveBeenCalled();
  });

  it('shouldDisplayEllipsis should call getLastRenderedItemLabel ', () => {
    const spy = spyOn(component, 'getLastRenderedItemLabel');
    component.pagesCurrentlyRendered = [5, 2, 3];
    component.shouldDisplayEllipsis(5, 2);
    expect(spy).toHaveBeenCalled();
  });

  it('shouldDisplayEllipsis should return page ', () => {
    const spy = spyOn(component, 'getLastRenderedItemLabel');
    component.pagesCurrentlyRendered = [5, 6, 3];
    const res = component.shouldDisplayEllipsis(5, 1);
    expect(res).toEqual('5');
  });

  it('renderGroupOfPagesFromCurrentPageNumber shuold  set pagesCurrentlyRendered if its first page ', () => {
    const spy = spyOn(component, 'currentPageIsFirstPage').and.returnValue(true);
    component.renderGroupOfPagesFromCurrentPageNumber();
    expect(spy).toHaveBeenCalled();
  });

  it('renderGroupOfPagesFromCurrentPageNumber shuold  set pagesCurrentlyRendered if its last page ', () => {
    const spy = spyOn(component, 'currentPageIsFirstPage').and.returnValue(false);
    const spy2 = spyOn(component, 'currentPageIsLastPage').and.returnValue(true);
    component.renderGroupOfPagesFromCurrentPageNumber();
    expect(spy2).toHaveBeenCalled();
  });

  it('renderGroupOfPagesFromCurrentPageNumber shuold  set pagesCurrentlyRendered if its last page else branch ', () => {
    const spy = spyOn(component, 'currentPageIsFirstPage').and.returnValue(false);
    const spy2 = spyOn(component, 'currentPageIsLastPage').and.returnValue(true);
    component.middlePagesToBeRendered = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
    component.maxSize = 10;
    component.renderGroupOfPagesFromCurrentPageNumber();
    expect(spy2).toHaveBeenCalled();
  });

  it('renderGroupOfPagesFromCurrentPageNumber shuold  render middle pages', () => {
    const spy = spyOn(component, 'currentPageIsFirstPage').and.returnValue(false);
    const spy2 = spyOn(component, 'currentPageIsLastPage').and.returnValue(false);
    component.middlePagesToBeRendered = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
    component.maxSize = 10;
    component.renderGroupOfPagesFromCurrentPageNumber();
    expect(spy2).toHaveBeenCalled();
  });

  it('renderGroupOfPagesFromCurrentPageNumber shuold  render middle pages if current page is within group', () => {
    const spy = spyOn(component, 'currentPageIsFirstPage').and.returnValue(false);
    const spy2 = spyOn(component, 'currentPageIsLastPage').and.returnValue(false);
    component.currentPageNumber = 3;
    component.middlePagesToBeRendered = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
    component.maxSize = 10;
    component.renderGroupOfPagesFromCurrentPageNumber();
    expect(spy2).toHaveBeenCalled();
  });

  it('renderGroupOfPagesFromCurrentPageNumber shuold  render middle pages if current page is within group and length > maxSize', () => {
    const spy = spyOn(component, 'currentPageIsFirstPage').and.returnValue(false);
    const spy2 = spyOn(component, 'currentPageIsLastPage').and.returnValue(false);
    component.currentPageNumber = 3;
    component.middlePagesToBeRendered = [2, 3, 4, 5, 6, 7, 8];
    component.maxSize = 10;
    component.renderGroupOfPagesFromCurrentPageNumber();
    expect(spy2).toHaveBeenCalled();
  });

});
