import { TestBed } from '@angular/core/testing';
import { CvService } from './cv.service';
describe('CvService', () => {
    let service;
    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(CvService);
    });
    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=cv.service.spec.js.map