export interface Skin {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  tags: string[];
  downloads: number;
  likes: number;
  isAiGenerated?: boolean;
}

export interface GeneratorState {
  prompt: string;
  isGenerating: boolean;
  error: string | null;
}
