const koa = require('koa'),
    app = new koa(),
    koa_router = require('koa-router'),
    body_parser = require('koa-bodyparser'),
    Pug = require('koa-pug'),
    fs = require('fs'),
    serve = require('koa-static');

const router = new koa_router();
const pug = new Pug({
    viewPath : './views',
    basedir : './views',
    app : app
});

const data = JSON.parse(fs.readFileSync('data.json'));
let movie_names = Object.keys(data);

app.use(body_parser({urlencoded:true}));
app.use(router.routes());
app.use(serve(__dirname + '/views'));

router.get('/', (ctx) => {
     ctx.render('home', {
         page_title : "Imdb top rated movies",
         movies : data,
         movie_names
     });
});

router.get('/movies/:name', (ctx) => {
    let movie_name_user_want = ctx.params.name;
    if(data[movie_name_user_want])
        ctx.render('movie_detail', {
            page_title : movie_name_user_want,
            data : data[movie_name_user_want]
        });
    else
        ctx.redirect('/');
});

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
    console.log("Server running at " + PORT);
});
