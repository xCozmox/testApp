/* tslint:disable max-line-length */
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Observable, of } from 'rxjs';
import { HttpHeaders, HttpResponse } from '@angular/common/http';

import { TestAppTestModule } from '../../../test.module';
import { SurveyComponent } from 'app/entities/survey/survey.component';
import { SurveyService } from 'app/entities/survey/survey.service';
import { Survey } from 'app/shared/model/survey.model';

describe('Component Tests', () => {
    describe('Survey Management Component', () => {
        let comp: SurveyComponent;
        let fixture: ComponentFixture<SurveyComponent>;
        let service: SurveyService;

        beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [TestAppTestModule],
                declarations: [SurveyComponent],
                providers: []
            })
                .overrideTemplate(SurveyComponent, '')
                .compileComponents();

            fixture = TestBed.createComponent(SurveyComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(SurveyService);
        });

        it('Should call load all on init', () => {
            // GIVEN
            const headers = new HttpHeaders().append('link', 'link;link');
            spyOn(service, 'query').and.returnValue(
                of(
                    new HttpResponse({
                        body: [new Survey(123)],
                        headers
                    })
                )
            );

            // WHEN
            comp.ngOnInit();

            // THEN
            expect(service.query).toHaveBeenCalled();
            expect(comp.surveys[0]).toEqual(jasmine.objectContaining({ id: 123 }));
        });
    });
});
