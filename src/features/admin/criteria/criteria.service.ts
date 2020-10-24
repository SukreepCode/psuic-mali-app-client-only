import http from '../../../services/config';

const prefix = "criteria";

export class Criteria {
  id: string = "";
  title: string = "";
  ratio: number = 0;
  type: "dm1" | "dm2" = "dm1";
  amount: number = 0;
}

class CriteriaService {
  getAll() {
    return http.get<Criteria[]>(prefix);
  }

  get(id: string) {
    return http.get<Criteria>(`/${prefix}/${id}`);
  }

  add(data: Criteria) {
    return http.post<Criteria>(prefix, data);
  }

  update(id: string, data: Criteria) {
    return http.put<Criteria>(`/${prefix}/${id}`, data);
  }

  delete(id: string) {
    return http.delete<Criteria>(`/${prefix}/${id}`);
  }

}

export default new CriteriaService();