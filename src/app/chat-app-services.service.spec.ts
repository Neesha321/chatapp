import { TestBed, inject } from '@angular/core/testing';

import { ChatAppServicesService } from './chat-app-services.service';

describe('ChatAppServicesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ChatAppServicesService]
    });
  });

  it('should be created', inject([ChatAppServicesService], (service: ChatAppServicesService) => {
    expect(service).toBeTruthy();
  }));
});
