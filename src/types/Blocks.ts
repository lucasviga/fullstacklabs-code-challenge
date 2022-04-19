export interface BlocksData {
  id: string,
  attributes: {
    data: string;
  }
}

export interface Blocks {
  loading: boolean;
  error: boolean;
  data: BlocksData[]
}
