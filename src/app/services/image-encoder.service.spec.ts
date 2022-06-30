import { TestBed } from '@angular/core/testing';

import { ImageEncoderService } from './image-encoder.service';

describe('ImageEncoderService', () => {
  let service: ImageEncoderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ImageEncoderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
