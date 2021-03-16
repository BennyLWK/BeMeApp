import {action, observable} from 'mobx';

class AuthStore {
  @observable loginType = -1;
  @observable userName = '';
  @observable email = '';
  @observable phoneCountryCode = '';
  @observable phoneNumber = '';
  @observable userContent = {};

  //   @action
  //   createUser() {
  //     return service.guest.create();
  //   }
}
const authStore = new AuthStore();
export default authStore;
