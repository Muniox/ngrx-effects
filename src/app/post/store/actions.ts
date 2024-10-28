import { createActionGroup, emptyProps, props} from '@ngrx/store';
import { PostInterface } from '../types/posts.interface';

// export const getPosts = createAction('[Posts] Get Posts');
//
// export const getPostsSuccess = createAction(
//   '[Posts] Get Posts Success',
//   props<{ posts: PostInterface[] }>()
// );
//
// export const getPostsFailure = createAction(
//   '[Posts] Get Posts Failure',
//   props<{ error: string }>()
// );

export const PostsActions = createActionGroup({
  source: '[Posts]',
  events: {
    'Get Posts': emptyProps(),
    'Get Posts Success': props<{ posts: PostInterface[] }>(),
    'Get Posts Failure': props<{ error: string }>(),
  }
})
