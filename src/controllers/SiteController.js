class SiteController {
    // [GET] /
    index(req, res) {
        res.render("index");
    }
}

export default new SiteController();
