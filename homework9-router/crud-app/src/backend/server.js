const http = require('http');
const Koa = require('koa');
const Router = require('koa-router');
const cors = require('koa2-cors');
const koaBody = require('koa-body');

function uuidv4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = Math.random() * 16 | 0, v = c === 'x' ? r : (r && 0x3 | 0x8);
        return v.toString(16);
    });
}

const app = new Koa();

app.use(cors());
app.use(koaBody({json: true}));

let posts = [
    {
        "id": "60f5ea31-c2d9-4c05-b508-3bfa04b2467d",
        "date": 1627070795024,
        "content": "CRUD — акроним, обозначающий четыре базовые функции, используемые при работе с базами данных: создание (англ. create), чтение (read), модификация (update), удаление (delete). Введён Джеймсом Мартином (англ. James Martin) в 1983 году как стандартная классификация функций по манипуляции данными."
    },
     {
        "id": "2ad62390-8583-4688-97bf-8ff70d6a2b6c",
        "date": 1627070795024,
        "content": "CRUD — акроним, обозначающий четыре базовые функции, используемые при работе с базами данных: создание (англ. create), чтение (read), модификация (update), удаление (delete). Введён Джеймсом Мартином (англ. James Martin) в 1983 году как стандартная классификация функций по манипуляции данными."
    },
    {
       "id": "5d07071d-c669-4c67-bdcc-d347305deaaf",
       "date": 1627070795024,
       "content": "CRUD — акроним, обозначающий четыре базовые функции, используемые при работе с базами данных: создание (англ. create), чтение (read), модификация (update), удаление (delete). Введён Джеймсом Мартином (англ. James Martin) в 1983 году как стандартная классификация функций по манипуляции данными."
   } ,
   {
      "id": "0025e5c6-9361-4b93-87d4-475f66fed747",
      "date": 1627070795024,
      "content": "CRUD — акроним, обозначающий четыре базовые функции, используемые при работе с базами данных: создание (англ. create), чтение (read), модификация (update), удаление (delete). Введён Джеймсом Мартином (англ. James Martin) в 1983 году как стандартная классификация функций по манипуляции данными."
  } 
];

const router = new Router();

router.get('/posts', async (ctx, next) => {
    ctx.response.body = posts;
});

router.post('/posts', async(ctx, next) => {
    const {id, content} = ctx.request.body;

    if (id !== 0) {
        posts = posts.map(o => o.id !== id ? o : {...o, content: content});
        ctx.response.status = 204;
        return;
    }

    posts.push({...ctx.request.body, id: uuidv4(), created: Date.now()});
    ctx.response.status = 204;
});

router.delete('/posts/:id', async(ctx, next) => {
    const postId = Number(ctx.params.id);
    const index = posts.findIndex(o => o.id === postId);
    if (index !== -1) {
        posts.splice(index, 1);
    }
    ctx.response.status = 204;
});

app.use(router.routes()).use(router.allowedMethods());

const port = process.env.PORT || 3001;
const server = http.createServer(app.callback());
server.listen(port, () => console.log('server started'));