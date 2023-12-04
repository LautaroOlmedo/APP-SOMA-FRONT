import React from 'react'
import { Card, Col } from 'react-bootstrap'
import { CiCircleCheck, CiCircleInfo } from 'react-icons/ci';

function TransaccionReciente() {
	const cobranzas = [
		{
		  id: 1,
		  title: "Cobranza por venta",
		  fecha: '25 septiembre 2023',
		  hora: '08:20 AM',
		  monto: '$312.312',
		  estado: 'Pendiente',
		},
		{
		  id: 2,
		  title: "Cobranza por venta",
		  fecha: '25 septiembre 2023',
		  hora: '08:20 AM',
		  monto: '$312.312',
		  estado: 'Realizada',
		},
		{
		  id: 3,
		  title: "Cobranza por venta",
		  fecha: '25 septiembre 2023',
		  hora: '08:20 AM',
		  monto: '$312.312',
		  estado: 'Realizada',
		},
		{
		  id: 4,
		  title: "Cobranza por venta",
		  fecha: '25 septiembre 2023',
		  hora: '08:20 AM',
		  monto: '$312.312',
		  estado: 'Pendiente',
		},
	  ];
  return (
	<Col sm={8} style={{ border: "1px solid black", marginRight: "20px", width: "100%" }}>
            <Card>
              <Card.Body>
                <Card.Text>
                  <h6 style={{ marginLeft: "20px" }}>Transacciones Recientes</h6>
                  <div style={{ display: "flex", justifyContent: "flex-end", alignItems: "center", marginRight: "20px" }}>
                    <input type="text" placeholder="Buscar..."  />
                    <select style={{ marginLeft: "10px" }}>
                      <option value="7">📅 Últimos 7 días</option>
                      <option value="15">📅 Últimos 15 días</option>
                      <option value="21">📅 Últimos 21 días</option>
                      <option value="30">📅 Últimos 30 días</option>
                    </select>
                  </div>


                  <div style={{ marginLeft: "20px", marginRight: "20px" }}>
                    {cobranzas.map((cobranza) => (
                      <div key={cobranza.id} style={{ display: "flex", marginTop: "20px" }}>
                        {/* Primera columna (Estado) */}
                        <div style={{ flex: "0 0 auto", marginRight: "30px", marginTop: "10px" }}>
                          <div>
                            {cobranza.estado === "Pendiente" ? <CiCircleInfo /> : <CiCircleCheck />}
                          </div>
                        </div>

                        {/* Segunda columna (Título y fecha) */}
                        <div style={{ flex: "1 1 auto", marginRight: "20px" }}>
                          <div style={{ fontSize: "1.2em" }}>{cobranza.title}</div>
                          <div style={{ fontSize: "0.8em", color: "#888" }}>{cobranza.fecha}, {cobranza.hora}</div>
                        </div>

                        {/* Tercera columna (Monto) */}
                        <div style={{ flex: "0 0 auto" }}>
                          {cobranza.estado === "Pendiente" && (
                            <div style={{ fontSize: "0.8em", textAlign: "right", color: "#888" }}>Pendiente</div>
                          )}
                          <div style={{ fontSize: "1.2em", textAlign: "right" }}>{cobranza.monto}</div>
                        </div>
                      </div>
                    ))}
                  </div>

                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
  )
}

export default TransaccionReciente
