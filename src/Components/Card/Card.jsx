import React, { useState } from "react";
import { myData } from "../../util";
import "./Card.css"
import { Select } from "../../Select/Select";



const Card = () => {
  const names = myData.getData().map(o => o.name)
  const filtered = myData.getData().filter(({ name }, index) => !names.includes(name, index + 1))


  const sum = filtered.map(datum => datum.rs).reduce((a, b) => a + b, 0)
  const [rep, setrep] = useState(sum)
  const [curr, setcurr] = useState(filtered)

  return (
    <>
      {
        curr.map((item, index) => <PriceCard index={index} item={item} rep={rep} setrep={setrep} sum={sum} setcurr={setcurr} curr={curr} filtered={filtered} />)
      }
    </>
  )
}

export default Card


const PriceCard = ({ rep, item, index, setrep, setcurr, curr, filtered }) => {
  return <div className="price-de">
    <div><Select data={item} name={setrep} add={rep} ppp={setcurr} lll={curr} /></div>
    {
      index === 0 && <div className="price">
        <div className="pp">PRICE DETAILS</div>
        <hr style={{ backgroundColor: "white", marginTop: "10px" }}></hr>
        <div style={{ marginTop: "3rem", display: "flex", justifyContent: "space-between" }} className="items">
          <div>Price ({filtered.length} item)   </div>
          <div> Rs {rep}</div>
        </div>
        <div style={{ marginTop: "3rem", display: "flex", justifyContent: "space-between" }} className="items">
          <div>Delivery Charges   </div>
          <div style={{ color: "green", fontWeight: "bold" }}>Free</div>
        </div>
        <hr style={{ backgroundColor: "white", marginTop: "3rem" }}></hr>

        <div style={{ marginTop: "3rem", display: "flex", justifyContent: "space-between" }} className="items itemss">
          <div>Total Amount   </div>
          <div >Rs {rep}</div>
        </div>

      </div>
    }
  </div>
}