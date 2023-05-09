import { app } from "./config/app";
import { router } from "./routes/index";

const PORT = 8000;

app.use(router);

app.listen(PORT, () => console.log(`Server is on localhost:${PORT}`));
