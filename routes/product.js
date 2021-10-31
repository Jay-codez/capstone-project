const router = require("express").Router();

router.get("/view-product", (req, res) => {
    res.render("view-product", { title: "Product View" });
});


module.exports = router;