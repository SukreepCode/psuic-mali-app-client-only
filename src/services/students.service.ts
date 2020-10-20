// import http from "";
//import axios from "axios";
import http from './config';
import { Student } from './types';

class StudentService {
  getAll() {
    return http.get<Student[]>(`students`);
  }

  //   get(id) {
  //     return http.get(`/tutorials/${id}`);
  //   }

  add(data: Student) {
    return http.post<Student>(`students`, data);
  }

  //   update(id, data) {
  //     return http.put(`/tutorials/${id}`, data);
  //   }

  //   delete(id) {
  //     return http.delete(`/tutorials/${id}`);
  //   }

  //   deleteAll() {
  //     return http.delete(`/tutorials`);
  //   }

  //   findByTitle(title) {
  //     return http.get(`/tutorials?title=${title}`);
  //   }
}

export default new StudentService();