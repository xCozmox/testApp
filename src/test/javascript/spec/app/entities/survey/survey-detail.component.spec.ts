/* tslint:disable max-line-length */
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

import { TestAppTestModule } from '../../../test.module';
import { SurveyDetailComponent } from 'app/entities/survey/survey-detail.component';
import { Survey } from 'app/shared/model/survey.model';

describe('Component Tests', () => {
    describe('Survey Management Detail Component', () => {
        let comp: SurveyDetailComponent;
        let fixture: ComponentFixture<SurveyDetailComponent>;
        const route = ({ data: of({ survey: new Survey(123) }) } as any) as ActivatedRoute;

        beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [TestAppTestModule],
                declarations: [SurveyDetailComponent],
                providers: [{ provide: ActivatedRoute, useValue: route }]
            })
                .overrideTemplate(SurveyDetailComponent, '')
                .compileComponents();
            fixture = TestBed.createComponent(SurveyDetailComponent);
            comp = fixture.componentInstance;
        });

        describe('OnInit', () => {
            it('Should call load all on init', () => {
                // GIVEN

                // WHEN
                comp.ngOnInit();

                // THEN
                expect(comp.survey).toEqual(jasmine.objectContaining({ id: 123 }));
            });
        });
    });
});
