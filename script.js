function updateComuni(prov) {
    const map = {
        milano: ['Milano Centro', 'Rho', 'Cinisello Balsamo'],
        pavia: ['Pavia Centro', 'Vigevano', 'Voghera'],
        bergamo: ['Treviglio', 'Seriate', 'Dalmine']
    };

    const comuneSelect = document.getElementById('comune');

    // Se non è stata scelta una provincia
    if (!prov) {
        comuneSelect.disabled = true;
        comuneSelect.innerHTML = '<option value="">Seleziona comune...</option>';
        return;
    }

    // Provincia valida
    comuneSelect.disabled = false;
    comuneSelect.innerHTML = '<option value="">Seleziona comune...</option>';

    for (let c of map[prov]) {
        const option = document.createElement("option");
        option.value = c;
        option.textContent = c;
        comuneSelect.appendChild(option);
    }
}

function genera() {
    // NOME
    let nome = document.getElementById("nome").value || "";
    if (nome.trim() === "") {
        document.getElementById("nome-risultato").innerText = "nome non inserito";
    } else {
        document.getElementById("nome-risultato").innerText = nome;
    }

    // COGNOME
    let cognome = document.getElementById("cognome").value || "";
    if (cognome.trim() === "") {
        document.getElementById("cognome-risultato").innerText = "cognome non inserito";
    } else {
        document.getElementById("cognome-risultato").innerText = cognome;
    }

    // INDIRIZZO
    let indirizzo = document.getElementById("indirizzo").value || "";
    if (indirizzo.trim() === "") {
        document.getElementById("indirizzo-risultato").innerText = "indirizzo non inserito";
    } else {
        document.getElementById("indirizzo-risultato").innerText = indirizzo;
    }

    // ANNO
    let anno = (document.getElementById("anno").value || "").trim();
    if (anno === "") {
        document.getElementById("anno-risultato").innerText = "anno non inserito";
        document.getElementById("generazione-risultato").innerText = "";
    } else {
        document.getElementById("anno-risultato").innerText = anno;

        // GENERAZIONE
        let annoGen = parseInt(anno, 10);
        let generazione = "";

        if (isNaN(annoGen)) {
            generazione = "Inserisci un anno valido.";
        } else if (annoGen >= 1901 && annoGen <= 1927) {
            generazione = "Greatest Generation";
        } else if (annoGen >= 1928 && annoGen <= 1945) {
            generazione = "Generazione Silenziosa";
        } else if (annoGen >= 1946 && annoGen <= 1964) {
            generazione = "Baby Boomers";
        } else if (annoGen >= 1965 && annoGen <= 1980) {
            generazione = "Generazione X";
        } else if (annoGen >= 1981 && annoGen <= 1996) {
            generazione = "Millennials";
        } else if (annoGen >= 1997 && annoGen <= 2012) {
            generazione = "Generazione Z";
        } else if (annoGen >= 2013) {
            generazione = "Generazione Alpha";
        }

        document.getElementById("generazione-risultato").innerText = generazione;
    }

    // SESSO
    const sessoNodes = document.getElementsByName("sesso");
    let sesso = "";
    for (let i = 0; i < sessoNodes.length; i++) {
        if (sessoNodes[i].checked) {
            sesso = sessoNodes[i].value;
            break;
        }
    }
    document.getElementById("sesso-risultato").innerText = sesso ? sesso : "sesso non selezionato";

    // VEICOLI
    let veicoli = [];
    let checkboxes = document.querySelectorAll('input[name="veicolo"]:checked');
    for (let i = 0; i < checkboxes.length; i++) {
        veicoli.push(checkboxes[i].value);
    }
    document.getElementById("veicoli-risultato").innerText = veicoli.length ? veicoli.join(", ") : "nessun veicolo selezionato";

    // PROVENIENZA
    let provincia = (document.getElementById("prov").value || "").trim();
    let comune = (document.getElementById("comune").value || "").trim();

    if (!provincia) {
        document.getElementById("provenienza-risultato").innerText = "Provincia non selezionata";
    } else if (!comune) {
        document.getElementById("provenienza-risultato").innerText = "Comune non selezionato";
    } else {
        document.getElementById("provenienza-risultato").innerText = provincia + " - " + comune;
    }

    // SPORT (select multiple)
    var options = document.forms.MyForm.sport.options;
    var selectedOptions = [];
    for (var i = 0; i < options.length; i++) {
        if (options[i].selected) {
            selectedOptions.push(options[i].value);
        }
    }
    document.getElementById("sport-risultato").innerText = selectedOptions.length ? selectedOptions.join(",") : "nessuno sport selezionato";
}
