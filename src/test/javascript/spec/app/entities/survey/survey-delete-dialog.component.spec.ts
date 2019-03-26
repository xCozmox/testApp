/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, inject, fakeAsync, tick } from '@angular/core/testing';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable, of } from 'rxjs';
import { JhiEventManager } from 'ng-jhipster';

import { TestAppTestModule } from '../../../test.module';
import { SurveyDeleteDialogComponent } from 'app/entities/survey/survey-delete-dialog.component';
import { SurveyService } from 'app/entities/survey/survey.service';

describe('Component Tests', () => {
    describe('Survey Management Delete Component', () => {
        let comp: SurveyDeleteDialogComponent;
        let fixture: ComponentFixture<SurveyDeleteDialogComponent>;
        let service: SurveyService;
        let mockEventManager: any;
        let mockActiveModal: any;

        beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [TestAppTestModule],
                declarations: [SurveyDeleteDialogComponent]
            })
                .overrideTemplate(SurveyDeleteDialogComponent, '')
                .compileComponents();
            fixture = TestBed.createComponent(SurveyDeleteDialogComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(SurveyService);
            mockEventManager = fixture.debugElement.injector.get(JhiEventManager);
            mockActiveModal = fixture.debugElement.injector.get(NgbActiveModal);
        });

        describe('confirmDelete', () => {
            it('Should call delete service on confirmDelete', inject(
                [],
                fakeAsync(() => {
                    // GIVEN
                    spyOn(service, 'delete').and.returnValue(of({}));

                    // WHEN
                    comp.confirmDelete(123);
                    tick();

                    // THEN
                    expect(service.delete).toHaveBeenCalledWith(123);
                    expect(mockActiveModal.dismissSpy).toHaveBeenCalled();
                    expect(mockEventManager.broadcastSpy).toHaveBeenCalled();
                })
            ));
        });
    });
});
