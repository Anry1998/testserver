const express = require('express')
const PORT = process.env.PORT || 5001
const app = express()
app.get('*', (req, res) => {
    res.send('Hello Word')
})
app.listen(PORT, () => console.log(`Server started on port ${PORT}`))