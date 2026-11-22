import { Component, inject } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { RuleViolationExceptionService } from '../../core/errors/rule-violation-exception.service';

@Component({
  imports: [TranslatePipe],
  standalone: true,
  selector: 'app-error-dialog-component',
  styleUrl: './error-dialog-component.css',
  templateUrl: './error-dialog-component.html',
})
export class ErrorDialogComponent {
  private readonly ruleViolationExceptionService: RuleViolationExceptionService = inject(RuleViolationExceptionService);
  protected readonly error = this.ruleViolationExceptionService.error;

  protected getTranslationKey(code?: number): string {
    return `error.${code ?? 'unknown'}`;
  }  
}
