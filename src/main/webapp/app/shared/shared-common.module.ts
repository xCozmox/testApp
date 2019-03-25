import { NgModule } from '@angular/core';

import { TestAppSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [TestAppSharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [TestAppSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class TestAppSharedCommonModule {}
