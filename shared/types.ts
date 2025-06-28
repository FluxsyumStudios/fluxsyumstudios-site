export interface PortfolioItem {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  tags: string[];
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface PhilosophyItem {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}
