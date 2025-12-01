import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class RolesService {

  roles: string[];

  currentRole: string;

  constructor(){
    this.roles  = ["user", "admin"];
    this.currentRole = "user";  // por defecto
  }

  setRole(role: string) {
    this.currentRole = role;
  }

  getRole(): string {
    return this.currentRole;
  }

  getAllRoles(): string[] {
    return this.roles;
  }
}
