import type { Category } from './types';

// 新增分类
export const newCategories: Category[] = [
  {
    id: 'smart-wearables',
    slug: 'smart-wearables',
    name: {
      en: 'Smart Wearables',
      de: 'Smart Wearables',
      fr: 'Wearables Connectés',
    },
    description: {
      en: 'Smartwatches, fitness trackers, and wearable technology reviews',
      de: 'Smartwatches, Fitness-Tracker und Wearable-Technologie Tests',
      fr: 'Montres connectées, trackers fitness et revues technologiques portables',
    },
  },
  {
    id: 'smart-security',
    slug: 'smart-security',
    name: {
      en: 'Smart Security',
      de: 'Smart Security',
      fr: 'Sécurité Connectée',
    },
    description: {
      en: 'Smart security cameras, video doorbells, and smart locks',
      de: 'Smarte Sicherheitskameras, Video-Türsprechanlagen und Smart Locks',
      fr: 'Caméras de sécurité connectées, sonnettes vidéo et serrures intelligentes',
    },
  },
  {
    id: 'power-banks',
    slug: 'power-banks',
    name: {
      en: 'Power Banks',
      de: 'Powerbanks',
      fr: 'Batteries Externes',
    },
    description: {
      en: 'Portable chargers, power banks, and charging accessories',
      de: 'Tragbare Ladegeräte, Powerbanks und Ladezubehör',
      fr: 'Chargeurs portables, batteries externes et accessoires de chargement',
    },
  },
  {
    id: 'audio',
    slug: 'audio',
    name: {
      en: 'Audio',
      de: 'Audio',
      fr: 'Audio',
    },
    description: {
      en: 'Wireless earbuds, headphones, and audio equipment reviews',
      de: 'Drahtlose Kopfhörer und Audiogeräte Tests',
      fr: 'Écouteurs sans fil, casques et équipements audio',
    },
  },
];
