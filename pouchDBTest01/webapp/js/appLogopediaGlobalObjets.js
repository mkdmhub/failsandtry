// appLogopediaGlobalObjets.js

// Global variables
var logMode = true;
var debugMode = false;

// database PouchDB
var appPouchDB = null;
var DB_NAME = 'logopediaMyAppPouchDB06'

// contenuti di default del database
/*
"row_type":
	- "es" = identificativo oggetti di tipo "esercizio"
	- "med" = identificativo oggetti di tipo "medico"
	- "paz" = identificativo oggetti di tipo "paziente"
	- "vis" = identificativo oggetti di tipo "visita"
*/

var defaultDB;

// oggetto prototipo per entitá Medico
var dbPrototypeMedico = {
	"_id":null,
	"row_type":"med",
	"codice":null,
	"nome":null
};

// oggetto prototipo per entitá Paziente
var dbPrototypePaziente = {
	"_id":null,
	"row_type":"paz",
	"codice":null,
	"nome":null
};

// oggetto prototipo per entitá Esercizio
var dbPrototypeEsercizio = {
	"_id":null,
	"row_type":"es",
	"codice":null,
	"nome":null,
	"descrizione":null,
	"punteggio_min":0,
	"punteggio_max":0
};

// oggetto prototipo per entitá Visita
var dbPrototypeVisita = {
	"_id":null,
	"row_type":"vis",
	"codice":null,
	"cod_medico":null,
	"cod_paziente":null,
	"data_visita": null,
	"esercizi_svolti": []
};

// oggetto prototipo per entitá EsercizioSvolto
var dbPrototypeEsercizioSvolto = {
	"cod_esercizio":null,
	"punteggio":0,
	"annotazioni": null,
	"completato": false
};

// alcuni testi usati nella UI
var AppText = {
	TXT_ERROR_INSTANCING_DIALOG_MSG: 'Oggetto non instanziato',
	TXT_NULL_DB_DIALOG_MSG: 'Archivio non inizializzato',
	TXT_ARCHIVE_LOADED_DIALOG_MSG: 'Archivio caricato',
	TXT_ARCHIVE_REVERTED_DIALOG_MSG: 'Archivio resettato',
	TXT_STORE_VISITS_DONE_DIALOG_MSG: 'Archivio aggiornato',
	TXT_STORE_VISITS_ERROR_DIALOG_MSG: 'Archivio non aggiornato a causa di un errore',
	TXT_LOAD_VISITS_ERROR_DIALOG_MSG: 'Errore durante la lettura dell\'archivio Visite',
	TXT_LOAD_MEDICI_ERROR_DIALOG_MSG: 'Errore durante la lettura dell\'archivio Medici',
	TXT_LOAD_PAZIENTI_ERROR_DIALOG_MSG: 'Errore durante la lettura dell\'archivio Pazienti',
	TXT_LOAD_ESERCIZI_ERROR_DIALOG_MSG: 'Errore durante la lettura dell\'archivio Esercizi',
	TXT_CLOSE: 'Chiudi',
	TXT_OK: 'OK',
	TXT_OK_CONFIRM: 'Premere OK per confermare',
	TXT_CANCEL: 'Annulla',
	TXT_RESET_DB_DIALOG_MSG: 'Tutti i dati inseriti saranno resettati.<br>Premere OK per confermare'
};
