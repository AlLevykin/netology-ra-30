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

let posts = [
    {
        "id": "60f5ea31-c2d9-4c05-b508-3bfa04b2467d",
        "created": 1627070795024,
        "content": "CRUD — акроним, обозначающий четыре базовые функции, используемые при работе с базами данных: создание (англ. create), чтение (read), модификация (update), удаление (delete). Введён Джеймсом Мартином (англ. James Martin) в 1983 году как стандартная классификация функций по манипуляции данными."
    },
    {
        "id": "2ad62390-8583-4688-97bf-8ff70d6a2b6c",
        "created": 1627070795024,
        "content": "В SQL этим функциям, операциям соответствуют операторы Insert (создание записей), Select (чтение записей), Update (редактирование записей), Delete (удаление записей)."
    },
    {
        "id": "5d07071d-c669-4c67-bdcc-d347305deaaf",
        "created": 1627070795024,
        "content": "В некоторых CASE-средствах использовались специализированные CRUD-матрицы или CRUD-диаграммы, в которых для каждой сущности указывалось, какие базовые функции с этой сущностью выполняет тот или иной процесс или та или иная роль. В системах, реализующих доступ к базе данных через API в стиле REST, эти функции реализуются зачастую (но не обязательно) через HTTP-методы PUT, GET, PATCH и DELETE соответственно."
    },
    {
        "id": "0025e5c6-9361-4b93-87d4-475f66fed747",
        "created": 1627070795024,
        "content": "Хотя традиционно оперирование в стиле CRUD применяется к базам данных, такой подход может быть распространён на любые хранимые вычислительные сущности (файлы, структуры в памяти, объекты). Шаблон проектирования ActiveRecord обеспечивает соответствие функций CRUD объектно-ориентированному подходу, и широко используется в различных фреймворках для доступа к базам данных из объектно-ориентированных языков программирования."
    }
];

const router = new Router();

router.get('/api/posts', async (ctx, next) => {
    ctx.response.body = posts;
});

router.post('/api/posts', async (ctx, next) => {
    const { id, content } = ctx.request.body;

    if (id !== "new") {
        posts = posts.map(o => o.id !== id ? o : { ...o, content: content });
        ctx.response.status = 200;
        return;
    }

    posts.push({ ...ctx.request.body, id: uuidv4() });
    ctx.response.status = 200;
});

router.delete('/api/posts/:id', async (ctx, next) => {
    const postId = ctx.params.id;
    const index = posts.findIndex(o => o.id === postId);
    if (index !== -1) {
        posts.splice(index, 1);
        ctx.response.status = 200;
    } else {
        ctx.response.status = 204;
    }
});

app.use(router.routes()).use(router.allowedMethods());

const port = process.env.PORT || 3001;
const server = http.createServer(app.callback());
server.listen(port, () => console.log('server started'));