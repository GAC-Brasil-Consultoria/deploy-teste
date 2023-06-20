import express from "express";

const app = express();
// app.use(express.json());
// app.use(bp.json());
// app.use(bp.urlencoded({ extended: true }));
// app.use(router);
// app.use(errorMiddleware);
app.get("/", function (req, res) {
    res.send({ message: "Api de importação de excel gac", version: '1.0.0.1' });
  });
app.listen(3001, () =>
  console.log(`Server listening on port 3001`)
);
