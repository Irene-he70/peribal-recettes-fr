export interface Recipe {
  id: string;
  name: string;
  type: 'sweet' | 'savory';
  prepTime: number; // in minutes
  image: string;
  ingredients: { name: string; amount: string }[];
  instructions: string[];
  nutrition: {
    carbs: number; // grams
    protein: number; // grams
    fat: number; // grams
    calories: number;
    fiber: number; // grams
    specialNutrients: string[];
  };
  description: string;
}

export const recipes: Recipe[] = [
  // SWEET RECIPES
  {
    id: 'sweet_01',
    name: 'Fromage blanc à la vanille avec fruits rouges',
    type: 'sweet',
    prepTime: 5,
    image: '/images/sweet_01_vanille_quark.png',
    ingredients: [
      { name: 'Fromage blanc (20% de matière grasse)', amount: '200g' },
      { name: 'Extrait de vanille', amount: '1 c. à c.' },
      { name: 'Myrtilles', amount: '100g' },
      { name: 'Framboises', amount: '80g' },
      { name: 'Amandes (hachées)', amount: '30g' },
      { name: 'Miel', amount: '1 c. à c.' }
    ],
    instructions: [
      'Mettre le fromage blanc dans un bol',
      'Incorporer l’extrait de vanille',
      'Incorporer délicatement les fruits rouges',
      'Garnir avec les amandes hachées et le miel',
      'Servir immédiatement'
    ],
    nutrition: {
      carbs: 18,
      protein: 32,
      fat: 12,
      calories: 310,
      fiber: 4,
      specialNutrients: ['Vitamine C', 'Calcium', 'Probiotiques']
    },
    description: 'Un petit-déjeuner crémeux et fruité riche en protéines'
  },
  {
    id: 'sweet_02',
    name: 'Shake banane-chocolat',
    type: 'sweet',
    prepTime: 5,
    image: '/images/sweet_02_schoko_shake.png',
    ingredients: [
      { name: 'Yaourt grec', amount: '150g' },
      { name: 'Banane', amount: '1 petite' },
      { name: 'Poudre de cacao (non sucrée)', amount: '2 c. à s.' },
      { name: 'Lait d’amande', amount: '200ml' },
      { name: 'Poudre de protéine (vanille)', amount: '1 dose' },
      { name: 'Glaçons', amount: 'une poignée' }
    ],
    instructions: [
      'Mettre tous les ingrédients dans un mixeur',
      'Mixer 30 secondes jusqu’à obtenir une texture crémeuse',
      'Verser dans un verre',
      'Décorer avec une tranche de banane',
      'Boire immédiatement'
    ],
    nutrition: {
      carbs: 22,
      protein: 35,
      fat: 8,
      calories: 320,
      fiber: 3,
      specialNutrients: ['Magnésium', 'Vitamine B12', 'Antioxydants']
    },
    description: 'Un shake protéiné crémeux au chocolat et à la banane'
  },
  {
    id: 'sweet_03',
    name: 'Yaourt aux noix et à la cannelle',
    type: 'sweet',
    prepTime: 5,
    image: '/images/sweet_03_joghurt_walnuss.png',
    ingredients: [
      { name: 'Yaourt grec (0% de matière grasse)', amount: '200g' },
      { name: 'Noix (hachées)', amount: '40g' },
      { name: 'Cannelle', amount: '1/2 c. à c.' },
      { name: 'Pomme (râpée)', amount: '1 petite' },
      { name: 'Miel', amount: '1 c. à c.' }
    ],
    instructions: [
      'Mettre le yaourt dans un bol',
      'Incorporer la pomme râpée',
      'Parsemer les noix dessus',
      'Saupoudrer de cannelle',
      'Ajouter un filet de miel'
    ],
    nutrition: {
      carbs: 16,
      protein: 30,
      fat: 14,
      calories: 310,
      fiber: 3,
      specialNutrients: ['Acides gras oméga-3', 'Calcium', 'Antioxydants']
    },
    description: 'Un petit-déjeuner classique et simple aux noix'
  },
  {
    id: 'sweet_04',
    name: 'Pudding de chia aux framboises',
    type: 'sweet',
    prepTime: 10,
    image: '/images/sweet_04_chia_pudding.png',
    ingredients: [
      { name: 'Lait de coco (entier)', amount: '150ml' },
      { name: 'Lait d’amande', amount: '100ml' },
      { name: 'Graines de chia', amount: '3 c. à s.' },
      { name: 'Framboises (fraîches)', amount: '100g' },
      { name: 'Extrait de vanille', amount: '1/2 c. à c.' },
      { name: 'Stévia', amount: 'selon goût' }
    ],
    instructions: [
      'Mélanger le lait de coco et le lait d’amande',
      'Ajouter les graines de chia',
      'Incorporer l’extrait de vanille et la stévia',
      'Laisser reposer toute la nuit au réfrigérateur',
      'Garnir de framboises et servir'
    ],
    nutrition: {
      carbs: 20,
      protein: 28,
      fat: 16,
      calories: 340,
      fiber: 8,
      specialNutrients: ['Acides gras oméga-3', 'Fibres', 'Calcium']
    },
    description: 'Un pudding préparé la veille, parfait pour l’organisation'
  },
  {
    id: 'sweet_05',
    name: 'Fromage blanc aux pommes et à la cannelle',
    type: 'sweet',
    prepTime: 5,
    image: '/images/sweet_05_huettenkase_apfel.png',
    ingredients: [
      { name: 'Fromage blanc (2% de matière grasse)', amount: '200g' },
      { name: 'Pomme (en dés)', amount: '1 moyenne' },
      { name: 'Cannelle', amount: '1/2 c. à c.' },
      { name: 'Noix (hachées)', amount: '25g' },
      { name: 'Miel', amount: '1 c. à c.' }
    ],
    instructions: [
      'Mettre le fromage blanc dans un bol',
      'Ajouter les dés de pomme',
      'Saupoudrer de cannelle',
      'Parsemer les noix dessus',
      'Ajouter un filet de miel'
    ],
    nutrition: {
      carbs: 17,
      protein: 32,
      fat: 10,
      calories: 300,
      fiber: 2,
      specialNutrients: ['Calcium', 'Sélénium', 'Vitamine B12']
    },
    description: 'Un petit-déjeuner crémeux et fruité riche en protéines'
  },
  {
    id: 'sweet_06',
    name: 'Crumble aux fruits rouges',
    type: 'sweet',
    prepTime: 20,
    image: '/images/sweet_06_beeren_crumble.png',
    ingredients: [
      { name: 'Myrtilles', amount: '100g' },
      { name: 'Framboises', amount: '80g' },
      { name: 'Flocons d’avoine', amount: '50g' },
      { name: 'Amandes (hachées)', amount: '30g' },
      { name: 'Beurre', amount: '2 c. à s.' },
      { name: 'Miel', amount: '1 c. à c.' }
    ],
    instructions: [
      'Mettre les fruits rouges dans un plat à gratin',
      'Mélanger flocons d’avoine, amandes, beurre et miel',
      'Répartir le mélange sur les fruits',
      'Cuire 15 minutes à 180°C',
      'Servir avec du yaourt'
    ],
    nutrition: {
      carbs: 28,
      protein: 30,
      fat: 12,
      calories: 360,
      fiber: 5,
      specialNutrients: ['Antioxydants', 'Fibres', 'Vitamine C']
    },
    description: 'Un petit-déjeuner chaud et croustillant aux fruits rouges'
  },
  {
    id: 'sweet_07',
    name: 'Frappe espresso',
    type: 'sweet',
    prepTime: 5,
    image: '/images/sweet_07_espresso_frappe.png',
    ingredients: [
      { name: 'Espresso (fort)', amount: '60ml' },
      { name: 'Yaourt grec', amount: '150g' },
      { name: 'Lait d’amande', amount: '100ml' },
      { name: 'Poudre de protéine (vanille)', amount: '1 dose' },
      { name: 'Glaçons', amount: 'une poignée' },
      { name: 'Cacao (pour garnir)', amount: '1 pincée' }
    ],
    instructions: [
      'Préparer l’espresso et laisser refroidir',
      'Mélanger yaourt, lait d’amande, poudre de protéine et glaçons',
      'Ajouter l’espresso',
      'Mixer jusqu’à obtenir une texture crémeuse',
      'Garnir de cacao'
    ],
    nutrition: {
      carbs: 16,
      protein: 32,
      fat: 6,
      calories: 280,
      fiber: 1,
      specialNutrients: ['Caféine', 'Antioxydants', 'Vitamine B12']
    },
    description: 'Un shake protéiné caféiné et revitalisant'
  },
  {
    id: 'sweet_08',
    name: 'Yaourt de coco à la mangue',
    type: 'sweet',
    prepTime: 5,
    image: '/images/sweet_08_kokos_joghurt_mango.png',
    ingredients: [
      { name: 'Yaourt de coco', amount: '200g' },
      { name: 'Mangue (en dés)', amount: '150g' },
      { name: 'Graines de chanvre', amount: '2 c. à s.' },
      { name: 'Flocons de noix de coco (non sucrés)', amount: '2 c. à s.' },
      { name: 'Miel', amount: '1 c. à c.' }
    ],
    instructions: [
      'Mettre le yaourt de coco dans un bol',
      'Ajouter les dés de mangue',
      'Parsemer de graines de chanvre',
      'Garnir de flocons de noix de coco',
      'Ajouter un filet de miel'
    ],
    nutrition: {
      carbs: 24,
      protein: 30,
      fat: 14,
      calories: 360,
      fiber: 3,
      specialNutrients: ['Vitamine C', 'Magnésium', 'Acides gras oméga-3']
    },
    description: 'Un petit-déjeuner tropical avec une touche de coco'
  },
  {
    id: 'sweet_09',
    name: 'Petits pains protéinés',
    type: 'sweet',
    prepTime: 25,
    image: '/images/sweet_09_quark_broetchen.png',
    ingredients: [
      { name: 'Fromage blanc (20% de matière grasse)', amount: '250g' },
      { name: 'Œufs', amount: '3' },
      { name: 'Poudre de protéine (vanille)', amount: '2 doses' },
      { name: 'Levure chimique', amount: '1 c. à c.' },
      { name: 'Extrait de vanille', amount: '1 c. à c.' },
      { name: 'Stévia', amount: 'selon goût' }
    ],
    instructions: [
      'Mélanger fromage blanc, œufs, poudre de protéine, levure chimique, extrait de vanille et stévia',
      'Verser la pâte dans des moules à muffins',
      'Cuire 20 minutes à 180°C',
      'Laisser refroidir',
      'Servir avec du fromage frais ou de la confiture'
    ],
    nutrition: {
      carbs: 12,
      protein: 36,
      fat: 10,
      calories: 310,
      fiber: 0,
      specialNutrients: ['Calcium', 'Vitamine B12', 'Sélénium']
    },
    description: 'Petits pains protéinés moelleux, parfaits à emporter'
  },
  {
    id: 'sweet_10',
    name: 'Ricotta à la pêche',
    type: 'sweet',
    prepTime: 10,
    image: '/images/sweet_10_ricotta_pfirsich.png',
    ingredients: [
      { name: 'Ricotta', amount: '200g' },
      { name: 'Pêche (grillée)', amount: '2 moitiés' },
      { name: 'Pistaches (hachées)', amount: '30g' },
      { name: 'Miel', amount: '1 c. à c.' },
      { name: 'Menthe (fraîche)', amount: 'quelques feuilles' }
    ],
    instructions: [
      'Couper les pêches en deux et dénoyauter',
      'Griller les pêches 3 minutes de chaque côté',
      'Mettre la ricotta dans une assiette',
      'Disposer les pêches grillées dessus',
      'Garnir de pistaches et arroser de miel'
    ],
    nutrition: {
      carbs: 20,
      protein: 32,
      fat: 12,
      calories: 340,
      fiber: 2,
      specialNutrients: ['Vitamine A', 'Calcium', 'Vitamine C']
    },
    description: 'Un petit-déjeuner élégant et estival'
  },
  {
    id: 'sweet_11',
    name: 'Gaufres protéinées aux cerises',
    type: 'sweet',
    prepTime: 20,
    image: '/images/sweet_11_protein_waffeln.png',
    ingredients: [
      { name: 'Œufs', amount: '3' },
      { name: 'Yaourt grec', amount: '150g' },
      { name: 'Poudre de protéine (vanille)', amount: '1 dose' },
      { name: 'Levure chimique', amount: '1/2 c. à c.' },
      { name: 'Cerises (fraîches)', amount: '100g' },
      { name: 'Miel', amount: '1 c. à c.' }
    ],
    instructions: [
      'Mélanger œufs, yaourt, poudre de protéine et levure chimique',
      'Verser la pâte dans le gaufrier',
      'Cuire les gaufres jusqu’à ce qu’elles soient dorées',
      'Garnir de cerises',
      'Ajouter un filet de miel'
    ],
    nutrition: {
      carbs: 18,
      protein: 34,
      fat: 10,
      calories: 320,
      fiber: 2,
      specialNutrients: ['Antioxydants', 'Calcium', 'Vitamine B12']
    },
    description: 'Gaufres protéinées moelleuses aux cerises fraîches'
  },
  {
    id: 'sweet_12',
    name: 'Baked oats à la pomme',
    type: 'sweet',
    prepTime: 30,
    image: '/images/sweet_12_baked_oats.png',
    ingredients: [
      { name: 'Flocons d’avoine (grosses graines)', amount: '80g' },
      { name: 'Œufs', amount: '2' },
      { name: 'Yaourt grec', amount: '100g' },
      { name: 'Pomme (en dés)', amount: '1 moyenne' },
      { name: 'Noix de pécan (hachées)', amount: '30g' },
      { name: 'Cannelle', amount: '1/2 c. à c.' }
    ],
    instructions: [
      'Mélanger flocons d’avoine, œufs, yaourt et cannelle',
      'Incorporer les dés de pomme',
      'Verser dans un plat à gratin',
      'Cuire 25 minutes à 180°C',
      'Garnir de noix de pécan'
    ],
    nutrition: {
      carbs: 32,
      protein: 30,
      fat: 12,
      calories: 380,
      fiber: 5,
      specialNutrients: ['Fibres', 'Magnésium', 'Vitamine B']
    },
    description: 'Un petit-déjeuner chaud et rassasiant'
  },
  {
    id: 'sweet_13',
    name: 'Riz au lait à la vanille',
    type: 'sweet',
    prepTime: 20,
    image: '/images/sweet_13_milchreis.png',
    ingredients: [
      { name: 'Riz complet', amount: '60g' },
      { name: 'Lait (2% de matière grasse)', amount: '300ml' },
      { name: 'Poudre de protéine (vanille)', amount: '1 dose' },
      { name: 'Extrait de vanille', amount: '1 c. à c.' },
      { name: 'Cannelle', amount: '1/4 c. à c.' },
      { name: 'Miel', amount: '1 c. à c.' }
    ],
    instructions: [
      'Cuire le riz dans le lait jusqu’à tendreté (env. 15 min)',
      'Incorporer la poudre de protéine et l’extrait de vanille',
      'Saupoudrer de cannelle',
      'Ajouter un filet de miel',
      'Servir chaud'
    ],
    nutrition: {
      carbs: 38,
      protein: 30,
      fat: 6,
      calories: 340,
      fiber: 2,
      specialNutrients: ['Calcium', 'Vitamine B', 'Magnésium']
    },
    description: 'Un petit-déjeuner classique et réconfortant'
  },
  {
    id: 'sweet_14',
    name: 'Pizza petit-déjeuner aux fruits',
    type: 'sweet',
    prepTime: 25,
    image: '/images/sweet_14_fruehstueckspizza.png',
    ingredients: [
      { name: 'Pain plat/pita', amount: '1' },
      { name: 'Fromage blanc (20% de matière grasse)', amount: '150g' },
      { name: 'Fraises (coupées)', amount: '100g' },
      { name: 'Myrtilles', amount: '50g' },
      { name: 'Kiwi (coupé)', amount: '1' },
      { name: 'Miel', amount: '1 c. à c.' }
    ],
    instructions: [
      'Réchauffer brièvement le pain au four',
      'Étaler le fromage blanc en base',
      'Disposer les fruits de manière décorative',
      'Ajouter un filet de miel',
      'Servir'
    ],
    nutrition: {
      carbs: 28,
      protein: 28,
      fat: 8,
      calories: 320,
      fiber: 3,
      specialNutrients: ['Vitamine C', 'Calcium', 'Antioxydants']
    },
    description: 'Une variante créative et colorée pour le petit-déjeuner'
  },

  // SAVORY RECIPES
  {
    id: 'savory_01',
    name: 'Œufs brouillés aux épinards et feta',
    type: 'savory',
    prepTime: 10,
    image: '/images/savory_01_ruehrei_spinat.png',
    ingredients: [
      { name: 'Œufs', amount: '3' },
      { name: 'Épinards (frais)', amount: '150g' },
      { name: 'Feta (en dés)', amount: '50g' },
      { name: 'Huile d’olive', amount: '1 c. à s.' },
      { name: 'Sel & poivre', amount: 'selon goût' },
      { name: 'Ciboulette', amount: '1 c. à s.' }
    ],
    instructions: [
      'Chauffer l’huile d’olive dans une poêle',
      'Faire revenir brièvement les épinards',
      'Battre les œufs et les verser dans la poêle',
      'Remuer jusqu’à cuisson des œufs',
      'Ajouter la feta et la ciboulette',
      'Assaisonner avec sel et poivre'
    ],
    nutrition: {
      carbs: 8,
      protein: 32,
      fat: 18,
      calories: 340,
      fiber: 2,
      specialNutrients: ['Fer', 'Calcium', 'Vitamine K']
    },
    description: 'Un petit-déjeuner classique et rapide riche en protéines'
  },
  {
    id: 'savory_02',
    name: 'Fromage blanc à la tomate et aux herbes',
    type: 'savory',
    prepTime: 5,
    image: '/images/savory_02_huettenkase_tomate.png',
    ingredients: [
      { name: 'Fromage blanc (2% de matière grasse)', amount: '200g' },
      { name: 'Tomates cerises (coupées en deux)', amount: '150g' },
      { name: 'Ciboulette (hachée)', amount: '2 c. à s.' },
      { name: 'Persil (haché)', amount: '1 c. à s.' },
      { name: 'Huile d’olive', amount: '1 c. à c.' },
      { name: 'Sel & poivre', amount: 'selon goût' }
    ],
    instructions: [
      'Mettre le fromage blanc dans un bol',
      'Ajouter les tomates cerises',
      'Incorporer la ciboulette et le persil',
      'Ajouter un filet d’huile d’olive',
      'Assaisonner avec sel et poivre'
    ],
    nutrition: {
      carbs: 10,
      protein: 32,
      fat: 8,
      calories: 280,
      fiber: 2,
      specialNutrients: ['Lycopène', 'Calcium', 'Vitamine C']
    },
    description: 'Un petit-déjeuner frais et léger'
  },
  {
    id: 'savory_03',
    name: 'Tofu brouillé style asiatique',
    type: 'savory',
    prepTime: 10,
    image: '/images/savory_03_tofu_scramble.png',
    ingredients: [
      { name: 'Tofu (ferme)', amount: '250g' },
      { name: 'Curcuma', amount: '1/2 c. à c.' },
      { name: 'Sauce soja', amount: '1 c. à c.' },
      { name: 'Gingembre (râpé)', amount: '1/2 c. à c.' },
      { name: 'Huile de sésame', amount: '1 c. à c.' },
      { name: 'Ciboule', amount: '2' }
    ],
    instructions: [
      'Émietter le tofu à la main',
      'Chauffer l’huile de sésame dans une poêle',
      'Faire revenir le tofu',
      'Ajouter curcuma, sauce soja et gingembre',
      'Parsemer de ciboule',
      'Servir'
    ],
    nutrition: {
      carbs: 6,
      protein: 32,
      fat: 14,
      calories: 310,
      fiber: 2,
      specialNutrients: ['Fer', 'Calcium', 'Antioxydants']
    },
    description: 'Un petit-déjeuner vegan épicé'
  },
  {
    id: 'savory_04',
    name: 'Muffins aux œufs et légumes',
    type: 'savory',
    prepTime: 25,
    image: '/images/savory_04_eiermuffins.png',
    ingredients: [
      { name: 'Œufs', amount: '6' },
      { name: 'Poivron (rouge, en dés)', amount: '1' },
      { name: 'Courgette (en dés)', amount: '100g' },
      { name: 'Fromage râpé', amount: '50g' },
      { name: 'Sel & poivre', amount: 'selon goût' },
      { name: 'Herbes (thym)', amount: '1 c. à c.' }
    ],
    instructions: [
      'Battre les œufs',
      'Ajouter les légumes et le fromage',
      'Assaisonner avec sel, poivre et thym',
      'Verser dans des moules à muffins',
      'Cuire 20 minutes à 180°C',
      'Laisser refroidir et servir'
    ],
    nutrition: {
      carbs: 6,
      protein: 30,
      fat: 16,
      calories: 320,
      fiber: 1,
      specialNutrients: ['Choline', 'Sélénium', 'Vitamine B12']
    },
    description: 'Muffins aux œufs pratiques à emporter'
  },
  {
    id: 'savory_05',
    name: 'Toast à l’avocat et œuf',
    type: 'savory',
    prepTime: 10,
    image: '/images/savory_05_avocado_toast.png',
    ingredients: [
      { name: 'Pain complet', amount: '1 tranche' },
      { name: 'Avocat', amount: '1/2' },
      { name: 'Œufs', amount: '2' },
      { name: 'Flocons de piment', amount: '1 pincée' },
      { name: 'Jus de citron', amount: '1 c. à c.' },
      { name: 'Sel & poivre', amount: 'selon goût' }
    ],
    instructions: [
      'Griller le pain',
      'Écraser l’avocat et l’étaler sur le toast',
      'Arroser de jus de citron',
      'Cuire les œufs (au plat)',
      'Déposer les œufs sur le toast',
      'Assaisonner avec les flocons de piment'
    ],
    nutrition: {
      carbs: 24,
      protein: 30,
      fat: 18,
      calories: 400,
      fiber: 5,
      specialNutrients: ['Potassium', 'Vitamine E', 'Acide folique']
    },
    description: 'Un petit-déjeuner classique et nourrissant'
  },
  {
    id: 'savory_06',
    name: 'Dip yaourt-concombre',
    type: 'savory',
    prepTime: 10,
    image: '/images/savory_06_joghurt_gurke.png',
    ingredients: [
      { name: 'Yaourt grec', amount: '200g' },
      { name: 'Concombre (râpé)', amount: '150g' },
      { name: 'Aneth (frais)', amount: '2 c. à s.' },
      { name: 'Ail (haché)', amount: '1 gousse' },
      { name: 'Jus de citron', amount: '1 c. à c.' },
      { name: 'Sel & poivre', amount: 'selon goût' }
    ],
    instructions: [
      'Mettre le yaourt dans un bol',
      'Ajouter le concombre râpé',
      'Incorporer l’aneth et l’ail',
      'Arroser de jus de citron',
      'Assaisonner avec sel et poivre',
      'Servir avec des bâtonnets de légumes'
    ],
    nutrition: {
      carbs: 8,
      protein: 30,
      fat: 6,
      calories: 240,
      fiber: 1,
      specialNutrients: ['Probiotiques', 'Calcium', 'Vitamine K']
    },
    description: 'Un dip rafraîchissant et léger'
  },
  {
    id: 'savory_07',
    name: 'Tofu fumé à la moutarde',
    type: 'savory',
    prepTime: 10,
    image: '/images/savory_07_raeuchertofu.png',
    ingredients: [
      { name: 'Tofu fumé', amount: '200g' },
      { name: 'Pain complet', amount: '2 tranches' },
      { name: 'Moutarde (Dijon)', amount: '1 c. à s.' },
      { name: 'Concombre (coupé)', amount: '1/4' },
      { name: 'Tomates (coupées)', amount: '1' },
      { name: 'Sel & poivre', amount: 'selon goût' }
    ],
    instructions: [
      'Griller le pain',
      'Étaler la moutarde sur le pain',
      'Couper le tofu en tranches',
      'Déposer le tofu sur le pain',
      'Garnir de concombre et tomate',
      'Assaisonner avec sel et poivre'
    ],
    nutrition: {
      carbs: 28,
      protein: 32,
      fat: 10,
      calories: 360,
      fiber: 4,
      specialNutrients: ['Fer', 'Calcium', 'Vitamine B']
    },
    description: 'Un petit-déjeuner simple et rapide'
  },
  {
    id: 'savory_08',
    name: 'Salade de pois chiches',
    type: 'savory',
    prepTime: 10,
    image: '/images/savory_08_kichererbsen_salat.png',
    ingredients: [
      { name: 'Pois chiches (cuits)', amount: '150g' },
      { name: 'Céleri (haché)', amount: '100g' },
      { name: 'Oignon rouge (haché)', amount: '1/4' },
      { name: 'Mayonnaise (allégée)', amount: '2 c. à s.' },
      { name: 'Aneth (frais)', amount: '1 c. à s.' },
      { name: 'Sel & poivre', amount: 'selon goût' }
    ],
    instructions: [
      'Mettre les pois chiches dans un bol',
      'Ajouter le céleri et l’oignon',
      'Incorporer la mayonnaise',
      'Ajouter l’aneth',
      'Assaisonner avec sel et poivre',
      'Servir avec du pain complet'
    ],
    nutrition: {
      carbs: 24,
      protein: 30,
      fat: 10,
      calories: 320,
      fiber: 6,
      specialNutrients: ['Acide folique', 'Fibres', 'Fer']
    },
    description: 'Une salade riche en protéines'
  },
  {
    id: 'savory_09',
    name: 'Salade Caprese',
    type: 'savory',
    prepTime: 10,
    image: '/images/savory_09_mozzarella_tomate.png',
    ingredients: [
      { name: 'Mozzarella (fraîche)', amount: '150g' },
      { name: 'Tomates (coupées)', amount: '2 moyennes' },
      { name: 'Basilic (frais)', amount: '10 feuilles' },
      { name: 'Pesto', amount: '2 c. à s.' },
      { name: 'Huile d’olive', amount: '1 c. à s.' },
      { name: 'Sel & poivre', amount: 'selon goût' }
    ],
    instructions: [
      'Couper mozzarella et tomates en tranches',
      'Disposer en alternance dans une assiette',
      'Déposer les feuilles de basilic dessus',
      'Ajouter un filet de pesto',
      'Arroser d’huile d’olive',
      'Assaisonner avec sel et poivre'
    ],
    nutrition: {
      carbs: 8,
      protein: 30,
      fat: 20,
      calories: 360,
      fiber: 2,
      specialNutrients: ['Calcium', 'Lycopène', 'Vitamine K']
    },
    description: 'Une salade italienne classique'
  },
  {
    id: 'savory_10',
    name: 'Dip de lentilles aux légumes',
    type: 'savory',
    prepTime: 15,
    image: '/images/savory_10_linsen_dip.png',
    ingredients: [
      { name: 'Lentilles rouges (cuites)', amount: '150g' },
      { name: 'Tahini', amount: '2 c. à s.' },
      { name: 'Jus de citron', amount: '2 c. à c.' },
      { name: 'Ail (haché)', amount: '1 gousse' },
      { name: 'Huile d’olive', amount: '1 c. à c.' },
      { name: 'Sel & poivre', amount: 'selon goût' }
    ],
    instructions: [
      'Mélanger lentilles, tahini, jus de citron et ail',
      'Ajouter un filet d’huile d’olive',
      'Assaisonner avec sel et poivre',
      'Servir avec des bâtonnets de légumes',
      'Ou en alternative avec du pain complet'
    ],
    nutrition: {
      carbs: 20,
      protein: 32,
      fat: 12,
      calories: 320,
      fiber: 6,
      specialNutrients: ['Fer', 'Acide folique', 'Fibres']
    },
    description: 'Un dip riche en protéines et nourrissant'
  },
  {
    id: 'savory_11',
    name: 'Chakchouka',
    type: 'savory',
    prepTime: 20,
    image: '/images/savory_11_shakshuka.png',
    ingredients: [
      { name: 'Tomates (hachées)', amount: '400g' },
      { name: 'Pois chiches (cuits)', amount: '100g' },
      { name: 'Œufs', amount: '3' },
      { name: 'Épinards (frais)', amount: '100g' },
      { name: 'Paprika (en poudre)', amount: '1 c. à c.' },
      { name: 'Ail (haché)', amount: '2 gousses' }
    ],
    instructions: [
      'Faire revenir l’ail dans l’huile d’olive',
      'Ajouter tomates et paprika',
      'Incorporer pois chiches et épinards',
      'Casser délicatement les œufs dans la sauce',
      'Laisser mijoter jusqu’à cuisson des œufs',
      'Servir avec du pain'
    ],
    nutrition: {
      carbs: 20,
      protein: 32,
      fat: 14,
      calories: 360,
      fiber: 5,
      specialNutrients: ['Lycopène', 'Fer', 'Vitamine C']
    },
    description: 'Un petit-déjeuner épicé et nourrissant'
  },
  {
    id: 'savory_12',
    name: 'Crêpes aux champignons et fromage frais',
    type: 'savory',
    prepTime: 20,
    image: '/images/savory_12_pfannkuchen_pilze.png',
    ingredients: [
      { name: 'Farine de pois chiches', amount: '100g' },
      { name: 'Œufs', amount: '2' },
      { name: 'Eau', amount: '100ml' },
      { name: 'Champignons (coupés)', amount: '200g' },
      { name: 'Fromage frais', amount: '50g' },
      { name: 'Sel & poivre', amount: 'selon goût' }
    ],
    instructions: [
      'Mélanger farine de pois chiches, œufs et eau',
      'Laisser reposer la pâte',
      'Faire revenir les champignons',
      'Cuire les crêpes dans une poêle',
      'Garnir de fromage frais et champignons',
      'Plier et servir'
    ],
    nutrition: {
      carbs: 18,
      protein: 32,
      fat: 12,
      calories: 340,
      fiber: 4,
      specialNutrients: ['Vitamine D', 'Calcium', 'Fibres']
    },
    description: 'Une crêpe salée et savoureuse'
  },
  {
    id: 'savory_13',
    name: 'Muffins épinards-feta',
    type: 'savory',
    prepTime: 25,
    image: '/images/savory_13_spinat_muffins.png',
    ingredients: [
      { name: 'Œufs', amount: '6' },
      { name: 'Épinards (surgelés)', amount: '150g' },
      { name: 'Feta (en dés)', amount: '80g' },
      { name: 'Oignon (haché)', amount: '1/4' },
      { name: 'Sel & poivre', amount: 'selon goût' },
      { name: 'Herbes (origan)', amount: '1/2 c. à c.' }
    ],
    instructions: [
      'Battre les œufs',
      'Ajouter épinards, feta et oignon',
      'Assaisonner avec sel, poivre et origan',
      'Verser dans des moules à muffins',
      'Cuire 20 minutes à 180°C',
      'Laisser refroidir'
    ],
    nutrition: {
      carbs: 6,
      protein: 32,
      fat: 16,
      calories: 330,
      fiber: 2,
      specialNutrients: ['Fer', 'Calcium', 'Vitamine K']
    },
    description: 'Muffins salés pratiques'
  },
  {
    id: 'savory_14',
    name: 'Galettes de courgettes au fromage blanc aux herbes',
    type: 'savory',
    prepTime: 20,
    image: '/images/savory_14_zucchini_puffer.png',
    ingredients: [
      { name: 'Courgettes (râpées)', amount: '300g' },
      { name: 'Œufs', amount: '2' },
      { name: 'Fromage blanc (20% de matière grasse)', amount: '100g' },
      { name: 'Herbes (aneth, persil)', amount: '2 c. à s.' },
      { name: 'Chapelure', amount: '50g' },
      { name: 'Sel & poivre', amount: 'selon goût' }
    ],
    instructions: [
      'Presser les courgettes',
      'Mélanger avec œufs et chapelure',
      'Assaisonner avec sel et poivre',
      'Cuire les galettes dans une poêle',
      'Mélanger fromage blanc et herbes',
      'Servir les galettes avec le fromage blanc aux herbes'
    ],
    nutrition: {
      carbs: 12,
      protein: 32,
      fat: 10,
      calories: 300,
      fiber: 2,
      specialNutrients: ['Vitamine C', 'Calcium', 'Vitamine K']
    },
    description: 'Galettes croustillantes de courgettes avec dip crémeux'
  }
];