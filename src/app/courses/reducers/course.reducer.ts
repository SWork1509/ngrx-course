import { createEntityAdapter, EntityState } from "@ngrx/entity";
import { createReducer, on } from "@ngrx/store";
import { CourseActions } from "../action-types";
import { compareCourses, ICourse } from "../model/course";

/**
     * If we make the courses as ICourses<Array> where each course has its unique id, then think if we need to find a single course from an array we need to loop over an array bit time consuming isn't it..Hence, Entities
*/

export interface ICourseState extends EntityState<ICourse> {
    allCoursesLoaded: boolean
}

export const adaptar = createEntityAdapter<ICourse>(
    {
        sortComparer: compareCourses
    }
);

const INITIAL_COURSES_STATE = adaptar.getInitialState({
    allCoursesLoaded: false
});

export const coursesReducer = createReducer(
    INITIAL_COURSES_STATE,
    on(CourseActions.allCoursesLoaded, (state, action) => adaptar.setAll(action.courses,
        {
            ...state, allCoursesLoaded: true
        })
    ),
    on(CourseActions.courseUpdated, (state, action) =>
        adaptar.updateOne(action.update, state)
    )
)

export const { selectAll } = adaptar.getSelectors();





