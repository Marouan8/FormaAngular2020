import { TestBed } from '@angular/core/testing';
import { PremierService } from './premier.service';
describe('PremierService', () => {
    let service;
    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(PremierService);
    });
    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=premier.service.spec.js.map