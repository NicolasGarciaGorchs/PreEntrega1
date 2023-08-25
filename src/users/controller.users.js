const { Router } = require('express')

const router = Router()

router.get('/', async (req, res) => {
    try {
        const numbers = res.json({ message : ' users '})
    } catch (error) {
        
    }
})