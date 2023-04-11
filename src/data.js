// remix icons
import {
  RiYoutubeFill,
  RiInstagramFill,
  RiGithubFill,
  RiLinkedinFill,
} from 'react-icons/ri';

// services icons
import Service1Icon from './assets/img/services/uiux_design.svg';
import Service2Icon from './assets/img/services/web_design.svg';
import Service3Icon from './assets/img/services/development.svg';

// brands images
import Brand1Image from './assets/img/brands/puma.png';
import Brand2Image from './assets/img/brands/f.png';
import Brand3Image from './assets/img/brands/adidas.png';
import Brand4Image from './assets/img/brands/mdjs.png';
import Brand5Image from './assets/img/brands/hit.png';

// portfolio images
import PortfolioImage1 from './assets/img/portfolio/morocco.jpg';
import PortfolioImage2 from './assets/img/portfolio/wins.jpg';
import PortfolioImage3 from './assets/img/portfolio/bono.jpeg';
import PortfolioImage4 from './assets/img/portfolio/iconic.jpg';
import PortfolioImage5 from './assets/img/portfolio/celebration.jpg';

// nav
export const nav = [
  {
    name: 'home',
  },
  {
    name: 'about',
  },
  {
    name: 'réalisations',
  },
  {
    name: 'sponsors',
  },
  {
    name: 'catalogue',
  },
  {
    name: 'appréciation',
  },
];

// social
export const social = [
  {
    icon: <RiYoutubeFill />,
    href: 'https://www.youtube.com/@federationroyalemarocained3087',
  },
  {
    icon: <RiInstagramFill />,
    href: 'https://www.instagram.com/equipedumaroc/',
  },
  {
    icon: <RiGithubFill />,
    href: 'https://github.com/othmanedendane',
  },
  {
    icon: <RiLinkedinFill />,
    href: 'https://www.linkedin.com/in/othmane-dendane-55a26815b/',
  },
];

// about
export const about = {
  title: 'About Us',
  subtitle:
    "L'équipe nationale marocaine a été fondée en 1955 et est considérée comme l'une des équipes nationales les plus réussies en Afrique, avec plusieurs réalisations au fil des ans. Elle est réputée pour les compétences de ses joueurs, la force de son équipe et son long historique de participation à des tournois internationaux, dont la Coupe du Monde et la Coupe d'Afrique des Nations.",
  image: '',
};

// services
export const services = {
  title: 'Réalisations',
  subtitle:
    "L'équipe nationale marocaine est considérée comme l'une des équipes les plus puissantes en Afrique.",
  skills: [
    {
      icon: Service1Icon,
      name: 'Classement FIFA',
      description:
        "Le Maroc se hissera à la 11e place du classement mondial de la FIFA. Grâce au parcours historique des Lions de l'Atlas en Coupe du monde 2022 au Qatar, le Maroc devra gagner 11 places et réaliser l'avancée la plus importante du classement FIFA des sélections nationales.",
    },
    {
      icon: Service2Icon,
      name: 'Coupe du monde',
      description:
        "Coupe du monde 2022 : Le Maroc a écrit l’histoire et ouvre une nouvelle ère pour le football africain. Pour la première fois de l'histoire, une nation africaine termine dans le top 4 de la Coupe du monde après une demi-finale historique.",
    },
    {
      icon: Service3Icon,
      name: "Coupe d'afrique",
      description:
        "La Coupe d'Afrique des Nations 1967 était la deuxième édition du tournoi de football continental africain, qui s'est déroulée au Kenya. L'équipe nationale du Maroc a remporté la compétition et a réalisé une performance remarquable lors de ce tournoi.",
    },
  ],
};

// contributors
export const contributors = {
  title: 'Sponsors',
  subtitle:
    'Nous sommes ravis de compter sur le généreux soutien de nos sponsors, qui ont contribué de manière significative à ces réalisation.',
  brands: [
    {
      image: Brand1Image,
    },
    {
      image: Brand2Image,
    },
    {
      image: Brand3Image,
    },
    {
      image: Brand4Image,
    },
    {
      image: Brand5Image,
    },
  ],
};

// portfolio
export const portfolio = {
  preTitle: "Joueurs professionnels évoluant dans différentes ligues à travers le monde.",
  title: 'Catalogue.',
  image1: PortfolioImage1,
  image2: PortfolioImage2,
  image3: PortfolioImage3,
  image4: PortfolioImage4,
  image5: PortfolioImage5,
};

// contact
export const contact = {
  title: 'Merci.',
  subtitle:
    "Un entraîneur et son staff qualifié sont chargés de superviser l'entraînement de l'équipe nationale marocaine et de la préparer pour sa participation aux compétitions internationales, représentant ainsi le Royaume du Maroc sur la scène internationale.",
};
