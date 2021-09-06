const express=require("express");
const mongoose=require("mongoose");

const router=express.Router();
const CourseModel = mongoose.model("Course");

router.get("/add", (req, res)=>{
    res.render("add");
});

router.post("/add", (req, res)=>{
    var course = new CourseModel();
    course.cname = req.body.cname;
    course.iname = req.body.iname;
    course.cdisc = req.body.cdisc;
    course.cprice = req.body.cprice;
    course.cduration = req.body.cduration;
    console.log(course);
    course.save((err, doc)=>{
        if(!err){
            res.redirect("/course/list");
        }else {
            res.send(err);
        }
    });
    //res.render("add");
});
router.get("/delete/:id", (req, res)=>{
    console.log(req.params.id);
    CourseModel.findByIdAndRemove(req.params.id, (err, doc)=>{
        if(!err){
            res.redirect("/course/list");
        }else {
            res.send(err);
        }
    });
});
router.post("/:id/update", (req, res)=>{
    CourseModel.findByIdAndUpdate(req.params.id, {$set: {cname: req.body.cname, iname: req.body.iname, cdisc: req.body.cdisc, cprice: req.body.cprice, cduration: req.body.cduration}}, (err, doc)=>{
        if(!err){
            res.redirect("/course/list");
        }else {
            res.send(err);
        }
    });
});
router.get("/:id/edit", (req, res)=>{
    
    CourseModel.findById(req.params.id, (err, doc)=>{
        console.log(doc);
        if(!err){
            res.render("edit", {course: doc});
        }else {
            res.send(err);
        }
    });
});
router.get("/list", (req, res)=>{
    //Getting
    CourseModel.find((err, docs)=>{
        if(!err){
            console.log(docs);
            res.render("list", {data: docs});
        }
    })
});

module.exports = router;