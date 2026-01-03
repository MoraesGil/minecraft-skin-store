import { Skin } from "./types";

export const INITIAL_SKINS: Skin[] = [
  {
    id: '1',
    name: 'Guerreiro Esmeralda',
    description: 'Um cavaleiro lendário forjado nas profundezas das minas de esmeralda. Protege os aldeões dos zumbis noturnos.',
    imageUrl: 'https://visage.surgeplay.com/full/512/Emerald', 
    tags: ['Guerreiro', 'Verde', 'PvP'],
    downloads: 1250,
    likes: 340,
    isAiGenerated: false
  },
  {
    id: '2',
    name: 'Cyber Creeper',
    description: 'Uma fusão tecnológica de um creeper com partes robóticas avançadas. Explode com estilo.',
    imageUrl: 'https://visage.surgeplay.com/full/512/Creeper',
    tags: ['Futurista', 'Creeper', 'Robô'],
    downloads: 890,
    likes: 210,
    isAiGenerated: false
  },
  {
    id: '3',
    name: 'Rei do Nether',
    description: 'Governante das fortalezas de fogo, vestindo armadura de netherite encantada.',
    imageUrl: 'https://visage.surgeplay.com/full/512/Technoblade',
    tags: ['Nether', 'Rei', 'Fogo'],
    downloads: 2100,
    likes: 567,
    isAiGenerated: false
  },
  {
    id: '4',
    name: 'Explorador Ártico',
    description: 'Preparado para os biomas mais frios com roupas de pele grossa e óculos de neve.',
    imageUrl: 'https://visage.surgeplay.com/full/512/Yeti',
    tags: ['Neve', 'Inverno', 'Sobrevivência'],
    downloads: 450,
    likes: 120,
    isAiGenerated: false
  },
    {
    id: '5',
    name: 'Mago do Void',
    description: 'Um feiticeiro misterioso que domina as artes sombrias do fim.',
    imageUrl: 'https://visage.surgeplay.com/full/512/Ender',
    tags: ['Mago', 'Roxo', 'End'],
    downloads: 3200,
    likes: 890,
    isAiGenerated: false
  },
  {
    id: '6',
    name: 'Arqueiro da Floresta',
    description: 'Mestre da camuflagem, veste folhas e madeira para se esconder nas árvores.',
    imageUrl: 'https://visage.surgeplay.com/full/512/Link',
    tags: ['Floresta', 'Arqueiro', 'Camuflagem'],
    downloads: 670,
    likes: 155,
    isAiGenerated: false
  }
];

export const MOCK_LOADING_MESSAGES = [
    "Minerando diamantes...",
    "Construindo o portal do Nether...",
    "Encantando a armadura...",
    "Fugindo de Creepers...",
    "Gerando chunks...",
    "Negociando com Villagers..."
];
