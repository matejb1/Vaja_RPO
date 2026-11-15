import { Component, inject, OnInit } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { DemoResourceService } from '../../../api/services/demoResource.service';
import { DemoDTO } from '../../../api/models';

@Component({
  selector: 'app-ecommerce',
  imports: [TranslatePipe],
  templateUrl: './ecommerce.component.html',
})
export class EcommerceComponent implements OnInit {
  
  private demoResourceService: DemoResourceService = inject(DemoResourceService);
  item: DemoDTO | null = null;

  ngOnInit(): void {
    this.demoResourceService.getDemoFromDBDTO(1).subscribe(data => this.item = data);
  }

}
