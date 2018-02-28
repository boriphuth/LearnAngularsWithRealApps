import { TestBed, inject } from '@angular/core/testing';
import { AppModule } from '../app.module';
import { MathService } from './math.service';

describe('MathService', () => {

  let service: MathService;
  let spy: any;

  beforeEach(() => {
    service = new MathService();
    TestBed.configureTestingModule({
      providers: [MathService]
    });
  });

  it('should be created', inject([MathService], (service: MathService) => {
    expect(service).toBeTruthy();
  }));

  it('should be addition', inject([MathService], (service: MathService) => {
    spy = spyOn(service,'addition').and.returnValue(12);
    //6yexpect(spy).toHaveBeenCalledTimes(1);
    expect(service.addition(10,2)).toEqual(12);
  }));

  it('should be subtraction', inject([MathService], (service: MathService) => {
    spy = spyOn(service,'subtraction').and.returnValue(8);
    expect(service.subtraction(10,2)).toEqual(8);
  }));

  it('should be multiply', inject([MathService], (service: MathService) => {
    spy = spyOn(service,'multiply').and.returnValue(20);
    expect(service.multiply(10,2)).toEqual(20);
  }));
});
