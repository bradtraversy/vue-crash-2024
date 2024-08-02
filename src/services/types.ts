export type APIResponse<T> = {
  success: Boolean;
  content: T;
  status?: number;
};
