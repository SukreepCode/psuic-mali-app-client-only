import http from '../../../services/config';

const prefix = "teachers";

export interface Teacher {
  id: string;
  name: string;
  email: string;
}

class TeacherService {
  getAll() {
    return http.get<Teacher[]>(prefix);
  }

  get(id: string) {
    return http.get<Teacher>(`/${prefix}/${id}`);
  }

  add(data: Teacher) {
    return http.post<Teacher>(prefix, data);
  }

  update(id: string, data: Teacher) {
    return http.put<Teacher>(`/${prefix}/${id}`, data);
  }

  delete(id: string) {
    return http.delete<Teacher>(`/${prefix}/${id}`);
  }

}

export default new TeacherService();