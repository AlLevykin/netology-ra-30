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
app.use(koaBody({ json: true }));

const notes = [
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

router.get('/notes', async (ctx, next) => {
    ctx.response.body = notes;
});

router.post('/notes', async (ctx, next) => {
    notes.push({ ...ctx.request.body, id: uuidv4(), date: Date.now() });
    ctx.response.status = 204;
});

router.delete('/notes/:id', async (ctx, next) => {
    const noteId = ctx.params.id;
    const index = notes.findIndex(o => o.id === noteId);   
    if (index !== -1) {
        notes.splice(index, 1);
    }
    ctx.response.status = 204;
});

app.use(router.routes()).use(router.allowedMethods());

const port = process.env.PORT || 3001;
const server = http.createServer(app.callback());
server.listen(port, () => console.log('server started'));