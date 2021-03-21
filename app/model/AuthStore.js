import {action, observable} from 'mobx';

class AuthStore {
  @observable loginType = -1;
  @observable authToken = '';
  @observable userName = '';
  @observable email = '';
  @observable phoneCountryCode = '';
  @observable phoneNumber = '';
  @observable userContent = {};
  @observable onMainScreen = false;

  //   @action
  //   createUser() {
  //     return service.guest.create();
  //   }
}
const authStore = new AuthStore();
export default authStore;
