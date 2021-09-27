import React, {createContext, useEffect, useState} from 'react'
import axios from 'axios'

const ServicesContext = createContext()

const ContextProvider = ({children}) => {
    const [services, setServices] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        axios.get('https://docs.google.com/spreadsheets/d/1m6mDQO5iokoBoNCUEeY4rS0mOjJwBBijhd1Nzd1OxDE/gviz/tq?tqx=out')
        .then(res => {
            const rawData = res.data.split("/*O_o*/\ngoogle.visualization.Query.setResponse(").pop().split(");")[0]
            const data  = JSON.parse(rawData)
            // console.log(data)
            // const headers = data.table.cols.map(e => e.label)
            const rows = data.table.rows
            // console.log(rows)
            const headers = [rows[0].c[0].v, rows[0].c[1].v, rows[0].c[2].v, rows[0].c[3].v]
            const actualData = []
            rows.forEach((e, idx) => {
                if(idx !== 0) {
                let temp = {}
                headers.forEach((head, i) => {
                    temp[head] = e.c[i].v
                })
                actualData.push(temp)
                }
            })
            // console.log(actualData)
            if (actualData.length > 0) {
                setServices(actualData)
                setLoading(false)
            }
            })
        .catch(err => console.log(err))
    }, [])


    return (
        <ServicesContext.Provider value={{
            services, loading
        }}>
            {children}
        </ServicesContext.Provider>
    )
}

export { ServicesContext, ContextProvider }
