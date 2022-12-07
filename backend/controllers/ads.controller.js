// create a reference to the model
const { response } = require('../app');
const { updateOne } = require('../models/ads.model');
let Ads = require('../models/ads.model');

exports.adsList = function(req, res, next) {  
    
    Ads.find((err, adsList) => {
        // console.log(adsList);
        if(err)
        {
            return console.error(err);
        }
        else
        {
            res.render('ads/list', {
                title: 'Ads', 
                AdsList: adsList
            })            
        }
    });
}

module.exports.displayEditPage = (req, res, next) => {
    let id = req.params.id;

    Ads.findById(id, (err, itemToEdit) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            //show the edit view
            res.render('ads/add_edit', {
                title: 'Edit Item', 
                item: itemToEdit
            })
        }
    });
}


module.exports.processEditPage = (req, res, next) => {
    let id = req.params.id

    let updatedItem = Ads({
        _id: req.body.id,
        item: req.body.item,
        qty: req.body.qty,
        status: req.body.status,
        desc: req.body.desc,
        size : {
            l: req.body.size_l,
            w: req.body.size_w,
            uom: req.body.size_uom,
        }
    });

    // console.log(updatedItem);

    Ads.updateOne({_id: id}, updatedItem, (err) => {
        if(err)
        {
            console.log(err);
            // res.end(err);
            return res.status(400).jason({
                success: false,
                message: getErrorMessage(err)
            });
        }
        else
        {
            // console.log(req.body);
            // refresh the book list
            // res.redirect('/ads/list');
            return res.status(200).jason(updateItem);
        }
    });
}


module.exports.displayAddPage = (req, res, next) => {
    let newItem = Ads();

    res.render('ads/add_edit', {
        title: 'Add a New Item',
        item: newItem
    })          
}

module.exports.processAddPage = (req, res, next) => {
    let newItem = Ads({
        _id: req.body.id,
        item: req.body.item,
        qty: req.body.qty,
        status: req.body.status,
        desc: req.body.desc,
        size : {
            l: req.body.size_l,
            w: req.body.size_w,
            uom: req.body.size_uom,
        }
    });

    Ads.create(newItem, (err, item) =>{
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            // refresh the book list
            console.log(item);
            res.redirect('/ads/list');
        }
    });

}



module.exports.performDelete = (req, res, next) => {
    let id = req.params.id;

    Ads.remove({_id: id}, (err) => {
        if(err)
        {
            console.log(err);
            //res.end(err);
            return res.status(400).jason({
                success: false,
                message: getErrorMessage(err)
            });
        }
        else
        {
            // refresh the book list
            // res.redirect('/ads/list');
            return res.status(200).jason({
                success: true,
                message: "Item Removed Successfully"
            });
        }
    });
}