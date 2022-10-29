const express = require('express');
const router = express.Router();

const authorController= require("../controllers/authorController")
const bookController= require("../controllers/bookController")
const publisherController= require("../controllers/publisherController")


router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createAuthor", authorController.createAuthor  )

router.get("/getAuthorsData", authorController.getAuthorsData)

router.post("/createBook", bookController.createBook  )

router.get("/getBooksData", bookController.getBooksData)

router.post("/createPublisher", publisherController.createPublisher)

router.get("/getPublisherData", publisherController.getPublishersData)

router.get("/getBooksWithAuthorDetails", bookController.getBooksWithAuthorDetails)

router.get("/getBooksWithAuthorAndPublisherDetails", bookController.getBooksWithAuthorAndPublisherDetails)

router.put("/BookPrintBy",bookController.BookPrintBy)

router.put("/updatPrice",bookController.updatPrice)

module.exports = router;