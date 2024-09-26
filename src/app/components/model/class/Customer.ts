export class Customer {
  id: number;
  name: string;
  username: string;
  email?: string;
  address?: string;

  constructor() {
    this.id = 0;
    this.name = '';
    this.username = '';
  }
}

export class Department {
  departmentId: number;
  departmentName: string;
  departmentLogo: string;

  constructor() {
    this.departmentId = 0;
    this.departmentName = '';
    this.departmentLogo = '';
  }
}

export interface IDepartmentList {
  departmentId: number;
  departmentName: string;
  departmentLogo: string;
}
