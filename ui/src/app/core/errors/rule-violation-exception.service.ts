import { Service, signal } from '@angular/core';
import { RuleViolationException } from './rule-violation-exception.model';

@Service()
export class RuleViolationExceptionService {
  readonly error = signal<RuleViolationException | null>(null);

  show(error: RuleViolationException): void {
    this.error.set(error);

    setTimeout(() => { 
        this.error.set(null); 
    }, 10_000);
  }

}
