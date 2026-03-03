export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  longDescription: string;
  image: string;
  imageFit?: 'cover' | 'contain';
  tags: string[];
  links: {
    github?: string;
    demo?: string;
  };
  stats: {
    label: string;
    value: string;
  }[];
}

export interface Achievement {
  id: string;
  title: string;
  date: string;
  description: string;
  icon: string;
}

export interface Skill {
  name: string;
  level: number;
  category: 'language' | 'web_mobile' | 'database' | 'tool_platform' | 'core_area' | 'other';
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  date: string;
  image: string;
  link: string;
  description: string;
}
