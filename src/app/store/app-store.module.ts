import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { AppEffects } from './app/app.effects';
import * as fromBlog from './blog/blog.reducer';
import { BlogEffects } from './blog/blog.effects';
import * as fromApp from './app/app.reducer';
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { environment } from "../../environments/environment";



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forRoot(fromApp.reducers, {}),
    StoreDevtoolsModule.instrument(({maxAge: 25, logOnly: environment.production})),
    EffectsModule.forRoot([]),
    StoreModule.forFeature(fromBlog.blogFeatureKey, fromBlog.reducer),
    EffectsModule.forFeature([BlogEffects]),
  ]
})
export class AppStoreModule { }

