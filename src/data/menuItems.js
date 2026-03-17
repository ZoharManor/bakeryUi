import lechem_hamuziot from '../assets/לחם חמוציות.png';
import lechem_kusmin from '../assets/לחם כוסמין.jpg';
import lechem_pereg from '../assets/לחם פרג.jpg';
import karich1 from '../assets/כריך 1.jpg';
import karich2 from '../assets/כריך 2.jpg';
import karich3 from '../assets/כריך 3.jpg';
import karich4 from '../assets/כריך 4.jpg';
import maafe_peta from '../assets/מאפה פטה.jpg';
import sticky_ban from '../assets/סטיקי באן.jpg';
import scon_shokolad from '../assets/סקון שוקולד.jpg';
import shkedim from '../assets/שקדים.jpg';
import lastSandwich from '../assets/סנדווית.jpg'

export const breads = [
  { name: 'לחם כפרי', image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400' },
  { name: 'פולנטה', image: 'https://images.unsplash.com/photo-1586444248902-2f64eddc13df?w=400' },
  { name: 'דגנים', image: 'https://images.unsplash.com/photo-1549931319-a545dcf3bc73?w=400' },
  { name: 'חמוציות-אגוזים', image: lechem_hamuziot },
  { name: 'כוסמין', image: lechem_kusmin },
  { name: 'מלא עם פרג', image: lechem_pereg },
];

export const pastries = [
  { name: 'קרואסון חמאה', image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=400' },
  { name: 'דניש שקדים', image: shkedim },
  { name: 'סקון שוקולד', image: scon_shokolad },
  { name: 'סטיקי באן', image: sticky_ban },
  { name: 'מאפה פטה-מנגולד', image: maafe_peta },
];

export const sandwiches = [
  { name: 'חביתה', image: karich1 },
  { name: 'סלמון עם קרם פרש ופסטו צלפים', image: karich2 },
  { name: 'אנטיפסטי עם קרם פטה', image: karich3 },
  { name: 'סלט ביצים', image: karich4 },
  { name: 'ארטישוק עם מנצ\'גו', image: lastSandwich },
];
