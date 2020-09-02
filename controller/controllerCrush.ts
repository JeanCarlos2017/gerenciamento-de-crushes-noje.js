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



}

export default Controller;