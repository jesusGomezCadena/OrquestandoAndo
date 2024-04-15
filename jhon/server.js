import express from 'express'

const app = express()

app.get('/api/information', (req, res) => {
    res.status(200).json({
        nombre: "Jhon Suescun",
        edad: 22,
        gustos: "Mi serie favorita es The Office"
    })
})

app.listen(3005, () => {
    console.log(`Server is running in port ${3005}`);
})