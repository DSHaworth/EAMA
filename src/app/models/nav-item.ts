//https://stackblitz.com/edit/angular-side-nav-dynamic-expansive-menu

export interface NavItem {
  displayName: string;
  disabled?: boolean;
  iconName: string;
  route?: string;
  children?: NavItem[];
}