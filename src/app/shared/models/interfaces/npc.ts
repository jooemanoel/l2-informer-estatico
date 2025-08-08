export interface Npc {
  id: number;
  idTemplate?: number;
  name?: string;
  serverSideName?: number;
  title?: string;
  serverSideTitle?: number;
  className?: string;
  collisionRadius?: number;
  collisionHeight?: number;
  level?: number;
  sex?: string;
  type?: string;
  attackrange?: number;
  hp?: number;
  mp?: number;
  hpreg?: number;
  mpreg?: number;
  str?: number;
  con?: number;
  dex?: number;
  intelligence?: number; // "int" foi renomeado para evitar conflito com palavra reservada
  wit?: number;
  men?: number;
  exp?: number;
  sp?: number;
  patk?: number;
  pdef?: number;
  matk?: number;
  mdef?: number;
  atkspd?: number;
  aggro?: number;
  matkspd?: number;
  rhand?: number;
  lhand?: number;
  armor?: number;
  walkspd?: number;
  runspd?: number;
  factionId?: string;
  factionRange?: number;
  isUndead?: number;
  absorbLevel?: number;
  absorbType?: 'FULL_PARTY' | 'LAST_HIT' | 'PARTY_ONE_RANDOM'; // Enum convertido para string union
}
