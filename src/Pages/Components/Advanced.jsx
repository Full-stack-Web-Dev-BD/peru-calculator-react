import React, { useEffect, useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";

const Advanced = () => {
  const [subTotal, setsubTotal] = useState(0);
  const [IVG, setIVG] = useState(0);
  const [total, settotal] = useState(0);
  const [tableCalculatorData, setTableCalculatorData] = useState([]);
  const [totext, settotext] = useState();
  useEffect(() => {
    settotext(convertNumberToText());
  }, [total]);

  const addRow = () => {
    setTableCalculatorData([...tableCalculatorData, {}]);
  };
  const updateRowData = (key, index, value) => {
    var existingData = [...tableCalculatorData];
    const mvalue = parseFloat(value);
    if (!isNaN(mvalue)) {
      existingData[index][key] = mvalue.toFixed(2);
      setTableCalculatorData(existingData);
      calculateResult();
    }
  };

  const calculateResult = (data) => {
    if (data) {
      var tSubTotal = 0;
      data.map((row, index) => {
        if (row.CANTIDAD && row.PRECIO) {
          tSubTotal += row.CANTIDAD * row.PRECIO;
        }
      });
      setsubTotal(tSubTotal.toFixed(2));
      calculateValues(tSubTotal);
    } else {
      var tSubTotal = 0;
      tableCalculatorData.map((row, index) => {
        if (row.CANTIDAD && row.PRECIO) {
          tSubTotal += row.CANTIDAD * row.PRECIO;
        }
      });
      setsubTotal(tSubTotal.toFixed(2));
      calculateValues(tSubTotal);
    }
  };
  const calculateValues = (total) => {
    const igvPercentage = 18;
    const igv = total * (igvPercentage / 100);
    setIVG(igv.toFixed(2));
    settotal((total + igv).toFixed(2));
  };
  function removeItem(index) {
    setTableCalculatorData((prevData) => {
      const newData = [...prevData];
      newData.splice(index, 1);
      calculateResult(newData);
      return newData;
    });
  }

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
    var result = words_string + ` CON  ${decNumber} /100 SOLES`;
    return words_string ? result : "";
  };
  return (
    <div className="row">
      <div className="col-12">
        <div className="text-right">
          <img
            onClick={(e) => window.location.reload()}
            src={require("../reload.png")}
            className="cp"
            alt=""
          />
        </div>
      </div>
      <div className="col-md-8 offset-md-2">
        <div className="table_calculator">
          <div class="table-responsive">
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">
                    <span>DESCRIPCION</span>
                  </th>
                  <th scope="col">
                    <span>CANTIDAD</span>
                  </th>
                  <th scope="col">
                    <span>PRECIO UNIT.</span>
                  </th>
                  <th scope="col">
                    <span>CANTIDAD x</span> <span>PRECIO UNIT.</span>
                  </th>
                  <th scope="col"></th>
                </tr>
              </thead>
              <tbody>
                {tableCalculatorData.map((item, i) => (
                  <tr className="acc_row" key={i}>
                    <td scope="row" className="desc">
                      <p>
                        <input
                          onChange={(e) =>
                            updateRowData("DESCRIPCION", i, e.target.value)
                          }
                          type="text"
                          value={item.DESCRIPCION}
                          placeholder="Description"
                          style={{ textAlign: "left" }}
                          className="form-control box_input"
                        />
                      </p>
                    </td>
                    <td>
                      <p>
                        <input
                          onChange={(e) =>
                            updateRowData("CANTIDAD", i, e.target.value)
                          }
                          placeholder="0"
                          value={item.CANTIDAD}
                          type="number"
                          className="form-control box_input"
                        />
                      </p>
                    </td>
                    <td>
                      <p>
                        <input
                          onChange={(e) =>
                            updateRowData("PRECIO", i, e.target.value)
                          }
                          value={item.PRECIO}
                          placeholder="0"
                          type="number"
                          className="form-control box_input"
                        />
                      </p>
                    </td>
                    <td>
                      <p>
                        <input
                          value={
                            item.CANTIDAD * item.PRECIO
                              ? (item.CANTIDAD * item.PRECIO).toFixed(2)
                              : "0"
                          }
                          type="text"
                          placeholder="0"
                          className="form-control box_input"
                        />
                      </p>
                    </td>
                    <td className="delete_img">
                      <img
                        onClick={(e) => removeItem(i)}
                        src={require("../delete.png")}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="result">
          <div className="single_result mb-2">
            <button className="btn" onClick={(e) => addRow()}>
              <span>
                <AiOutlinePlus />
              </span>
              Add Row
            </button>
            <h3>SUB TOTAL</h3>
            <input type="text" value={subTotal} className="form-control" />
          </div>
          <div className="single_result mb-2">
            <h3>IGV 18%</h3>
            <input type="text" value={IVG} className="form-control" />
          </div>
          <div className="single_result mb-2">
            <h3>TOTAL S/.</h3>
            <input value={total} type="text" className="form-control" />
          </div>
        </div>
        {totext ? (
          <div
            className="mb-5 th_footer "
            style={{ marginRight: "20px", marginLeft: "15px" }}
          >
            <p style={{ textTransform: "uppercase" }}> {totext} </p>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Advanced;
