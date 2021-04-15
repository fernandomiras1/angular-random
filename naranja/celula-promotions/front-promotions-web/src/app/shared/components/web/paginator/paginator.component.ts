import { Component, OnInit, Input, OnChanges, SimpleChanges, Output, EventEmitter, ChangeDetectorRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss'],
})
export class PaginatorComponent implements OnInit, OnChanges {

  @Input() lastPageNumber = 1;

  @Output() loadPageNumberRequested = new EventEmitter<number>();

  @Input() currentPageNumber = 1;

  @Input() maxSize = 10;

  // array of pages between first and last available be rendered by groups.
  middlePagesToBeRendered = [];

  // array with currently rendered pages
  pagesCurrentlyRendered = [];

  constructor() { }

  ngOnChanges(changes: SimpleChanges) {
    const chng = changes['lastPageNumber'];
    if (chng && chng.currentValue) {

      const lastPageNumberChange = Number(chng.currentValue) || 0;

      if (lastPageNumberChange > 2) {

        this.middlePagesToBeRendered = [];
        this.pagesCurrentlyRendered = [];

        // tslint:disable-next-line: no-increment-decrement
        for (let index = 2; index < lastPageNumberChange; index++) {
          this.middlePagesToBeRendered.push(index);
        }
      }
    }

    this.renderGroupOfPagesFromCurrentPageNumber();

  }

  ngOnInit() {
  }

  onPageClicked(pageNumberClicked: number) {
    this.loadPageNumberRequested.next(pageNumberClicked);
  }

  pageIsCurrentPage(pageNumber: number): boolean {
    return pageNumber === this.currentPageNumber;
  }

  currentPageIsFirstPage(): boolean {
    return this.currentPageNumber === 1;
  }

  currentPageIsLastPage(): boolean {
    return this.currentPageNumber === this.lastPageNumber;
  }

  onLeftArrowClicked() {
    const previousPageNumber: number = this.getPreviousPageNumber();
    this.loadPageNumberRequested.next(previousPageNumber);
  }

  getPreviousPageNumber(): number {
    if (this.currentPageNumber <= 1) {
      throw Error('Illegal State: Cannot go back from first page!');
    }
    return this.currentPageNumber - 1;
  }

  getNextPageNumber(): number {
    if (this.currentPageNumber >= this.lastPageNumber) {
      throw Error('Illegal State: Cannot go forward from last page!');
    }
    return this.currentPageNumber + 1;
  }

  onRightArrowClicked() {
    const nextPageNumber: number = this.getNextPageNumber();
    this.loadPageNumberRequested.next(nextPageNumber);
    return;
  }

  currentPageIsLastPageOfRenderedGroup(): boolean {
    return this.currentPageNumber === this.pagesCurrentlyRendered[this.pagesCurrentlyRendered.length - 1];
  }

  renderGroupOfPagesFromCurrentPageNumber() {
    if (this.currentPageIsFirstPage()) {
      // if current page iss first page render first group (variable size)
      this.pagesCurrentlyRendered = [...this.middlePagesToBeRendered.slice(0, this.maxSize)];
      return;
    }

    if (this.currentPageIsLastPage()) {
      // if current page is last page,  render the last pages from the end
      // tslint:disable-next-line: max-line-length
      const lastGroupFirstItemIndex = (this.middlePagesToBeRendered.length - this.maxSize > 0) ? (this.middlePagesToBeRendered.length - this.maxSize) : 0;
      this.pagesCurrentlyRendered = [...this.middlePagesToBeRendered.slice(lastGroupFirstItemIndex, this.middlePagesToBeRendered.length)];
      return;
    }

    // if its a page in the middle then find which group it belogs to.

    let auxCurrentGroupFirstItemIndex = 0;

    // set auxCurrentGroupLastItemIndex as middlePagesToBeRendered.length OR this.maxSize - 1
    // tslint:disable-next-line: max-line-length
    let auxCurrentGroupLastItemIndex = (this.middlePagesToBeRendered.length >= this.maxSize) ? this.maxSize - 1 : (this.middlePagesToBeRendered.length);

    // loop through middlePagesToBeRendered to find group to which currentPage belongs to.
    do {
      // tslint:disable-next-line: no-increment-decrement
      for (let index = auxCurrentGroupFirstItemIndex; index < auxCurrentGroupLastItemIndex; index++) {
        const element = this.middlePagesToBeRendered[index];
        if (element === this.currentPageNumber) {
          // found current page in group!
          // then render its corresponding group
          // tslint:disable-next-line: max-line-length
          this.pagesCurrentlyRendered = [...this.middlePagesToBeRendered.slice(auxCurrentGroupFirstItemIndex, auxCurrentGroupLastItemIndex + 1)];
          return;
        }

      }

      // did not find currentPage within previous group. Increase pointers and try again

      auxCurrentGroupFirstItemIndex = auxCurrentGroupLastItemIndex - 1;
      auxCurrentGroupLastItemIndex = (auxCurrentGroupLastItemIndex - 1) + this.maxSize - 1;

      // tslint:disable-next-line: max-line-length

      // if we didn't find it, then it's in the last group of pages.
      // We render the last pages from the end to avoid a short last page with less elements than desired.
      // tslint:disable-next-line: max-line-length
      const lastGroupFirstItemIndex = (this.middlePagesToBeRendered.length - this.maxSize > 0) ? (this.middlePagesToBeRendered.length - this.maxSize) : 0;
      this.pagesCurrentlyRendered = [...this.middlePagesToBeRendered.slice(lastGroupFirstItemIndex, this.middlePagesToBeRendered.length)];

    } while (auxCurrentGroupLastItemIndex <= this.middlePagesToBeRendered.length - 1);

  }

  /**
   * Returns ellipsis '...' unless the page number is '2', if it is '2' then it returns '2'.
   * @param page page number to check
   */
  getFirstRenderedItemLabel(page: number): string {
    const ellipsis = '...';
    if (page !== 2) {
      return ellipsis;
    }
    return String(page);

  }

  /**
 * Returns ellipsis '...' unless the page number is the last element of middlePagesToBeRendered.
 * Else returns the last element of middlePagesToBeRendered.
 * @param page page number to check
 */
  getLastRenderedItemLabel(page: number): string {
    const ellipsis = '...';
    if (page !== this.middlePagesToBeRendered[this.middlePagesToBeRendered.length - 1]) {
      return ellipsis;
    }
    return String(page);

  }

  /**
   * Checks whether should show ellipsis or the number in the first and last element of the middlePagesToBeRendered array.
   * @param page page to check
   * @param index current position in button loop
   */
  shouldDisplayEllipsis(page: number, index: number): string {
    if (index === 0) {
      return this.getFirstRenderedItemLabel(page);
    }

    if (index === this.pagesCurrentlyRendered.length - 1) {
      return this.getLastRenderedItemLabel(page);
    }
    return String(page);

  }
}
