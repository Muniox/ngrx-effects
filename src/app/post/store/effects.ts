import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { PostsActions } from './actions';
import { catchError, map, mergeMap, of } from 'rxjs';
import { PostsService } from '../services/posts.service';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable()
export class PostsEffects {
  getPosts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PostsActions.getPosts),
      mergeMap(() => {
        return this.postService.getPosts().pipe(
          map((posts) => PostsActions.getPostsSuccess({ posts: posts })),
          catchError((error: HttpErrorResponse) =>
            of(PostsActions.getPostsFailure({ error: error.message }))
          )
        );
      })
    )
  );

  constructor(private actions$: Actions, private postService: PostsService) {}
}
