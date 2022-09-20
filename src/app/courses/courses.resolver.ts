import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { select, Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { filter, finalize, first, tap } from "rxjs/operators";
import { loadAllCourses } from "./course.action";
import { areCoursesLoaded } from "./courses.selector";

@Injectable()
export class CoursesResolver implements Resolve<any> {

    loading = false;

    constructor(private store: Store) { }

    resolve(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): any | Observable<any> | Promise<any> {


        return this.store.pipe(
            select(areCoursesLoaded),
            tap(coursesLoaded => {
                if (!this.loading && !coursesLoaded) {
                    this.loading = true;
                    this.store.dispatch(loadAllCourses())
                }

            }),
            filter(coursesLoaded => coursesLoaded),
            first(),
            finalize(() => this.loading = false)
        );

    }

}