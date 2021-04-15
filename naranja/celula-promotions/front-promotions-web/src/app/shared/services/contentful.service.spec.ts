// import { of } from 'rxjs';
// import { ContentfulService, ContentTypeContentResolver } from './contentful.service';
//
// describe('ContentfulService', () => {
//   let httpClientSpy: { get: jasmine.Spy };
//   let contentfulService: ContentfulService;
//
//   beforeEach(() => {
//
//     httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
//     contentfulService = new ContentfulService(<any>httpClientSpy);
//   });
//
//   it('should be created', () => {
//     expect(contentfulService).toBeTruthy();
//   });
//
//   it('getPage should call HttpClient once', () => {
//     const emptyResponse = {};
//
//     httpClientSpy.get.and.returnValue(of(emptyResponse));
//
//     contentfulService.getPage('1').then(
//       response => expect(response).toEqual(emptyResponse),
//       fail,
//     );
//     expect(httpClientSpy.get.calls.count()).toBe(1, 'one call');
//   });
//
//   it('getEntry should call HttpClient once', () => {
//     const emptyResponse = {};
//
//     httpClientSpy.get.and.returnValue(of(emptyResponse));
//
//     contentfulService.getEntry('1').then(
//       response => expect(response).toEqual(emptyResponse),
//       fail,
//     );
//     expect(httpClientSpy.get.calls.count()).toBe(1, 'one call');
//   });
//
//   it('getContentTypes should call HttpClient once', () => {
//     const emptyResponse = {};
//
//     httpClientSpy.get.and.returnValue(of(emptyResponse));
//
//     contentfulService.getContentTypes('1').then(
//       response => expect(response).toEqual(emptyResponse),
//       fail,
//     );
//     expect(httpClientSpy.get.calls.count()).toBe(1, 'one call');
//   });
//
//   it('getFooter should call HttpClient once', () => {
//     const emptyResponse = {};
//
//     httpClientSpy.get.and.returnValue(of(emptyResponse));
//
//     contentfulService.getFooter().then(
//       response => expect(response).toEqual(emptyResponse),
//       fail,
//     );
//     expect(httpClientSpy.get.calls.count()).toBe(1, 'one call');
//   });
//
//   it('getSubcategories should call HttpClient once', () => {
//     const emptyResponse = {};
//
//     httpClientSpy.get.and.returnValue(of(emptyResponse));
//
//     contentfulService.getSubcategories().then(
//       response => expect(response).toEqual(emptyResponse),
//       fail,
//     );
//     expect(httpClientSpy.get.calls.count()).toBe(1, 'one call');
//   });
//
//   it('getFaqSearch should call HttpClient once', () => {
//     const emptyResponse = {};
//
//     httpClientSpy.get.and.returnValue(of(emptyResponse));
//
//     contentfulService.getFaqSearch().then(
//       response => expect(response).toEqual(emptyResponse),
//       fail,
//     );
//     expect(httpClientSpy.get.calls.count()).toBe(1, 'one call');
//   });
//
//   it('getFaqSearch should call HttpClient once - term = null', () => {
//     const emptyResponse = {};
//
//     httpClientSpy.get.and.returnValue(of(emptyResponse));
//
//     contentfulService.getFaqSearch(null).then(
//       response => expect(response).toEqual(emptyResponse),
//       fail,
//     );
//     expect(httpClientSpy.get.calls.count()).toBe(1, 'one call');
//   });
//
//   it('getFaqTypes should call HttpClient once', () => {
//     const emptyResponse = {};
//
//     httpClientSpy.get.and.returnValue(of(emptyResponse));
//
//     contentfulService.getFaqTypes().then(
//       response => expect(response).toEqual(emptyResponse),
//       fail,
//     );
//     expect(httpClientSpy.get.calls.count()).toBe(1, 'one call');
//   });
// });
//
// describe('ContentTypeContentResolver', () => {
//   let httpClientSpy: { get: jasmine.Spy };
//   let contentTypeContentResolver: ContentTypeContentResolver;
//
//   beforeEach(() => {
//
//     httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
//     const contentfulService = new ContentfulService(<any>httpClientSpy);
//     contentTypeContentResolver = new ContentTypeContentResolver(contentfulService);
//   });
//
//   it('should be created', () => {
//     expect(contentTypeContentResolver).toBeTruthy();
//   });
//
//   it('resolveshould call getContentTypes()', () => {
//     const spy =  spyOn(ContentfulService.prototype, 'getContentTypes');
//     const route = jasmine.createSpyObj('Route', ['']);
//     route.routeConfig = {
//       path: 'test',
//     };
//
//     route.data = {
//       contentful: {
//         name: 'test',
//       },
//     };
//     /*route.params = {
//       val: '1234',
//     };*/
//     contentTypeContentResolver.resolve(route, null);
//
//     expect(spy).toHaveBeenCalled();
//   });
//
// });
