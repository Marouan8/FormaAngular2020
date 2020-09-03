import { async, TestBed } from '@angular/core/testing';
import { RouterSimulatorComponent } from './router-simulator.component';
describe('RouterSimulatorComponent', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [RouterSimulatorComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(RouterSimulatorComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=router-simulator.component.spec.js.map