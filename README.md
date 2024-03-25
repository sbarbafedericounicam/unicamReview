
# UnicamReview

### Progetto per l'esame di Applicazioni Web, Mobile e Cloud (Modulo 1)

**Studente:** Sbarbati Federico

#### Descrizione:

L'idea di UnicamReview è nata quando lo sviluppatore si è trovato di fronte alla difficile scelta dei corsi da seguire per ottenere i 12 crediti a scelta libera durante il percorso accademico. La piattaforma è stata concepita con l'obiettivo di fornire agli studenti una panoramica completa delle statistiche e delle recensioni relative ai corsi di studio e alle materie offerte dall'Università. Questo strumento permette agli studenti di avere una visione chiara delle esperienze degli altri riguardo ai corsi e alle materie, fornendo così un valido aiuto nella fase di pianificazione del proprio percorso accademico. UnicamReview è utile non solo per coloro che devono ancora iscriversi all'università, ma anche per chi è alle prese con la scelta delle materie a scelta libera e per chiunque voglia condividere le proprie valutazioni riguardanti i corsi frequentati, contribuendo così a supportare gli altri studenti nell'orientamento accademico.

#### Descrizione esperienza utente:

Nell'Homepage, l'utente si troverà di fronte al titolo, un breve slogan e un gruppo di statistiche riguardanti l'università (il numero di corsi, il voto medio attribuito all'università ai corsi e alle materie, il numero di recensioni...). Sarà sempre presente una barra di navigazione in alto con le seguenti opzioni: 
- **Home:** rimanda alla homepage.
- **Corsi:** rimanda alla pagina dei corsi.
- **Recensisci corso o materia:** visibile solo se l'utente è loggato.
- **Proprio nome utente:** visibile solo se l'utente è loggato, cliccando rimanda alla pagina personale, dove è possibile vedere le proprie recensioni effettuate [ancora da sviluppare].
- **Accedi/Registrati:** visibile solo se l'utente non è loggato.
- **Logout:** visibile solo se l'utente è loggato.

Nella pagina dei corsi ci sarà una lista dei corsi con affianco la valutazione media attribuita ad ogni corso (ossia la media dei voti delle recensioni che gli utenti hanno fatto al corso) e la durata del corso. Cliccando su uno dei corsi, si entrerà nella pagina di dettaglio del corso. Qui saranno presenti 3 sezioni: 
- Dettagli del corso (nome, descrizione, durata, media dei voti delle recensioni del corso).
- Materie con la lista di tutte le materie del corso (nome, anno e CFU).
- Recensioni del corso, dove sono presenti tutte le recensioni del corso (username dell'utente che ha effettuato la recensione, voto da 1 a 5, e testo della recensione).

Cliccando su una delle materie è possibile entrare nella pagina di dettaglio della materia, dove saranno presenti 2 sezioni: 
- Dettagli della materia (nome, descrizione, durata, media dei voti delle recensioni della materia).
- Recensioni della materia, dove sono presenti tutte le recensioni della materia (username dell'utente che ha effettuato la recensione, voto da 1 a 5, e testo della recensione).

Ovviamente l'utente non potrà recensire più di una volta una stessa materia/corso.

#### In parole povere:

L'utente può vedere statistiche riguardo all'università, la lista dei corsi, la pagina per ogni corso (dettagli, materie, recensioni del corso fatte dagli utenti), la pagina per ogni materia (dettagli e recensioni del corso fatte dagli utenti). Registrandosi/accedendo potrà effettuare delle recensioni (voto 1-5 e testo al corso di studio o alle materie del corso di studio che frequenta).

#### Scelte tecniche:

Il database è stato realizzato in MySQL tramite MySQL Workbench, il backend in Express.js (Node.js), il frontend in Angular. Il frontend e il backend sono stati sviluppati utilizzando metodologie quanto più coerenti possibile con quanto mostrato durante le lezioni. Per la registrazione e l'accesso, il sottoscritto ha scelto di utilizzare Firebase, poiché intere giornate cercando di implementare un'autenticazione usando il JWT dal backend al frontend si sono rivelate infruttuose.

#### Future modifiche:

- Aggiunta della pagina personale dell'utente dove poter vedere/eliminare le proprie recensioni.
- Possibilità di fare recensioni del corso e delle materie direttamente dalla pagina di dettaglio del corso/ delle materie, evitando di dover mettere manualmente l'id del corso/materia (cosa molto brutta da sistemare)
- Aggiunta del ruolo di admin, con una pagina personale dove potere creare/modificare/eliminare corsi e materie (non assicurato).
- Video dimostrativo.
- Pubblicazione dello script per la creazione delle tabelle nel DB e delle insert di esempio per corsi, materie, recensioni...
- PWA (dipende dalle tempistiche).
- Deploy su qualche servizio (dipende dalle tempistiche / non assicurato).


