import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import * as fromApp from './app/app.reducer';
import { EffectsModule } from '@ngrx/effects';
import { AppEffects } from './app/app.effects';
import * as fromBlog from './blog/blog.reducer';
import { BlogEffects } from './blog/blog.effects';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forRoot({}, {}),
    EffectsModule.forRoot([]),
    StoreModule.forFeature(fromBlog.blogFeatureKey, fromBlog.reducer),
    EffectsModule.forFeature([BlogEffects]),
    // EffectsModule.forRoot([]),
    // StoreModule.forFeature(fromApp.appFeatureKey, fromApp.reducer),
    // EffectsModule.forFeature([AppEffects])
  ]
})
export class AppStoreModule { }
