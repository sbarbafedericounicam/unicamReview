const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const app = express();
require("dotenv").config();
app.use(bodyParser.json());

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE
});

app.get('/utenti', (req, res) => {
  connection.query('SELECT * from utenti', (err, results) => {
    if (err) {
      res.status(500).send(err.message);
    } else {
      res.send(results);
    }
  });
});

app.get('/api/corsi', (req, res) => {
  const query = `
      SELECT
        corsi_di_studio.id,
        corsi_di_studio.nome,
        corsi_di_studio.durata,
        corsi_di_studio.descrizione,
        corsi_di_studio.immagine,
        ROUND(AVG(recensioni_corso.voto),1) AS voto_medio
      FROM
        corsi_di_studio
      LEFT JOIN
        recensioni_corso ON recensioni_corso.corso_di_studio_id = corsi_di_studio.id
      GROUP BY
        corsi_di_studio.id
      ORDER BY
        voto_medio DESC;
    `;
  connection.query(query, (err, results) => {
    if (err) {
      res.status(500).send(err.message);
    } else {
      res.send(results);
    }
  });
});

app.get('/api/corso-detail/:id', (req, res) => {
  const corsoId = parseInt(req.params.id);

  const query = `
      SELECT
          c.id,
          c.nome,
          c.durata,
          c.descrizione,
          c.immagine,
          ROUND(AVG(rc.Voto), 1) AS media_voti
      FROM
          Corsi_di_Studio c
      LEFT JOIN
          Recensioni_Corso rc ON rc.corso_di_studio_id = c.id
      WHERE
          c.id = ?
      GROUP BY
          c.id;
  `;

  connection.query(query, [corsoId], (err, results) => {
      if (err) {
          res.status(500).send(err.message);
      } else {
          if (results.length === 0) {
              res.status(404).send('Corso di studio non trovato');
          } else {
              const corsoDettagliato = results[0];
              const queryMaterie = `
                  SELECT
                      m.nome AS nome_materia,
                      m.id,
                      m.CFU,
                      m.anno
                  FROM
                      Materie m
                  WHERE
                      m.corso_di_studio_id = ?;
              `;

              connection.query(queryMaterie, [corsoId], (errMaterie, resultsMaterie) => {
                  if (errMaterie) {
                      res.status(500).send(errMaterie.message);
                  } else {
                      corsoDettagliato.materie = resultsMaterie;
                      const queryRecensioni = `
                          SELECT
                              rc.username,
                              rc.Voto,
                              rc.testo
                          FROM
                              Recensioni_Corso rc
                          WHERE
                              rc.corso_di_studio_id = ?;
                      `;

                      connection.query(queryRecensioni, [corsoId], (errRecensioni, resultsRecensioni) => {
                          if (errRecensioni) {
                              res.status(500).send(errRecensioni.message);
                          } else {
                              corsoDettagliato.recensioniCorso = resultsRecensioni;
                              res.json(corsoDettagliato);
                          }
                      });
                  }
              });
          }
      }
  });
});

app.get('/api/materia-detail/:id', (req, res) => {
  const materiaId = parseInt(req.params.id);
  const query = `
    SELECT
      m.nome AS nome_materia,
      m.id,
      m.descrizione,
      m.anno,
      m.CFU,
      ROUND(AVG(rm.Voto), 1) AS media_voti
    FROM
      Materie m
    LEFT JOIN
      Recensioni_Materia rm ON rm.materia_id = m.id
    WHERE
      m.id = ?
    GROUP BY
      m.id;
  `;

  connection.query(query, [materiaId], (err, results) => {
    if (err) {
      res.status(500).send(err.message);
    } else {
      if (results.length === 0) {
        res.status(404).send('Materia non trovata');
      } else {
        const materiaDettagliata = results[0];
        const queryRecensioni = `
          SELECT
            rm.username,
            rm.Voto,
            rm.testo
          FROM
            Recensioni_Materia rm
          WHERE
            rm.materia_id = ?;
        `;

        connection.query(queryRecensioni, [materiaId], (errRecensioni, resultsRecensioni) => {
          if (errRecensioni) {
            res.status(500).send(errRecensioni.message);
          } else {
            materiaDettagliata.recensioniMateria = resultsRecensioni;
            res.json(materiaDettagliata);
          }
        });
      }
    }
  });
});

app.post('/api/recensione-corso', (req, res) => {
  const { testo, voto, email, username, corso_di_studio_id } = req.body;
  if (!testo || !voto || !email || !username || !corso_di_studio_id) {
    return res.status(400).send('Mancano dati obbligatori');
  }

  if (voto < 1 || voto > 5) {
    return res.status(400).send('Voto non valido');
  }

  //vedo se esiste già c'è una recensione per lo stesso utente e lo stesso corso
  const query = `
    INSERT INTO Recensioni_Corso (testo, Voto, email, username, corso_di_studio_id)
    SELECT ?, ?, ?, ?, ?
    WHERE NOT EXISTS (
      SELECT 1
      FROM Recensioni_Corso rc
      WHERE rc.email = ? AND rc.corso_di_studio_id = ?
    );
  `;

  connection.query(query, [testo, voto, email, username, corso_di_studio_id, email, corso_di_studio_id], (err, results) => {
    if (err) {
      console.error('Errore durante il controllo o l\'inserimento della recensione:', err);
      return res.status(500).send('Errore durante il controllo o l\'inserimento della recensione');
    }

    const numeroRecensioniAggiunte = results.affectedRows;

    if (numeroRecensioniAggiunte === 0) {
      return res.status(400).send('Utente ha già recensito questo corso');
    }

    res.status(201).send('Recensione inserita con successo');
  });
});

app.post('/api/recensione-materia', (req, res) => {
  const { testo, voto, email, username, materia_id } = req.body;
  if (!testo || !voto || !email || !username || !materia_id) {
    return res.status(400).send('Mancano dati obbligatori');
  }

  if (voto < 1 || voto > 5) {
    return res.status(400).send('Voto non valido');
  }

  //vedo se già c'era una recensione dallo stesso utente sullo stesso corso
  const query = `
    INSERT INTO Recensioni_Materia (testo, Voto, email, username, materia_id)
    SELECT ?, ?, ?, ?, ?
    WHERE NOT EXISTS (
      SELECT 1
      FROM Recensioni_Materia rm
      WHERE rm.email = ? AND rm.materia_id = ?
    );
  `;

  connection.query(query, [testo, voto, email, username, materia_id, email, materia_id], (err, results) => {
    if (err) {
      console.error('Errore durante il controllo o l\'inserimento della recensione:', err);
      return res.status(500).send('Errore durante il controllo o l\'inserimento della recensione');
    }

    const numeroRecensioniAggiunte = results.affectedRows;

    if (numeroRecensioniAggiunte === 0) {
      return res.status(400).send('Utente ha già recensito questa materia');
    }

    res.status(201).send('Recensione inserita con successo');
  });
});

app.post('/api/corsi/nuovo', (req, res) => {  //da migliorare e usare su angular
  const { nome, durata, descrizione, immagine } = req.body;
  const query = `
    INSERT INTO Corsi_di_Studio (nome, durata, descrizione, immagine)
    VALUES (?, ?, ?, ?)
  `;

  connection.query(query, [nome, durata, descrizione, immagine], (err) => {
    if (err) {
      console.error('Errore durante la creazione del corso:', err);
      return res.status(500).send('Errore durante la creazione del corso');
    }

    res.status(201).send('Corso di studi creato con successo');
  });
});

app.get('/api/stats', (req, res) => {
  let statistiche = {};

  // 1. Numero di Corsi
  connection.query('SELECT COUNT(*) AS numero_corsi FROM Corsi_di_Studio;', (err, results) => {
    if (err) {
      console.error('Errore durante il recupero del numero di corsi:', err);
      res.status(500).send('Errore durante il recupero del numero di corsi');
      return;
    }

    statistiche.numero_corsi = results[0].numero_corsi;

    // 2. Media Voti Recensioni Corsi
    const query2 = `
      SELECT
        ROUND(AVG(rc.voto), 2) AS voto_medio_corsi
      FROM
        Corsi_di_Studio c
      LEFT JOIN
        Recensioni_Corso rc ON rc.corso_di_studio_id = c.id;
    `;

    connection.query(query2, (err, results) => {
      if (err) {
        console.error('Errore durante il recupero della media voti corsi:', err);
        res.status(500).send('Errore durante il recupero della media voti corsi');
        return;
      }

      statistiche.voto_medio_corsi = results[0].voto_medio_corsi || null;

      // 3. Media Voti Recensioni Materie
      const query3 = `
        SELECT
          ROUND(AVG(rm.voto), 2) AS voto_medio_materie
        FROM
          Materie m
        LEFT JOIN
          Recensioni_Materia rm ON rm.materia_id = m.id;
      `;

      connection.query(query3, (err, results) => {
        if (err) {
          console.error('Errore durante il recupero della media voti materie:', err);
          res.status(500).send('Errore durante il recupero della media voti materie');
          return;
        }

        statistiche.voto_medio_materie = results[0].voto_medio_materie || null;

        // 4. Numero Recensioni Corsi
        const query4 = `
          SELECT
            COUNT(rc.id) AS numero_recensioni_corsi
          FROM
            Corsi_di_Studio c
          LEFT JOIN
            Recensioni_Corso rc ON rc.corso_di_studio_id = c.id;
        `;

        connection.query(query4, (err, results) => {
          if (err) {
            console.error('Errore durante il recupero del numero recensioni corsi:', err);
            res.status(500).send('Errore durante il recupero del numero recensioni corsi');
            return;
          }

          statistiche.numero_recensioni_corsi = results[0].numero_recensioni_corsi || 0;

          // 5. Numero Recensioni Materie
          const query5 = `
            SELECT
              COUNT(rm.id) AS numero_recensioni_materie
            FROM
              Materie m
            LEFT JOIN
              Recensioni_Materia rm ON rm.materia_id = m.id;
          `;

          connection.query(query5, (err, results) => {
            if (err) {
              console.error('Errore durante il recupero del numero recensioni materie:', err);
              res.status(500).send('Errore durante il recupero del numero recensioni materie');
              return;
            }

            statistiche.numero_recensioni_materie = results[0].numero_recensioni_materie || 0;
            res.json(statistiche);
          });
        });
      });
    });
  });
});

app.listen(3000, () => {
  console.log('Server in ascolto sulla porta 3000');
});
