interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Owner'],
  customerRoles: ['Customer'],
  tenantRoles: ['Owner', 'HR Manager', 'Employee', 'Payroll Officer', 'Team Lead'],
  tenantName: 'Company',
  applicationName: 'HR Management System',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
};
