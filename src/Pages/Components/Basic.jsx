import React, { useEffect, useState } from "react";
const Basic = () => {
  const [importe, setImporte] = useState("");
  const [igv, setIGV] = useState("");
  const [total, setTotal] = useState();

  // text
  const [toText, settoText] = useState();

  useEffect(() => {
    settoText(convertNumberToText());
  }, [total]);

  const handleImporteChange = (e) => {
    var docBasevalue = e.target.value;
    setImporte(docBasevalue);
    var docIVAvalue = (docBasevalue * ((100 + 18) / 100 - 1)).toFixed(2);
    setIGV(docIVAvalue);
    var docTotalvalue = (1 * docBasevalue + 1 * docIVAvalue).toFixed(2);
    setTotal(docTotalvalue);
  };

  const handleIGVChange = (e) => {
    var docIVAvalue = e.target.value;
    setIGV(docIVAvalue);
    var docBasevalue = ((docIVAvalue * 100) / 18).toFixed(2);
    setImporte(docBasevalue);
    var docTotalvalue = (1 * docBasevalue + 1 * docIVAvalue).toFixed(2);
    setTotal(docTotalvalue);
  };

  const handleTotalChange = (e) => {
    var docTotalvalue = e.target.value;
    setTotal(docTotalvalue);
    var docBasevalue = ((docTotalvalue / (100 + 18)) * 100).toFixed(2);
    setImporte(docBasevalue);
    var docIVAvalue = (1 * docTotalvalue - 1 * docBasevalue).toFixed(2);
    setIGV(docIVAvalue);
  };
  const convertNumberToText = () => {
    var amount = total;
    if (!amount) return;
    var value;
    var words = new Array();
    words[0] = "";
    words[1] = "Uno";
    words[2] = "Dos";
    words[3] = "Tres";
    words[4] = "Cuatro";
    words[5] = "Cinco";
    words[6] = "Seis";
    words[7] = "Siete";
    words[8] = "Ocho";
    words[9] = "Nueve";
    words[10] = "Diez";
    words[11] = "Once";
    words[12] = "Doce";
    words[13] = "Trece";
    words[14] = "Catorce";
    words[15] = "Quince";
    words[16] = "Dieciséis";
    words[17] = "Diecisiete";
    words[18] = "Dieciocho";
    words[19] = "Diecinueve";
    words[20] = "Veinte";
    words[30] = "Treinta";
    words[40] = "Cuarenta";
    words[50] = "Cincuenta";
    words[60] = "Sesenta";
    words[70] = "Setenta";
    words[80] = "Ochenta";
    words[90] = "Noventa";
    amount = amount.toString();
    var atemp = amount.split(".");
    var number = atemp[0].split(",").join("");
    var n_length = number.length;
    var words_string = "";
    if (n_length <= 9) {
      var n_array = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0);
      var received_n_array = new Array();
      for (var i = 0; i < n_length; i++) {
        received_n_array[i] = number.substr(i, 1);
      }
      for (var i = 9 - n_length, j = 0; i < 9; i++, j++) {
        n_array[i] = received_n_array[j];
      }
      for (var i = 0, j = 1; i < 9; i++, j++) {
        if (i == 0 || i == 2 || i == 4 || i == 7) {
          if (n_array[i] == 1) {
            n_array[j] = 10 + parseInt(n_array[j]);
            n_array[i] = 0;
          }
        }
      }
      value = "";
      for (var i = 0; i < 9; i++) {
        if (i == 0 || i == 2 || i == 4 || i == 7) {
          value = n_array[i] * 10;
        } else {
          value = n_array[i];
        }
        if (value != 0) {
          words_string += words[value] + " ";
        }
        if (
          (i == 1 && value != 0) ||
          (i == 0 && value != 0 && n_array[i + 1] == 0)
        ) {
          words_string += "Millones ";
        }
        if (
          (i == 3 && value != 0) ||
          (i == 2 && value != 0 && n_array[i + 1] == 0)
        ) {
          words_string += "Cientos mil ";
        }
        if (
          (i == 5 && value != 0) ||
          (i == 4 && value != 0 && n_array[i + 1] == 0)
        ) {
          words_string += "Mil ";
        }
        if (
          i == 6 &&
          value != 0 &&
          n_array[i + 1] != 0 &&
          n_array[i + 2] != 0
        ) {
          words_string += "Ciento ";
        } else if (i == 6 && value != 0) {
          words_string += "Cien ";
        }
      }
      words_string = words_string.split("  ").join(" ");
    }

    var decNumber = total.toString();
    decNumber = decNumber.split(".")[1];
    var result =
      words_string + ` CON  ${decNumber ? decNumber : "00"} /100 SOLES`;
    return words_string ? result : "";
  };

  return (
    <div className="row">
      <div className="col-md-4 offset-md-4">
        <div className="three_block">
          <div className="input_group">
            <label htmlFor="">Importe</label>
            <input
              onBlur={(e) => setImporte((1 * importe).toFixed(2))}
              type="number"
              className="form-control"
              value={importe}
              onChange={handleImporteChange}
            />
          </div>
          <div className="input_group">
            <label htmlFor="">IGV 18%</label>
            <input
              onBlur={(e) => setIGV((1 * igv).toFixed(2))}
              type="number"
              className="form-control"
              value={igv}
              onChange={handleIGVChange}
            />
          </div>
          <div className="input_group">
            <label htmlFor="">S/.</label>
            <input
              onBlur={(e) => setTotal((1 * total).toFixed(2))}
              type="number"
              className="form-control"
              value={total}
              onChange={handleTotalChange}
            />
          </div>
        </div>
      </div>
      {toText ? (
        <div className="col-md-8 offset-md-2 th_footer">
          <p style={{ textTransform: "uppercase" }}> {toText} </p>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Basic;
