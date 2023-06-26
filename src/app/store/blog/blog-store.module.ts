import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";
import { blogFeature, blogFeatureKey } from "./blog.reducer";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature(blogFeatureKey, blogFeature.reducer),
    EffectsModule.forFeature([ HomeEffects ])
  ]
})
export class BlogStoreModule { }
@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})

