export interface MateriaDetail {
    id: number;
    nome_materia: string;
    CFU: number;
    descrizione: string;
    media_voti: number;
    recensioniMateria: recensioniMateria[];
  }
  
  export interface recensioniMateria {
    username: string;
    Voto: number;
    testo: string;
  }
  