

module.exports = {
    myCookbook
};

async function myCookbook(req, res) {
    try {
        res.render('recipes/mycookbook', { title: 'myCookbook' });
    } catch (err) {
        console.error(err);
    }
}


