export interface RuleViolationException {
  type: 'RULE_VIOLATION';
  code?: number;
  additionalInfo?: Record<string, string>;
}