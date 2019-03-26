import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ISurvey } from 'app/shared/model/survey.model';

@Component({
    selector: 'jhi-survey-detail',
    templateUrl: './survey-detail.component.html'
})
export class SurveyDetailComponent implements OnInit {
    survey: ISurvey;

    constructor(protected activatedRoute: ActivatedRoute) {}

    ngOnInit() {
        this.activatedRoute.data.subscribe(({ survey }) => {
            this.survey = survey;
        });
    }

    previousState() {
        window.history.back();
    }
}
