import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

import { SERVER_API_URL } from 'app/app.constants';
import { createRequestOption } from 'app/shared';
import { ISurvey } from 'app/shared/model/survey.model';

type EntityResponseType = HttpResponse<ISurvey>;
type EntityArrayResponseType = HttpResponse<ISurvey[]>;

@Injectable({ providedIn: 'root' })
export class SurveyService {
    public resourceUrl = SERVER_API_URL + 'api/surveys';

    constructor(protected http: HttpClient) {}

    create(survey: ISurvey): Observable<EntityResponseType> {
        return this.http.post<ISurvey>(this.resourceUrl, survey, { observe: 'response' });
    }

    update(survey: ISurvey): Observable<EntityResponseType> {
        return this.http.put<ISurvey>(this.resourceUrl, survey, { observe: 'response' });
    }

    find(id: number): Observable<EntityResponseType> {
        return this.http.get<ISurvey>(`${this.resourceUrl}/${id}`, { observe: 'response' });
    }

    query(req?: any): Observable<EntityArrayResponseType> {
        const options = createRequestOption(req);
        return this.http.get<ISurvey[]>(this.resourceUrl, { params: options, observe: 'response' });
    }

    delete(id: number): Observable<HttpResponse<any>> {
        return this.http.delete<any>(`${this.resourceUrl}/${id}`, { observe: 'response' });
    }
}
