// appLogopediaBusinesLogic.js.js

// AppBusinesLogic
function AppBusinesLogic() {
}

AppBusinesLogic.createDefaultDbContent = function() {
	var tmpObj;
	var objJsonStr;
	
	appLog('##################### AppBusinesLogic.createDefaultDbContent');
	
	defaultDB = new Array();
	
	// esercizi
	objJsonStr = JSON.stringify(dbPrototypeEsercizio);

	tmpObj = null;
	try {
		tmpObj = JSON.parse(objJsonStr);
	} catch(e) {
	}
	
	if (tmpObj) {
		tmpObj._id = "ESERCIZIO001";
		tmpObj.row_type = "es";
		tmpObj.codice = "ESERCIZIO001";
		tmpObj.nome = "ESERCIZIO 001";
		tmpObj.descrizione = null;
		tmpObj.punteggio_min = 0;
		tmpObj.punteggio_max = 30;
		
		defaultDB.push(tmpObj);
	}
	
	tmpObj = null;
	try {
		tmpObj = JSON.parse(objJsonStr);
	} catch(e) {
	}
	
	if (tmpObj) {
		tmpObj._id = "ESERCIZIO002";
		tmpObj.row_type = "es";
		tmpObj.codice = "ESERCIZIO002";
		tmpObj.nome = "ESERCIZIO 002";
		tmpObj.descrizione = null;
		tmpObj.punteggio_min = 0;
		tmpObj.punteggio_max = 20;
		
		defaultDB.push(tmpObj);
	}
	
	tmpObj = null;
	try {
		tmpObj = JSON.parse(objJsonStr);
	} catch(e) {
	}
	
	if (tmpObj) {
		tmpObj._id = "ESERCIZIO003";
		tmpObj.row_type = "es";
		tmpObj.codice = "ESERCIZIO003";
		tmpObj.nome = "ESERCIZIO 003";
		tmpObj.descrizione = null;
		tmpObj.punteggio_min = 0;
		tmpObj.punteggio_max = 10;
		
		defaultDB.push(tmpObj);
	}
	
	// medici
	objJsonStr = JSON.stringify(dbPrototypeMedico);
	tmpObj = null;
	try {
		tmpObj = JSON.parse(objJsonStr);
	} catch(e) {
	}
	
	if (tmpObj) {
		tmpObj._id = "MEDICO001";
		tmpObj.row_type = "med";
		tmpObj.codice = "MEDICO001";
		tmpObj.nome = "MEDICO 001";
		
		defaultDB.push(tmpObj);
	}
	
	tmpObj = null;
	try {
		tmpObj = JSON.parse(objJsonStr);
	} catch(e) {
	}
	
	if (tmpObj) {
		tmpObj._id = "MEDICO002";
		tmpObj.row_type = "med";
		tmpObj.codice = "MEDICO002";
		tmpObj.nome = "MEDICO 002";
		
		defaultDB.push(tmpObj);
	}
	
	tmpObj = null;
	try {
		tmpObj = JSON.parse(objJsonStr);
	} catch(e) {
	}
	
	if (tmpObj) {
		tmpObj._id = "MEDICO003";
		tmpObj.row_type = "med";
		tmpObj.codice = "MEDICO003";
		tmpObj.nome = "MEDICO 003";
		
		defaultDB.push(tmpObj);
	}
	
	tmpObj = null;
	try {
		tmpObj = JSON.parse(objJsonStr);
	} catch(e) {
	}
	
	if (tmpObj) {
		tmpObj._id = "MEDICO004";
		tmpObj.row_type = "med";
		tmpObj.codice = "MEDICO004";
		tmpObj.nome = "MEDICO 004";
		
		defaultDB.push(tmpObj);
	}
	
	// pazienti
	objJsonStr = JSON.stringify(dbPrototypePaziente);
	tmpObj = null;
	try {
		tmpObj = JSON.parse(objJsonStr);
	} catch(e) {
	}
	
	if (tmpObj) {
		tmpObj._id = "PAZIENTE001";
		tmpObj.row_type = "paz";
		tmpObj.codice = "PAZIENTE001";
		tmpObj.nome = "PAZIENTE 001";
		
		defaultDB.push(tmpObj);
	}
	
	tmpObj = null;
	try {
		tmpObj = JSON.parse(objJsonStr);
	} catch(e) {
	}
	
	if (tmpObj) {
		tmpObj._id = "PAZIENTE002";
		tmpObj.row_type = "paz";
		tmpObj.codice = "PAZIENTE002";
		tmpObj.nome = "PAZIENTE 002";
		
		defaultDB.push(tmpObj);
	}
	
	tmpObj = null;
	try {
		tmpObj = JSON.parse(objJsonStr);
	} catch(e) {
	}
	
	if (tmpObj) {
		tmpObj._id = "PAZIENTE003";
		tmpObj.row_type = "paz";
		tmpObj.codice = "PAZIENTE003";
		tmpObj.nome = "PAZIENTE 003";
		
		defaultDB.push(tmpObj);
	}
}

AppBusinesLogic.initDatabase = function(doReset, callbackMethod) {
	// inizializzo il database PouchDB
	if (logMode) {
		PouchDB.debug.enable('*');
	} else {
		PouchDB.debug.disable();
	}
	
	if (!appPouchDB || doReset) {
		appPouchDB = new PouchDB(DB_NAME);
	}

	if (appPouchDB) {
		appPouchDB.info().then(function (result) {
			if (!doReset) {
				// inizializzo comunque il database nel caso fosse ancora vuoto
				doReset = (!result || !result.doc_count);
			}
			
			if (doReset) {
				appLog('***** doReset');

				appPouchDB.destroy().then(function (response) {
					appLog('destroyed');
					
					appPouchDB = new PouchDB(DB_NAME);
					appLog('recreate Database');
					appLog(appPouchDB);
					
					AppBusinesLogic.createDefaultDbContent();
					
					return appPouchDB.bulkDocs(defaultDB);

				}).then(function(response) {
					AppBusinesLogic.initDatabaseIndex(callbackMethod);

				}).catch(function (err) {
					appLog('************** error');
					console.log(err);
					if (callbackMethod) {
						callbackMethod();
					}
				});
			} else {
				appLog('***** Create Index');
				AppBusinesLogic.initDatabaseIndex(callbackMethod);
			}
		}).catch(function (err) {
			console.log(err);
			if (callbackMethod) {
				callbackMethod();
			}
		});
	}
}

AppBusinesLogic.initDatabaseIndex = function(callbackMethod) {
	// inizializzo gli indici del database
	if (appPouchDB) {
		appPouchDB.createIndex({
			index: {
				fields: ['row_type']
			}
		}).then(function(response) {
			appLog('INDEX created');
			if (callbackMethod) {
				callbackMethod();
			}
		}).catch(function (err) {
			appLog('************** error');
			console.log(err);
			if (callbackMethod) {
				callbackMethod();
			}
		});
	}
}

AppBusinesLogic.storeNewVisite = function(visite, callbackMethod) {
	// memorizzo una nuova visita nel database
	var result = false;
	
	appPouchDB.bulkDocs(visite).then(function(result) {
		if (callbackMethod) {
			callbackMethod(result);
		}

	}).catch(function(err) {		
		appLog(err); 
		if (callbackMethod) {
			callbackMethod(result);
		}
	});
}

AppBusinesLogic.loadAllMedici = function(callbackMethod) {
	// query di tutti i Medici
    var result = false;
	
	appPouchDB.find({
		selector: {
			row_type: 'med'
		}
	}).then(function (result) {
		appLog('+++++++++++++++++++++ loadAllMedici');
		if (callbackMethod) {
			appLog(result);
			callbackMethod(result);
		}

	}).catch(function (err) {
		console.log(err);
		if (callbackMethod) {
			callbackMethod(result);
		}
	});
}

AppBusinesLogic.loadAllPazienti = function(callbackMethod) {
	// query di tutti i Pazienti
    var result = false;
	
	appPouchDB.find({
		selector: {
			row_type: 'paz'
		}
	}).then(function (result) {
		appLog('+++++++++++++++++++++ loadAllPazienti');
		if (callbackMethod) {
			appLog(result);
			callbackMethod(result);
		}

	}).catch(function (err) {
		console.log(err);
		if (callbackMethod) {
			callbackMethod(result);
		}
	});
}

AppBusinesLogic.loadAllEsercizi = function(callbackMethod) {
	// query di tutti gli Esercizi
    var result = false;
	
	appPouchDB.find({
		selector: {
			row_type: 'es'
		}
	}).then(function (result) {
		appLog('+++++++++++++++++++++ loadAllEsercizi');
		if (callbackMethod) {
			appLog(result);
			callbackMethod(result);
		}

	}).catch(function (err) {
		console.log(err);
		if (callbackMethod) {
			callbackMethod(result);
		}
	});
}

AppBusinesLogic.loadAllVisite = function(callbackMethod) {
	// query di tutte le visita effettuate ai pazienti
    var result = false;
	
	appPouchDB.find({
		selector: {
			row_type: 'vis'
		}
	}).then(function (result) {
		if (callbackMethod) {
			callbackMethod(result);
		}

	}).catch(function (err) {
		console.log(err);
		if (callbackMethod) {
			callbackMethod(result);
		}
	});
}