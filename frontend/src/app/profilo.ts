export interface Profilo {
    isAdmin: boolean;
    recensioniCorso: RecensioneCorso[];
    recensioniMateria: RecensioneMateria[];
  }
  
  export interface RecensioneCorso {
    nome_corso: string;
    Voto: number;
    testo: string;
  }

  export interface RecensioneMateria {
    
    nome_materia: string;
    Voto: number;
    testo: string;
  }
  
  