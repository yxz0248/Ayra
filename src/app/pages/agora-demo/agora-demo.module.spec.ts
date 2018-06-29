import { AgoraDemoModule } from './agora-demo.module';

describe('AgoraDemoModule', () => {
  let agoraDemoModule: AgoraDemoModule;

  beforeEach(() => {
    agoraDemoModule = new AgoraDemoModule();
  });

  it('should create an instance', () => {
    expect(agoraDemoModule).toBeTruthy();
  });
});
