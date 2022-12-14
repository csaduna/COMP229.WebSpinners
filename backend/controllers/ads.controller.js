// create a reference to the model
const { response } = require('../config/app');
const { updateOne } = require('../models/ads.model');
const ads_1 = __importDefault(require("../models/ads.model"));

exports.performDelete = exports.processEditPage = exports.processAddPage = exports.displayEditPage = exports.displayAddPage = exports.adsList = void 0;

function getErrorMessage(err) {    
    if (err.errors) {
        for (let errName in err.errors) {
            if (err.errors[errName].message) return err.errors[errName].message;
        }
    } 
    if (err.message) {
        return err.message;
    } else {
        return 'Unknown server error';
    }
};

function adsList(req, res, next) {
    ads_1.default.find(function (err, adsCollection) {
        if (err) {
            console.error(err);
            res.end(err);
        }
        res.json(adsCollection);
    });
}

exports.qaList = function(req, res, next) {  
    
    Ads.find((err, adsList) => {
        // console.log(qaList);
        if(err)
        {
            return console.error(err);
        }
        else
        {
            res.render('ads/qa', {
                title: 'Questions & Answers', 
                QaList: qaList
            })            
        }
    });
}
exports.adsList = adsList;


function displayAddPage(req, res, next) {
    res.json({ success: true, message: 'Add page displayed succesfully' });
}
exports.displayAddPage = displayAddPage;

function displayEditPage(req, res, next) {
    let _id = req.params._id;
    ads_1.default.findById(_id, {}, {}, function (err, adsToEdit) {
        if (err) {
            console.error(err);
            res.end(err);
        }
        res.json({ success: true, message: 'Edit page displayed succesfully', ads: adsToEdit });
    });
}
exports.displayEditPage = displayEditPage;

function processAddPage(req, res, next) {
    let newAds = new ads_1.default({
        "item": req.body.item,
        "qty": req.body.qty,
        "status": req.body.status,
        "desc": req.body.desc,
        "size" : {
            "l": req.body.size_l,
            "w": req.body.size_w,
            "uom": req.body.size_uom,
        }
    });
    newAds.isActive = true;
    ads_1.default.create(newAds, function (err) {
        if (err) {
            console.error(err);
            res.end(err);
        }
        else
        {
            // console.log(req.body);
            // refresh the book list
            // res.redirect('/ads/list');
            return res.status(200).json(updatedItem);
        }
    });
}
exports.processAddPage = processAddPage;

function processEditPage(req, res, next) {
    let _id = req.params._id;
    let updatedAds = new ads_1.default({
        "_id": _id,
        "item": req.body.item,
        "qty": req.body.qty,
        "status": req.body.status,
        "desc": req.body.desc,
        "size" : {
            "l": req.body.size_l,
            "w": req.body.size_w,
            "uom": req.body.size_uom,
        }
    });
    console.log(JSON.stringify(updatedAds));
    ads_1.default.updateOne({ _id: _id }, updatedAds, function (err) {
        if (err) {
            console.error(err);
            res.end(err);
        }
        console.log(updatedAds);
        res.json({ success: true, message: 'Successfully edited ads!', ads: updatedAds });
    });
}
exports.processEditPage = processEditPage;

// module.exports.processEditPage = (req, res, next) => {
//     let id = req.params.id

//     let updatedItem = Ads({
//         _id: req.body.id,
//         item: req.body.item,
//         qty: req.body.qty,
//         status: req.body.status,
//         desc: req.body.desc,
//         size : {
//             l: req.body.size_l,
//             w: req.body.size_w,
//             uom: req.body.size_uom,
//         }
//     });

    
//     // console.log(updatedItem);

//     Ads.updateOne({_id: id}, updatedItem, (err) => {
//         if(err)
//         {
//             console.log(err);
//             // res.end(err);
//             return res.status(400).json({
//                 success: false,
//                 message: getErrorMessage(err)
//             });
//         }
//         else
//         {
//             // console.log(req.body);
//             // refresh the book list
//             // res.redirect('/ads/list');
//             res.status(200).json(
//                 {
//                     success: true,
//                     message: 'Item updated successfully.'
//                 }
//             )
//         }
//     });
// }


// module.exports.displayAddPage = (req, res, next) => {
//     let newItem = Ads();

//     res.render('ads/add_edit', {
//         title: 'Add a New Item',
//         item: newItem,
//         userName: req.user ? req.user.username : ''
//     })          
// }

// module.exports.processAddPage = (req, res, next) => {
//     let newItem = Ads({
//         _id: req.body.id,
//         item: req.body.item,
//         qty: req.body.qty,
//         status: req.body.status,
//         desc: req.body.desc,
//         size : {
//             l: req.body.size_l,
//             w: req.body.size_w,
//             uom: req.body.size_uom,
//         }
//     });

//     Ads.create(newItem, (err, item) =>{
//         if(err)
//         {
//             console.log(err);
//             return res.status(400).json({
//                 success: false,
//                 message: getErrorMessage(err)
//             });
//         }
//         else
//         {
//             // refresh the book list
//             console.log(item);
//             res.redirect('/ads/list');
//             res.status(200).json(
//                 {
//                     success: true,
//                     message: 'Item added successfully.'
//                 }
//             )
//         }
//     });

// }

function performDelete(req, res, next) {
    let _id = req.params._id;
    ads_1.default.deleteOne({ _id: _id }, function (err) {
        if (err) {
            console.error(err);
            res.end(err);
        }
        res.json({ success: true, message: 'Successfully deleted ads!' });
    });
}
exports.performDelete = performDelete;