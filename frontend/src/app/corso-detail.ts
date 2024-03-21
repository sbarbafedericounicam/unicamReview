export interface CorsoDetail {
    id: number;
    nome: string;
    durata: number;
    descrizione: string;
    immagine: string;
    media_voti: number;
    materie: Materia[];
    recensioniCorso: RecensioneCorso[];
  }
  
  export interface Materia {
    id:number;
    nome_materia: string;
    CFU: number;
    anno: number;
  }
  
  export interface RecensioneCorso {
    username: string;
    Voto: number;
    testo: string;
  }
  