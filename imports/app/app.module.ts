import { NgModule, ErrorHandler } from '@angular/core';
import { MyApp } from './app.component';
import { BrowserModule } from '@angular/platform-browser';

class MyErrorHandler implements ErrorHandler {
    handleError(error) {
        // do something with the exception
    }
}

@NgModule({
    imports: [
        BrowserModule
    ],
    declarations: [
        MyApp
    ],
    bootstrap: [
        MyApp
    ],
    entryComponents: [
        MyApp
    ],
    providers: [
        { provide: ErrorHandler, useClass: MyErrorHandler}
    ]
})
export class AppModule {}