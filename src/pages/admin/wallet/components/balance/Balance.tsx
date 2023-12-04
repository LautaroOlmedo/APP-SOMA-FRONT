import React from 'react'
import { Card, Col } from 'react-bootstrap'
import { BsEyeFill } from 'react-icons/bs'
import { CiPaperplane } from 'react-icons/ci'
import { FiCircle } from 'react-icons/fi'
import { GoX } from 'react-icons/go'

function Balance() {
  return (
	<Col sm={4} style={{ border: "1px solid black", marginLeft: "20px" }}>
            <Card style={{ width: '18rem' }}>
              <Card.Body>
                <Card.Title style={{ textAlign: "center", fontSize: "18px", marginTop: "20px" }}>BALANCE TOTAL</Card.Title>
                <Card.Text>
                  <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <span style={{ textAlign: "center", fontSize: "38px", marginBottom: "15px" }}>$362,92</span>
                    <BsEyeFill style={{ width: "25px", height: "25px", marginBottom: "15px", marginLeft: "10px" }} />
                  </div>
                  <div style={{ display: "flex", justifyContent: "center", fontSize: "15px" }}>$192.232 a liquidar</div>
                  <div style={{ display: "flex", justifyContent: "center", marginTop: "30px" }}>
                    {/* Icono 1 - Agregar */}
                    <div style={{ textAlign: "center", marginRight: "20px" }}>
                      <div style={{ backgroundColor: "white", borderRadius: "5px", padding: "5px", marginBottom: "5px" }}>
                        <FiCircle style={{ width: "25px", height: "25px", color: "green" }} />
                      </div>
                      <span style={{ fontSize: "12px" }}>Agregar</span>
                    </div>

                    {/* Icono 2 - Traspaso */}
                    <div style={{ textAlign: "center", marginRight: "20px", transform: "translateX(-10px)" }}>
                      <div style={{ backgroundColor: "white", borderRadius: "5px", padding: "5px", marginBottom: "5px" }}>
                        <CiPaperplane style={{ width: "25px", height: "25px", color: "blue" }} />
                      </div>
                      <span style={{ fontSize: "12px", color: "blue" }}>Traspaso</span>
                    </div>

                    {/* Icono 3 - Salida */}
                    <div style={{ textAlign: "center" }}>
                      <div style={{ backgroundColor: "white", borderRadius: "5px", padding: "5px", marginBottom: "5px" }}>
                        <GoX style={{ width: "25px", height: "25px", color: "red" }} />
                      </div>
                      <span style={{ fontSize: "12px" }}>Salida</span>
                    </div>
                  </div>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
  )
}

export default Balance
