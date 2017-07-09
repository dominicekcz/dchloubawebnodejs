const express = require('express')

const router = express.Router()

router.get('/', (req, res) => {
    res.render('index', {
        title: 'O mně | Dominik Chlouba',
        versionName: 'Node-PreBuilt',
        buildNumber: '21.170621.0923'
    })
})

module.exports = router