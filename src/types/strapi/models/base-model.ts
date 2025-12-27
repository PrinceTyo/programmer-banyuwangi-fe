export interface BaseModel {
  id: number;
  documentId: string;
  createdAt: string;
  updatedAt: string | null;
  publishedAt: string | null;
}
