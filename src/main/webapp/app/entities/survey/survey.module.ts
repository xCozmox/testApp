import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { TestAppSharedModule } from 'app/shared';
import {
    SurveyComponent,
    SurveyDetailComponent,
    SurveyUpdateComponent,
    SurveyDeletePopupComponent,
    SurveyDeleteDialogComponent,
    surveyRoute,
    surveyPopupRoute
} from './';
import { SurveyJsComponent } from 'app/shared/survey/surveyjs.component';
import { SurveyJsEditorComponent } from 'app/shared/survey/surveyjs.editor.component';

const ENTITY_STATES = [...surveyRoute, ...surveyPopupRoute];

@NgModule({
    imports: [TestAppSharedModule, RouterModule.forChild(ENTITY_STATES)],
    declarations: [
        SurveyComponent,
        SurveyDetailComponent,
        SurveyUpdateComponent,
        SurveyDeleteDialogComponent,
        SurveyDeletePopupComponent,
        SurveyJsComponent
    ],
    entryComponents: [SurveyComponent, SurveyUpdateComponent, SurveyDeleteDialogComponent, SurveyDeletePopupComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TestAppSurveyModule {}
