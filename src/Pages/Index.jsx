import React, { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import "./style.css";
const Index = () => {
  const [tableCalculatorData, setTableCalculatorData] = useState([
    {
      DESCRIPCION: "Descriptions is ",
      CANTIDAD: "3241",
      PRECIO: "3241",
      CANTIDAD_PRECIO: "3241",
    },
  ]);
  const addRow = () => {
    setTableCalculatorData([...tableCalculatorData, {}]);
  };
  const updateRowData = (key, index, value) => {
    var existingData = [...tableCalculatorData];
    existingData[index][key]=value;
    console.log(existingData)
    setTableCalculatorData(existingData)

  };
  return (
    <div>
      <div className="container top_content">
        <div className="header">
          <h3>IGV PERU</h3>
        </div>
        <div className="row">
          <div className="col-md-4 offset-md-4">
            <div className="three_block">
              <div className="input_group">
                <label htmlFor="">Importe</label>
                <input type="number" className="form-control" />
              </div>
              <div className="input_group">
                <label htmlFor="">.G.V. 18%</label>
                <input type="number" className="form-control" />
              </div>
              <div className="input_group">
                <label htmlFor="">S/.</label>
                <input type="number" className="form-control" />
              </div>
            </div>
          </div>
          <div className="col-md-8 offset-md-2 th_footer">
            <p>CIENTO DIECIOCHO Y 00/100 NUEVO SOLES</p>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="text-right">
              <img
                onClick={(e) => window.location.reload()}
                src={require("./reload.png")}
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
                      <tr className="acc_row">
                        <td scope="row" className="desc">
                          <p>
                            <input
                              onChange={(e) => updateRowData("DESCRIPCION", i, e.target.value)}
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
                              onChange={(e) => updateRowData("CANTIDAD", i, e.target.value)}
                              placeholder="234"
                              value={item.CANTIDAD}
                              type="number"
                              className="form-control box_input"
                            />
                          </p>
                        </td>
                        <td>
                          <p>
                            <input
                              onChange={(e) => updateRowData("PRECIO", i, e.target.value)}
                              value={item.PRECIO}
                              placeholder="752"
                              type="number"
                              className="form-control box_input"
                            />
                          </p>
                        </td>
                        <td>
                          <p>
                            <input
                              onChange={(e) =>
                                updateRowData("CANTIDAD_PRECIO", i, e.target.value)
                              }
                              value={item.CANTIDAD_PRECIO}
                              type="number"
                              placeholder="329"
                              className="form-control box_input"
                            />
                          </p>
                        </td>
                        <td className="delete_img">
                          <img src={require("./delete.png")} />
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
                <input type="text" className="form-control" />
              </div>
              <div className="single_result mb-2">
                <h3>IGV 18%</h3>
                <input type="text" className="form-control" />
              </div>
              <div className="single_result mb-2">
                <h3>TOTAL S/.</h3>
                <input type="text" className="form-control" />
              </div>
            </div>

            <div
              className="mb-5 th_footer "
              style={{ marginRight: "20px", marginLeft: "15px" }}
            >
              <p>CIENTO DIECIOCHO Y 00/100 NUEVO SOLES</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
