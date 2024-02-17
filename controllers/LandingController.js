import path from 'path';
const __dirname = path.resolve();

const index = (req, res) => {
    res.sendFile(path.join(__dirname+'/static/index.html'));
}

const unknownRoute = (req, res) => {
    res.status(404).send("Are you lost my child?");
}

export { index, unknownRoute }