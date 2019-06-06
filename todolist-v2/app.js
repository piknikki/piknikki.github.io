
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require('mongoose');
const _ = require('lodash');

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

mongoose.connect('mongodb+srv://admin-nikki:Test789@cluster0-ktbxv.mongodb.net/todolistDB', { useNewUrlParser: true });

// create schema
const itemsSchema = new mongoose.Schema ({
    name: String,
});

// create model
const Item = mongoose.model("Item", itemsSchema);

// instantiate model based on the schema
const item1 = new Item ({
    name: "Welcome to your todolist!"
});
const item2 = new Item ({
    name: "Hit the + button to add a new item."
});
const item3 = new Item ({
    name: "<-- Hit this to delete an item."
});

// make an array of the items
const defaultItems = [item1, item2, item3];

const listSchema = {
    name: String,
    items: [itemsSchema]
};

const List = mongoose.model("List", listSchema);


app.get("/", function(req,res){
    Item.find({}, function(err, foundItems) {
        if (foundItems.length === 0) {
            Item.insertMany(defaultItems, function(err) {
                if (err) {
                    console.log(err);
                } else {
                    console.log("successfully saved all the items to the DB");
                }
            });
            res.redirect("/");
        } else {
            res.render("list", {listTitle: "Today", newListItems: foundItems});
        }
    });
});

app.get("/:customListName", function(req,res) {

    const customListName = _.capitalize(req.params.customListName);

    List.findOne({name: customListName}, function (err, foundList) {
        if (!err) {
            if (!foundList) {
                // create a new list
                const list = new List({
                    name: customListName,
                    items: defaultItems
                });
                list.save();
                res.redirect("/" + customListName);
            } else {
                // show an existing list
                res.render("list", {listTitle: foundList.name, newListItems: foundList.items})
            }
        }
    });


});

app.post("/", function (req, res) {

    const itemName = req.body.newItem;
    const listName = req.body.list; // this is the name of the button
    const item = new Item ({
        name: itemName
    });

    if (listName === "Today") {
        item.save();
        res.redirect("/");
    } else {
        List.findOne({name: listName}, function(err, foundList) {
            foundList.items.push(item);
            foundList.save();
            res.redirect("/" + listName);
        });
    }
});

app.post("/delete", function(req, res) {

    const checkedItemId = req.body.checkbox;
    const listName = req.body.listName;

    if (listName === "Today") {
        Item.findByIdAndRemove(checkedItemId, function (err) {
            if (err) {
                console.log(err);
            } else {
                console.log("sucessfully deleted your item");
            }
            res.redirect("/");
        });
    } else {

        List.findOneAndUpdate(
            {name: listName},
            {$pull: {items: {_id: checkedItemId}}},
            function(err, foundList) {
                if (!err) {
                    res.redirect("/" + listName)
                }
            }
        );
    }
});

app.get("/about", function (req, res) {
    res.render("about");
});


let port = process.env.PORT; // heroku port
if (port == null || port == "") {
    port = 3000;
}


app.listen(port, function() {
    console.log("server has started successfully");
});


