/**
 * URL des apis
 */
import { environment } from "@env/environment";

const baseUrl = environment.baseUrl;

export const apiUrl = {
  auth: {
    login: baseUrl + '/api/login',
    forgot: baseUrl + '/api/v1/auth/forgot',
  },
  user: {
    getUsers: baseUrl + '/api/v1/',
    addUser: baseUrl + '/users/save'
  },
  crud: baseUrl+'/employees',
};
