// appLogopediaGlobalUtility.js

function appAlert(obj) {
	if (debugMode) {
		alert(obj);
	}
}

function appLog(obj) {
	if (logMode) {
		console.log(obj);
	}
}

function removeDupliatedSpaces(str) {
	// first replace all tab with single space
	// then remove all duplicated spaces
	var result = '' + str.replace(/\t/g, ' ');
	result = result.replace(/ +(?= )/g,'');
	return result;
}

function removeAllSpaces(str) {
	var result = '' + str.replace(/\t/g, ' ');
	result = result.replace(/ /g,'');
	return result;
}

function escapeHtml(unsafe) {
    var result = '';
	if (unsafe) {
		result = unsafe.replace(/&/g, "&amp;")
			.replace(/</g, "&lt;")
			.replace(/>/g, "&gt;")
			.replace(/"/g, "&quot;")
			.replace(/'/g, "&#039;");
	}

    return result;
}

function leadingZeroPad(num, size) {
    var result = String(num);
    while (result.length < (size || 2)) {
        result = "0" + result;
    }
    return result;
}

function isValidJsDate(objDate) {
	var result = false;
	
	if (objDate) {
		if (Object.prototype.toString.call(objDate) === "[object Date]") {
		  // it is a date
		  if (isNaN(objDate.getTime())) { // objDate.valueOf() could also work
			  appLog('NOT A DATE WITH TIME');
			  appLog(objDate);
		  } else {
			result = true;
		  }
		} else {
		  appLog('NOT A DATE');
		  appLog(objDate);
		}
	}

	return result;
}

function jsDateToItalian(jsDate, withTime, onlyTime) {
	var result = null;
	
	var dayPart;
	var monthPart;
	var yearPart;
	var hourPart = 0;
	var minutePart = 0;
	var secondsPart = 0;
	
	//appLog('jsDateToItalian ENTER');
	if (isValidJsDate(jsDate)) {
		yearPart = jsDate.getFullYear();
		monthPart = jsDate.getMonth() + 1;
		dayPart = jsDate.getDate();

		if (withTime) {
			hourPart = jsDate.getHours();
			minutePart = jsDate.getMinutes();
			secondsPart = jsDate.getSeconds();
		}
		
		if (withTime && onlyTime) {
			result = leadingZeroPad(hourPart, 2);
			result += ':' + leadingZeroPad(minutePart, 2);
			result += ':' + leadingZeroPad(secondsPart, 2);
		} else {
			result = leadingZeroPad(dayPart, 2);
			result += '/' + leadingZeroPad(monthPart, 2);
			result += '/' + yearPart.toString();

			if (withTime) {
				result += ' ' + leadingZeroPad(hourPart, 2);
				result += ':' + leadingZeroPad(minutePart, 2);
				result += ':' + leadingZeroPad(secondsPart, 2);
			}
		}
	}

	//appLog('jsDateToItalian: ' + result);
	return result;
}

// Metodi che costrusicono l'html necessario per i vari Dialog di Framework7
function codeWriteErrorInstancingDialogUI() {
	document.writeln('<div id="dialog_error_instancing" name="dialog_error_instancing" class="dialog no-hairlines" style="display: none;">');
	document.writeln('    <div class="block block-strong no-hairlines" style="text-align: center;">');
	document.writeln('        <p class="row">');
	document.writeln(AppText.TXT_ERROR_INSTANCING_DIALOG_MSG);
	document.writeln('        </p>');
	document.writeln('        <p class="row">');
	document.writeln('            <button class="col button button-big button-fill button-raised button-outline color-white text-color-blue"');
	document.writeln('                    onclick="app.dialog.close($(\'#dialog_error_instancing\'), true);">' + AppText.TXT_CLOSE);
	document.writeln('            </button>');
	document.writeln('        </p>');
	document.writeln('    </div>');
	document.writeln('</div>');
}

function codeWriteNullArchiveDialogUI() {
	document.writeln('<div id="dialog_null_archive" name="dialog_null_archive" class="dialog no-hairlines" style="display: none;">');
	document.writeln('    <div class="block block-strong no-hairlines" style="text-align: center;">');
	document.writeln('        <p class="row">');
	document.writeln(AppText.TXT_NULL_DB_DIALOG_MSG);
	document.writeln('        </p>');
	document.writeln('        <p class="row">');
	document.writeln('            <button class="col button button-big button-fill button-raised button-outline color-white text-color-blue"');
	document.writeln('                    onclick="app.dialog.close($(\'#dialog_null_archive\'), true);">' + AppText.TXT_CLOSE);
	document.writeln('            </button>');
	document.writeln('        </p>');
	document.writeln('    </div>');
	document.writeln('</div>');
}

function codeWriteArchiveLoadedDialogUI() {
	document.writeln('<div id="dialog_archive_loaded" name="dialog_archive_loaded" class="dialog no-hairlines" style="display: none;">');
	document.writeln('    <div class="block block-strong no-hairlines" style="text-align: center;">');
	document.writeln('        <p class="row">');
	document.writeln(AppText.TXT_ARCHIVE_LOADED_DIALOG_MSG);
	document.writeln('        </p>');
	document.writeln('        <p class="row">');
	document.writeln('            <button class="col button button-big button-fill button-raised button-outline color-white text-color-blue"');
	document.writeln('                    onclick="app.dialog.close($(\'#dialog_archive_loaded\'), true);">' + AppText.TXT_CLOSE);
	document.writeln('            </button>');
	document.writeln('        </p>');
	document.writeln('    </div>');
	document.writeln('</div>');
}

function codeWriteArchiveRevertedDialogUI() {
	document.writeln('<div id="dialog_archive_reverted" name="dialog_archive_reverted" class="dialog no-hairlines" style="display: none;">');
	document.writeln('    <div class="block block-strong no-hairlines" style="text-align: center;">');
	document.writeln('        <p class="row">');
	document.writeln(AppText.TXT_ARCHIVE_REVERTED_DIALOG_MSG);
	document.writeln('        </p>');
	document.writeln('        <p class="row">');
	document.writeln('            <button class="col button button-big button-fill button-raised button-outline color-white text-color-blue"');
	document.writeln('                    onclick="app.dialog.close($(\'#dialog_archive_reverted\'), true);">' + AppText.TXT_CLOSE);
	document.writeln('            </button>');
	document.writeln('        </p>');
	document.writeln('    </div>');
	document.writeln('</div>');
}

function codeWriteStoreVisiteDoneDialogUI() {
	document.writeln('<div id="dialog_store_visite_done" name="dialog_store_visite_done" class="dialog no-hairlines" style="display: none;">');
	document.writeln('    <div class="block block-strong no-hairlines" style="text-align: center;">');
	document.writeln('        <p class="row">');
	document.writeln(AppText.TXT_STORE_VISITS_DONE_DIALOG_MSG);
	document.writeln('        </p>');
	document.writeln('        <p class="row">');
	document.writeln('            <button class="col button button-big button-fill button-raised button-outline color-white text-color-blue"');
	document.writeln('                    onclick="app.dialog.close($(\'#dialog_store_visite_done\'), true);">' + AppText.TXT_CLOSE);
	document.writeln('            </button>');
	document.writeln('        </p>');
	document.writeln('    </div>');
	document.writeln('</div>');
}

function codeWriteStoreVisiteErrorDialogUI() {
	document.writeln('<div id="dialog_store_visite_error" name="dialog_store_visite_error" class="dialog no-hairlines" style="display: none;">');
	document.writeln('    <div class="block block-strong no-hairlines" style="text-align: center;">');
	document.writeln('        <p class="row">');
	document.writeln(AppText.TXT_STORE_VISITS_ERROR_DIALOG_MSG);
	document.writeln('        </p>');
	document.writeln('        <p class="row">');
	document.writeln('            <button class="col button button-big button-fill button-raised button-outline color-white text-color-blue"');
	document.writeln('                    onclick="app.dialog.close($(\'#dialog_store_visite_error\'), true);">' + AppText.TXT_CLOSE);
	document.writeln('            </button>');
	document.writeln('        </p>');
	document.writeln('    </div>');
	document.writeln('</div>');
}

function codeWriteLoadVisiteErrorDialogUI() {
	document.writeln('<div id="dialog_load_visite_error" name="dialog_load_visite_error" class="dialog no-hairlines" style="display: none;">');
	document.writeln('    <div class="block block-strong no-hairlines" style="text-align: center;">');
	document.writeln('        <p class="row">');
	document.writeln(AppText.TXT_LOAD_VISITS_ERROR_DIALOG_MSG);
	document.writeln('        </p>');
	document.writeln('        <p class="row">');
	document.writeln('            <button class="col button button-big button-fill button-raised button-outline color-white text-color-blue"');
	document.writeln('                    onclick="app.dialog.close($(\'#dialog_load_visite_error\'), true);">' + AppText.TXT_CLOSE);
	document.writeln('            </button>');
	document.writeln('        </p>');
	document.writeln('    </div>');
	document.writeln('</div>');
}

function codeWriteLoadMediciErrorDialogUI() {
	document.writeln('<div id="dialog_load_medici_error" name="dialog_load_medici_error" class="dialog no-hairlines" style="display: none;">');
	document.writeln('    <div class="block block-strong no-hairlines" style="text-align: center;">');
	document.writeln('        <p class="row">');
	document.writeln(AppText.TXT_LOAD_MEDICI_ERROR_DIALOG_MSG);
	document.writeln('        </p>');
	document.writeln('        <p class="row">');
	document.writeln('            <button class="col button button-big button-fill button-raised button-outline color-white text-color-blue"');
	document.writeln('                    onclick="app.dialog.close($(\'#dialog_load_medici_error\'), true);">' + AppText.TXT_CLOSE);
	document.writeln('            </button>');
	document.writeln('        </p>');
	document.writeln('    </div>');
	document.writeln('</div>');
}

function codeWriteLoadPazientiErrorDialogUI() {
	document.writeln('<div id="dialog_load_pazienti_error" name="dialog_load_pazienti_error" class="dialog no-hairlines" style="display: none;">');
	document.writeln('    <div class="block block-strong no-hairlines" style="text-align: center;">');
	document.writeln('        <p class="row">');
	document.writeln(AppText.TXT_LOAD_PAZIENTI_ERROR_DIALOG_MSG);
	document.writeln('        </p>');
	document.writeln('        <p class="row">');
	document.writeln('            <button class="col button button-big button-fill button-raised button-outline color-white text-color-blue"');
	document.writeln('                    onclick="app.dialog.close($(\'#dialog_load_pazienti_error\'), true);">' + AppText.TXT_CLOSE);
	document.writeln('            </button>');
	document.writeln('        </p>');
	document.writeln('    </div>');
	document.writeln('</div>');
}

function codeWriteLoadEserciziErrorDialogUI() {
	document.writeln('<div id="dialog_load_esercizi_error" name="dialog_load_esercizi_error" class="dialog no-hairlines" style="display: none;">');
	document.writeln('    <div class="block block-strong no-hairlines" style="text-align: center;">');
	document.writeln('        <p class="row">');
	document.writeln(AppText.TXT_LOAD_ESERCIZI_ERROR_DIALOG_MSG);
	document.writeln('        </p>');
	document.writeln('        <p class="row">');
	document.writeln('            <button class="col button button-big button-fill button-raised button-outline color-white text-color-blue"');
	document.writeln('                    onclick="app.dialog.close($(\'#dialog_load_esercizi_error\'), true);">' + AppText.TXT_CLOSE);
	document.writeln('            </button>');
	document.writeln('        </p>');
	document.writeln('    </div>');
	document.writeln('</div>');
}

function codeWriteResetDatabaseDialogUI() {
	document.writeln('<div id="dialog_reset_database" name="dialog_reset_database" class="dialog no-hairlines" style="display: none;">');
	document.writeln('    <div class="block block-strong no-hairlines" style="text-align: center;">');
	document.writeln('        <p class="row">');
	document.writeln(AppText.TXT_RESET_DB_DIALOG_MSG);
	document.writeln('        </p>');
	document.writeln('        <p class="row">');
	document.writeln('            <button class="col button button-big button-fill color-blue"');
	document.writeln('                    onclick="AppBusinesLogic.initDatabase(true, callBackResetDatabase); app.dialog.close($(\'#dialog_reset_database\'), true);">' + AppText.TXT_OK);
	document.writeln('            </button>');
	document.writeln('            <button class="col button button-big button-fill button-raised button-outline color-white text-color-blue"');
	document.writeln('                    onclick="app.dialog.close($(\'#dialog_reset_database\'), true);">' + AppText.TXT_CANCEL);
	document.writeln('            </button>');
	document.writeln('        </p>');
	document.writeln('    </div>');
	document.writeln('</div>');
}