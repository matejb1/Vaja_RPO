import { CommonModule } from '@angular/common';
import {
  Component,
} from '@angular/core';
import { PageBreadcrumbComponent } from '../../shared/components/common/page-breadcrumb/page-breadcrumb.component';


@Component({
  selector: 'app-calendar',
  imports: [
    CommonModule,
    PageBreadcrumbComponent,
  ],
  templateUrl: './calendar.component.html',
  styles: ``,
})
export class CalendarComponent {

}
