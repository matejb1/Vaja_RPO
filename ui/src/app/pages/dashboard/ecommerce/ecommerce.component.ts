import { Component, inject, OnInit, signal, WritableSignal } from '@angular/core';
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
  item: WritableSignal<DemoDTO | null> = signal<DemoDTO | null>(null);


  ngOnInit(): void {
    this.demoResourceService.getDemoDTO().subscribe(data => this.item.set(data));
  }

}
