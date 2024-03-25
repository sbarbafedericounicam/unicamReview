use progettowebappfinale;

CREATE TABLE Corsi_di_Studio (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(255),
    durata INT,
    descrizione TEXT,
    immagine VARCHAR(255)
);

CREATE TABLE Materie (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(255),
    anno INT,
    CFU INT,
    descrizione TEXT,
    corso_di_studio_id INT
    -- FOREIGN KEY (corso_di_studio_id) REFERENCES Corsi_di_Studio(id)
);

CREATE TABLE Recensioni_Corso (
    id INT PRIMARY KEY AUTO_INCREMENT,
    testo TEXT,
    Voto INT CHECK (Voto >= 1 AND Voto <= 5),
    email varchar(50),
    username varchar(50),
    corso_di_studio_id INT
    -- FOREIGN KEY (corso_di_studio_id) REFERENCES Corsi_di_Studio(id)
);

-- Crea la tabella Recensioni_Materia
CREATE TABLE Recensioni_Materia (
    id INT PRIMARY KEY AUTO_INCREMENT,
    testo TEXT,
    Voto INT CHECK (Voto >= 1 AND Voto <= 5),
	email varchar(50),
    username varchar(50),
    materia_id INT
    -- FOREIGN KEY (materia_id) REFERENCES Materie(id)
);

CREATE TABLE Admins (
    id INT PRIMARY KEY AUTO_INCREMENT,
	email varchar(50)
);

INSERT INTO Corsi_di_Studio (nome, durata, descrizione, immagine) VALUES
  ('CHIMICA', 5, 'Il corso di Chimica forma figure professionali in grado di analizzare e comprendere la composizione e le proprietà della materia.', 'immagine_corso_chimica.jpg'),
  ('Fisica', 5, 'Il corso di Fisica forma figure professionali in grado di studiare e interpretare i fenomeni fisici.', 'immagine_corso_fisica.jpg'),
  ('Informatica', 5, 'Il corso di Informatica forma figure professionali in grado di progettare, sviluppare e gestire sistemi informatici.', 'immagine_corso_informatica.jpg'),
  ('INFORMATICA PER LA COMUNICAZIONE DIGITALE', 4, 'Il corso di Informatica per la Comunicazione Digitale forma figure professionali in grado di utilizzare le tecnologie informatiche per la comunicazione e la diffusione di informazioni.', 'immagine_corso_informatica_digitale.jpg'),
  ('MATEMATICA E APPLICAZIONI', 5, 'Il corso di Matematica e Applicazioni forma figure professionali in grado di applicare la matematica a diversi campi scientifici e tecnologici.', 'immagine_corso_matematica.jpg'),
  ('SCIENZA DEI MATERIALI', 5, 'Il corso di Scienza dei Materiali forma figure professionali in grado di progettare e sviluppare nuovi materiali.', 'immagine_corso_scienza_materiali.jpg'),
  ('SCIENZE GEOLOGICHE E TECNOLOGIE PER LAMBIENTE', 5, 'Il corso di Scienze Geologiche e Tecnologie per lAmbiente forma figure professionali in grado di studiare e monitorare lambiente.', 'immagine_corso_scienze_geologiche.jpg'),
  ('TECNOLOGIE E DIAGNOSTICA PER I BENI CULTURALI', 5, 'Il corso di Tecnologie e Diagnostica per i Beni Culturali forma figure professionali in grado di applicare le tecnologie per la conservazione e la valorizzazione dei beni culturali.', 'immagine_corso_tecnologie_beni_culturali.jpg'),
  ('CHEMISTRY AND ADVANCED CHEMICAL METHODOLOGIES', 5, 'Il corso di Chemistry and Advanced Chemical Methodologies forma figure professionali in grado di svolgere attivita di ricerca e sviluppo nel campo della chimica.', 'immagine_corso_chimica_avanzata.jpg');
  
-- CHIMICA
INSERT INTO Materie (nome, anno, CFU, descrizione, corso_di_studio_id) VALUES
  ('Chimica Generale', 1, 8, 'Introduzione ai concetti base della chimica.', 1),
  ('Chimica Organica', 2, 10, 'Studio dei composti organici.', 1),
  ('Chimica Inorganica', 2, 10, 'Studio dei composti inorganici.', 1),
  ('Biochimica', 3, 8, 'Studio dei processi biochimici.', 1);

-- Fisica
INSERT INTO Materie (nome, anno, CFU, descrizione, corso_di_studio_id) VALUES
  ('Fisica Generale', 1, 8, 'Introduzione ai concetti base della fisica.', 2),
  ('Meccanica', 2, 10, 'Studio del movimento dei corpi.', 2),
  ('Elettromagnetismo', 2, 10, 'Studio dei fenomeni elettrici e magnetici.', 2),
  ('Termodinamica', 3, 8, 'Studio del calore e delle sue relazioni con le altre forme di energia.', 2);

-- Informatica
INSERT INTO Materie (nome, anno, CFU, descrizione, corso_di_studio_id) VALUES
  ('Introduzione allInformatica', 1, 8, 'Introduzione ai concetti base dellinformatica.', 3),
  ('Programmazione', 2, 10, 'Imparare a scrivere programmi per computer.', 3),
  ('Algoritmi e Strutture Dati', 2, 10, 'Studio degli algoritmi e delle strutture dati utilizzati nellinformatica.', 3),
  ('Reti di Calcolatori', 3, 8, 'Studio delle reti di computer.', 3);
  
  -- Corso di Chimica
INSERT INTO Recensioni_Corso (testo, Voto, email, username, corso_di_studio_id) VALUES
  ('Corso molto interessante e completo. I docenti sono preparati e disponibili.', 5, 'mario.rossi@email.it', 'mariorossi', 1),
  ('Programma un po troppo impegnativo, ma gratificante.', 4, 'anna.verdi@email.it', 'annaverdi', 1),
  ('Lezioni chiare e coinvolgenti.', 5, 'luca.bianchi@email.it', 'lucabianchi', 1),
  ('Laboratori di chimica ben organizzati e utili.', 5, 'sara.neri@email.it', 'saraneri', 1);

-- Corso di Fisica
INSERT INTO Recensioni_Corso (testo, Voto, email, username, corso_di_studio_id) VALUES
  ('Corso affascinante e stimolante.', 5, 'mario.rossi@email.it', 'mariorossi', 2),
  ('Argomenti complessi, ma ben spiegati dai docenti.', 4, 'anna.verdi@email.it', 'annaverdi', 2),
  ('Esercitazioni in laboratorio utili per mettere in pratica le conoscenze teoriche.', 5, 'luca.bianchi@email.it', 'lucabianchi', 2),
  ('Il ritmo del corso è un po troppo sostenuto.', 3, 'sara.neri@email.it', 'saraneri', 2);

-- Corso di Informatica
INSERT INTO Recensioni_Corso (testo, Voto, email, username, corso_di_studio_id) VALUES
  ('Corso ben strutturato e ricco di contenuti.', 5, 'mario.rossi@email.it', 'mariorossi', 3),
  ('Laboratori di informatica molto utili per acquisire dimestichezza con le tecnologie informatiche.', 5, 'anna.verdi@email.it', 'annaverdi', 3),
  ('Docente appassionato e coinvolgente.', 5, 'luca.bianchi@email.it', 'lucabianchi', 3),
  ('Programma interessante, ma alcuni argomenti potrebbero essere approfonditi di più.', 4, 'sara.neri@email.it', 'saraneri', 3);
  
  -- Corso di Chimica
INSERT INTO Recensioni_Materia (testo, Voto, email, username, materia_id) VALUES
  ('Materia fondamentale per qualsiasi studente di scienze.', 5, 'mario.rossi@email.it', 'mariorossi', 1),
  ('Libro di testo chiaro e completo.', 5, 'anna.verdi@email.it', 'annaverdi', 1),
  ('Esami un po troppo difficili.', 4, 'luca.bianchi@email.it', 'lucabianchi', 2);

-- Corso di Fisica
INSERT INTO Recensioni_Materia (testo, Voto, email, username, materia_id) VALUES
  ('Materia affascinante e stimolante.', 5, 'mario.rossi@email.it', 'mariorossi', 5),
  ('Docente chiaro e preciso nelle spiegazioni.', 5, 'anna.verdi@email.it', 'annaverdi', 6),
  ('Esercitazioni utili per mettere in pratica le conoscenze teoriche.', 5, 'luca.bianchi@email.it', 'lucabianchi', 7);

-- Corso di Informatica
INSERT INTO Recensioni_Materia (testo, Voto, email, username, materia_id) VALUES
  ('Materia introduttiva ben strutturata e accessibile anche a chi non ha esperienza di informatica.', 5, 'mario.rossi@email.it', 'mariorossi', 9),
  ('Docente appassionato e coinvolgente.', 5, 'anna.verdi@email.it', 'annaverdi', 10),
  ('Laboratori di informatica molto utili per acquisire dimestichezza con le tecnologie informatiche.', 5, 'luca.bianchi@email.it', 'lucabianchi', 11);

INSERT INTO Admins(email)
VALUES
("federico.sbarbati@studenti.unicam.it");




