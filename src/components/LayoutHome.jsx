import React from 'react'
import { useSelector } from 'react-redux'
import { Link, Outlet } from 'react-router-dom'
import { selectorBaseCurrency } from 'redux/selectors'

export const LayoutHome = () => {
  const baseCurrency = useSelector(selectorBaseCurrency) ;
  return (
    // <div>LayoutHome</div>
    <div>
    <header>
        <nav>
            <ul>
                <li><Link to={"/"}>Home</Link></li>
                <li><Link to={"rates"}>Rates</Link></li>
            </ul>
        </nav>
        {baseCurrency && <p>Your base currency: {baseCurrency}</p>}
    </header>
    <Outlet/>
    </div>
  )
}
