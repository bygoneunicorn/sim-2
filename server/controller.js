module.exports = {
    getHouses: (req, res, next) => {
        const dbInstance = req.app.get('db');
        dbInstance.get_houses()
            .then( houses => res.status(200).send( houses ) )
    },
    createHouse: (req, res, next) => {
        const dbInstance = req.app.get('db')
        const { name, address, city, state, zipcode } = req.body

        dbInstance.create_house([ name, address, city, state, zipcode ])
            .then( () => res.status(200).send())

    },
    deleteHouse: (req, res, next) =>{
        const dbInstance = req.app.get('db')
        const {parmas} = req

        dbInstance.delete_house([ params.id ])
            .then( () => res.status(200).send())
    }
}