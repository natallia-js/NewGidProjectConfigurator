export interface TreeNode {
  title: string;
  additionalInfo: any;
  children?: TreeNode[];
}

export interface Station {
  id: Number;
  title: String;
  code: string;
}

export interface AppState {
  sideMenuItems: TreeNode[];
}
