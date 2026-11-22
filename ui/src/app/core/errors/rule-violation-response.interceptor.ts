import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { RuleViolationExceptionService } from './rule-violation-exception.service';
import { inject } from '@angular/core';
import { catchError, throwError } from 'rxjs';

export const RuleViolationInterceptor: HttpInterceptorFn = (req, next) => {
  const service = inject(RuleViolationExceptionService);

  return next(req).pipe(
    catchError((error: HttpErrorResponse) => {
      if (error.status === 422) {
        service.show(error.error);
      }

      return throwError(() => error);
    })
  );
};
