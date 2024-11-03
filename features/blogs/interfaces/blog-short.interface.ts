export interface BlogShort {
  id: string;
  title: string;
  thumbnail: string;
  summary: string;
  categoryIds: string[];
  tags: string;
  createdAt: number;
  updatedAt: number;
  createdBy: string;
  updatedBy: string;
}
