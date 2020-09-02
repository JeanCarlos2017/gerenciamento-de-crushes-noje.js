import modelCrush from "../model/modelCrush";

class Controller {

    constructor() { }


    //select
    getCrushs() {
        return modelCrush.find({});
    }

    select(req, res) {
        this.getCrushs()
            .then(crushs => res.status(200).json({ 'result': crushs }))
            .catch(err => res.status(400).json({ 'result': err }));
    }
    //selectone
    getCrushsByID(id) {
        return modelCrush.find(id);
    }

    selectOne(req, res) {
        const id = { _id: req.params.id }

        this.getCrushsByID(id)
            .then(crushs => res.status(200).json({ 'result': crushs }))
            .catch(err => res.status(400).json({ 'result': err }));
    }

    //insert
    createCrush(data) {
        return modelCrush.create(data);
    }

    insert(req, res) {
        const crush = req.body;

        this.createCrush(crush)
            .then(crushs => res.status(200).json({ 'result': crushs }))
            .catch(err => res.status(400).json({ 'result': err }));
    }



}

export default Controller;